// DO NOT EDIT THIS FILE
// IT WILL BE RESET TO DEAFULT BEFORE DEPLOYMENT

parent.postMessage({ editArtTemplateVersion: 1 }, "*");

window.capturePreview = false;
function triggerPreview() {
    if(!window.capturePreview) console.log('Trigger preview')
    window.capturePreview = true;
}

let m0 = 0.5;
let m1 = 0.5;
let m2 = 0.5;
let m3 = 0.5;
let m4 = 0.5;

let randomM0;
let randomM1;
let randomM2;
let randomM3;
let randomM4;

const queryString = window.location.search;
console.log(queryString);
if (queryString) {
    getParams(queryString);
}

seedRandomness();

function truncate(i) {
    return Math.max(Math.min(i, 0.99999999), 0);
}
function getParam(urlParams, p) {
    const param = urlParams.get(p);
    if (param) {
        return truncate(parseFloat(param));
    }
    return null;
}

function getParams(queryString) {
    const urlParams = new URLSearchParams(queryString);
    m0 = getParam(urlParams, "m0");
    m1 = getParam(urlParams, "m1");
    m2 = getParam(urlParams, "m2");
    m3 = getParam(urlParams, "m3");
    m4 = getParam(urlParams, "m4");
}
window.addEventListener("message", (e) => {
    var data = e.data;
    if (data.hasOwnProperty("editartQueryString")) {
        getParams(data["editartQueryString"]);
        triggerDraw();
    }
});

function triggerDraw() {
    seedRandomness();
    cs = min(windowHeight, windowWidth);
    resizeCanvas(cs, cs);
    parent.postMessage("editArtSketchLoaded", "*");
}

function windowResized() {
    triggerDraw()
}

function getRNG(num) {
    return sfc32(...cyrb128(randomSeed + num.toString()));
}

function seedRandomness() {
    randomM0 = getRNG(m0);
    randomM1 = getRNG(m1);
    randomM2 = getRNG(m2);
    randomM3 = getRNG(m3);
    randomM4 = getRNG(m4);
}

function cyrb128(str) {
    let h1 = 1779033703,
        h2 = 3144134277,
        h3 = 1013904242,
        h4 = 2773480762;
    for (let i = 0, k; i < str.length; i++) {
        k = str.charCodeAt(i);
        h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
        h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
        h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
        h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
    }
    h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
    h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
    h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
    h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
    return [
        (h1 ^ h2 ^ h3 ^ h4) >>> 0,
        (h2 ^ h1) >>> 0,
        (h3 ^ h1) >>> 0,
        (h4 ^ h1) >>> 0,
    ];
}

function sfc32(a, b, c, d) {
    return function () {
        a >>>= 0;
        b >>>= 0;
        c >>>= 0;
        d >>>= 0;
        var t = (a + b) | 0;
        a = b ^ (b >>> 9);
        b = (c + (c << 3)) | 0;
        c = (c << 21) | (c >>> 11);
        d = (d + 1) | 0;
        t = (t + d) | 0;
        c = (c + t) | 0;
        return (t >>> 0) / 4294967296;
    };
}
