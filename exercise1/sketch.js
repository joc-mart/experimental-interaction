let glass = [];
var clicks = 0;

function preload() {
    bg = loadImage("assets/sandy.jpg");
    fontDisplay = loadFont("assets/BagelFatOne-Regular.ttf");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    resetSketch();

}

function resetSketch() {
    clicks = 0;
    for (let i = 0; i < 10; i++) {
        let x = random(width);
        let y = random(height);
        let w = random(30, 100);
        let h = random(20, 50);
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

    // have the function run again when the clicks variable == 10 //
    if (clicks == 10) {
        resetSketch();
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
        let colors = [color(137, 250, 211, 150), color(229, 145, 250, 150), color(76, 240, 50, 150), color(54, 141, 255, 150), color(14, 110, 77, 150)];
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