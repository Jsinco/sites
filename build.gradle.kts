import org.gradle.api.tasks.Exec

plugins {
    java
    id("org.springframework.boot") version "3.3.5"
    id("io.spring.dependency-management") version "1.1.6"
    id("org.graalvm.buildtools.native") version "0.10.3"
    id("com.github.johnrengelman.shadow") version "8.1.1"
}


val react = "src/main/react"
val static = "src/main/resources/static"

group = "dev.jsinco.spring"
version = "0.0.1"

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(17)
    }
}

configurations {
    compileOnly {
        extendsFrom(configurations.annotationProcessor.get())
    }
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    compileOnly("org.projectlombok:lombok")
    developmentOnly("org.springframework.boot:spring-boot-devtools")
    annotationProcessor("org.projectlombok:lombok")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}


tasks {

    jar {
        manifest {
            attributes(
                "Main-Class" to "dev.jsinco.spring.webserver.SpringWebserverApplication"
            )
        }
        enabled = false
    }

    bootJar {
        dependsOn("buildReact")
        dependsOn(shadowJar)
    }

    shadowJar {
        dependencies {

        }
        archiveBaseName.set("sites")
        archiveClassifier.set("all")
    }

    register<Exec>("buildReact") {
        group = "buildreact"
        description = "Builds the React projects"

        val reactDir = File(projectDir, react)
        val files = reactDir.listFiles()?.filter { it.isDirectory }

        println("Building ${files?.size} React projects (" + files?.joinToString { it.name } + ")")
        if (files != null) {
            for (file in files) {
                workingDir = file

                commandLine("npm.cmd", "install")
                commandLine("npm.cmd", "run", "build")

            }
        }

        doLast {
            println("Copying ${files?.size} React projects (" + files?.joinToString { it.name } + ")")
            if (files != null) {
                for (file in files) {
                    val staticDir = File(projectDir, static)
                    copyFolder(File(file, "dist"), File(staticDir, file.name))
                }
            }
        }
    }

    withType<Test> {
        useJUnitPlatform()
    }
}

fun copyFolder(source: File, dest: File) {
    source.copyRecursively(dest, overwrite = true)
}
