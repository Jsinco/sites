export class Theme {
    private readonly name: string;
    private readonly rgb1: string;
    private readonly rgb2: string;
    private readonly bgGradient1: string;
    private readonly bgGradient2: string;

    constructor(name: string, rgb1: string, rgb2: string, bgGradient1: string, bgGradient2: string) {
        this.name = name;
        this.rgb1 = rgb1;
        this.rgb2 = rgb2;
        this.bgGradient1 = bgGradient1;
        this.bgGradient2 = bgGradient2;
    }

    getName(): string {
        return this.name;
    }

    getRgb1(): string {
        return this.rgb1;
    }

    getRgb2(): string {
        return this.rgb2;
    }

    getBgGradient1(): string {
        return this.bgGradient1;
    }

    getBgGradient2(): string {
        return this.bgGradient2;
    }
}

export const themes = [
    //new Theme('Sherbet', '#ff6a00', '#ee0979', '#FC8A39', '#E44E97'),
    new Theme('Mocha', '#e3cece', '#dadee7', '#3d3c3c', '#131313')
];