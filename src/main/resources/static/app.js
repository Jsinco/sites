class Theme {
    name
    rgb1
    rgb2
    bgGradient1
    bgGradient2

    constructor(name, rgb1, rgb2, bgGradient1, bgGradient2) {
        this.name = name
        this.rgb1 = rgb1
        this.rgb2 = rgb2
        this.bgGradient1 = bgGradient1
        this.bgGradient2 = bgGradient2
    }
}


const themes = [
    new Theme('Sherbet', '#ff6a00', '#ee0979', '#FC8A39', '#E44E97'),
    new Theme('Nebula', '#896CF3', '#4C84EC', '#B29FF5', '#9FBDF5'),
    new Theme('Mangrove', '#3BD389', '#7D6448', '#9FF5CB', '#8C755B'),
    new Theme('Cotton Candy', '#FA98ED', '#A8FDFD', '#dbb2ee', '#c2daf8'),
    new Theme('Mocha', '#7B6250', '#E4BD8F', '#957966', '#F1D0AB')
]

Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}

const circleElement = document.querySelector('.circle')
const mouse = {x: 0, y: 0}
const prevMouse = {x: 0, y: 0}
const circle = {x: 0, y: 0}
const speed = 0.17

let currentScale = 0
let currentAngle = 0;


function updateGradientPosition(offsetX, offsetY) {
    const center = Math.round(offsetX + offsetY);
    const direction = `-${center}deg`;

    document.documentElement.style.setProperty('--gradient-direction', direction);
}

function tick() {
    circle.x += (mouse.x - circle.x) * speed;
    circle.y += (mouse.y - circle.y) * speed;

    const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;


    const deltaMouseX = mouse.x - prevMouse.x;
    const deltaMouseY = mouse.y - prevMouse.y;

    prevMouse.x = mouse.x;
    prevMouse.y = mouse.y;

    const mouseVelocity = Math.min(Math.sqrt(deltaMouseX**2 + deltaMouseY**2) * 7, 150);
    const scaleValue = (mouseVelocity / 150) * 0.5;

    currentScale += (scaleValue - currentScale) * speed;

    const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;


    const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;

    if (mouseVelocity > 20) {
        currentAngle = angle;
    }

    const rotateTransform = `rotate(${currentAngle}deg)`;


    circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;


    window.requestAnimationFrame(tick);
}


document.addEventListener('mousemove', (event) => {
    mouse.x = event.x
    mouse.y = event.y

});

document.addEventListener('mousemove', (event) => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate offset based on mouse position and screen size
    const offsetX = (mouseX / screenWidth) * 100;
    const offsetY = (mouseY / screenHeight) * 100;

    // Update gradient position (adjust as needed)
    updateGradientPosition(offsetX, offsetY);
});

document.addEventListener('DOMContentLoaded', () => {
    const theme = themes.random()

    document.documentElement.style.setProperty('--hex1', theme.rgb1)
    document.documentElement.style.setProperty('--hex2', theme.rgb2)

    document.documentElement.style.setProperty('--color1', theme.bgGradient1)
    document.documentElement.style.setProperty('--color2', theme.bgGradient2)

    document.getElementById('footer').querySelector('h1').textContent = theme.name
})

tick()


