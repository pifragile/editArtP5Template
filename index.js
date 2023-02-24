const canvas = document.createElement("canvas");
canvas.id = "myCanvas";
canvas.width = window.innerHeight;
canvas.height = window.innerWidth;
canvas.style.zIndex = 8;
canvas.style.position = "absolute";

const body = document.getElementsByTagName("body")[0];
body.appendChild(canvas);

const ctx = canvas.getContext("2d");

function drawArt() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = `rgba(${randomM0() * 255}, ${randomM0() * 255}, ${
        randomM0() * 255
    }, 1)`;

    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "rgba(0, 255, 0, 1)";
    ctx.fillRect(m1 * width, m2 * height, m3 * width * 0.5, m4 * height * 0.5);
}
