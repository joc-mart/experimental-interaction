let glass = [];
var clicks = 0;

function preload() {
    bg = loadImage("assets/wavysand.jpg");
}

function setup() {
    createCanvas(1200, 800);

    for (let i = 0; i < 10; i++) {
        let x = random(width);
        let y = random(height);
        let w = random(10, 60);
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

    for (let i = 0; i < glass.length; i++) {
        glass[i].show();
    }

    textSize(50);
    fill(255);
    text("my pocket = " + clicks, width - 400, height - 50);
}

class Seaglass {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color(137, 250, 211, 150);
    }

    clicked(px, py) {
        let d = dist(px, py, this.x, this.y);
        if (d < this.w) {
            this.color = 255, 255, 255;
            clicks++;
        }
    }

    show() {
        strokeWeight(0);
        fill(this.color);
        ellipse(this.x, this.y, this.w, this.h);
    }
}