var radius = 300;
var dotSize = 4;
var offsetX = 100;
var offsetY = 50;

var nrOfDots = 224;
var multiplier = 193;
var dots = [];


setup();
function setup() {
    var dotsInput = document.getElementById("dots-input");
    var mulitplierInput = document.getElementById("multiplier-input");
    var dotsSpan = document.getElementById("dots");
    var multiplierSpan = document.getElementById("multiplier");
    
    dotsInput.value = nrOfDots;
    mulitplierInput.value = multiplier;
    dotsSpan.innerText = nrOfDots;
    multiplierSpan.innerText = multiplier;

    draw();
}

function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        
        clearCanvas(ctx);
        drawOutlineCircle(ctx);
        drawOutlineDots(ctx);
        drawLines(ctx);
    }
}

function clearCanvas(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawOutlineCircle(ctx) {
    ctx.strokeStyle = "lightgrey";
    ctx.beginPath();
    ctx.arc(radius + offsetX, radius + offsetY, radius, 0, Math.PI * 2, true); // Outer circle
    ctx.stroke();
}

function drawOutlineDots(ctx) {
    ctx.fillStyle = "red";
    for(var i = 0; i < nrOfDots; i++) {
        var y = offsetY + radius + radius * Math.cos(2 * Math.PI * i / nrOfDots) * -1;
        var x = offsetX + radius + radius * Math.sin(2 * Math.PI * i / nrOfDots);    

        ctx.beginPath();
        ctx.arc(x, y, dotSize, 0, Math.PI * 2, true);  // Left eye
        ctx.fill();

        dots[i] = {
            x: x,
            y: y,
        };
    }
}

function drawLines(ctx) {
    ctx.strokeStyle = "black";
    ctx.beginPath();
    for(var startIndex = 0; startIndex < nrOfDots; startIndex++) {
        var nextIndex = (startIndex * multiplier) % nrOfDots;
        ctx.moveTo(dots[startIndex].x, dots[startIndex].y);
        ctx.lineTo(dots[nextIndex].x, dots[nextIndex].y);
    }
    ctx.stroke();
}

function nrOfDotsChanged(value) {
    nrOfDots = value;
    document.getElementById("dots").innerText = value;
    draw();
}

function multiplierChanged(value) {
    multiplier = value;
    document.getElementById("multiplier").innerText = value;
    draw();
}