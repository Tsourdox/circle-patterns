var offset = 10;
var nrOfDots = 570;
var multiplier = 145;
var dots = [];

function draw() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    
    // Responsiveness
    radius = canvas.width / 2 - offset;
    dotSize = canvas.width / 200;
    context.lineWidth = canvas.width / 1000;
    
    // Draw on canvas
    clearCanvas(context);
    drawOutlineCircle(context, radius);
    drawOutlineDots(context, radius, dotSize);
    drawLines(context);
}

function clearCanvas(context) {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawOutlineCircle(context, radius) {
    context.strokeStyle = "lightgrey";
    context.beginPath();
    context.arc(radius + offset, radius + offset, radius, 0, Math.PI * 2, true); // Outer circle
    context.stroke();
}

function drawOutlineDots(context, radius, dotSize) {
    context.fillStyle = "red";
    for(var i = 0; i < nrOfDots; i++) {
        var y = offset + radius + radius * Math.cos(2 * Math.PI * i / nrOfDots) * -1;
        var x = offset + radius + radius * Math.sin(2 * Math.PI * i / nrOfDots);    

        context.beginPath();
        context.arc(x, y, dotSize, 0, Math.PI * 2, true);  // Left eye
        context.fill();

        dots[i] = {
            x: x,
            y: y,
        };
    }
}

function drawLines(context) {
    context.strokeStyle = "black";
    context.beginPath();
    for(var startIndex = 0; startIndex < nrOfDots; startIndex++) {
        var nextIndex = (startIndex * multiplier) % nrOfDots;
        context.moveTo(dots[startIndex].x, dots[startIndex].y);
        context.lineTo(dots[nextIndex].x, dots[nextIndex].y);
    }
    context.stroke();
}