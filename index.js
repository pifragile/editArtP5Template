let cs;

function setup() {
    cs = min(windowHeight, windowWidth);
    createCanvas(cs, cs);
    noLoop();
    colorMode(HSB);
    noStroke();
}

function draw() {
    background(m0 * 360, 100, 100);
    fill(m1 * 360, 100, 100);
    circle(m2 * cs, m3 * cs, 0.2 * cs);
    for (let i = 0; i < 200; i++) {
        circle(randomM4() * cs, randomM4() * cs, randomM4() * cs * 0.01);
    }
    triggerPreview();
}