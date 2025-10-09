let cs;

let img;
async function setup() {
    cs = min(windowHeight, windowWidth);
    createCanvas(cs, cs);
    noLoop();
    colorMode(HSB);
    noStroke();

    try {
        img = await loadImage("image.png");
    } catch (err) {
        console.error("Error loading image", err);
    }
}

function draw() {
    clear()
    image(img, 0, 0, cs * m0, cs * m1);
    triggerPreview();
}

function windowResizedUser() {
    cs = min(windowHeight, windowWidth);
    resizeCanvas(cs, cs);
}
