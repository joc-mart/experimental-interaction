let glass = [];
var clicks = 0;

function preload() {
    bg = loadImage("assets/sandy.jpg");
    fontRegular = loadFont("assets/LexendDeca-VariableFont_wght.ttf");
    fontDisplay = loadFont("assets/BagelFatOne-Regular.ttf");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < 10; i++) {
        let x = random(width);
        let y = random(height);
        let w = random(10, 100);
        let h = (30);
        let g = new Seaglass (x, y, w, h);
        glass.push(g);
    }
}

function mousePressed() {
    for (let i = 0; i < glass.length; i++) {
        if (glass[i].clicked(mouseX, mouseY)){
            clicks++;
        }
    }
}

function draw() {
    background(bg);

    textSize(70);
    fill(14, 110, 77);
    textFont(fontDisplay);
    text("Seaglass Collecting", 50, 100);

    for (let i = 0; i < glass.length; i++) {
        glass[i].show();
    }

    textSize(50);
    fill(137, 250, 211);
    text("my pocket = " + clicks, width - 400, height - 50);
}

class Seaglass {
    
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        let colors = [color(137, 250, 211, 150), color(229, 145, 250, 150), color(76, 240, 50, 150), color(54, 141, 255, 150)];
        this.color = random(colors);
    }

    clicked(px, py) {
        let d = dist(px, py, this.x, this.y);
        if (d < this.w) {
            this.color = color(0, 0, 0, 0);
            clicks++;
        }
    }

    show() {
        strokeWeight(0);
        fill(this.color);
        ellipse(this.x, this.y, this.w, this.h);
    }
}