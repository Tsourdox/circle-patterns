var offset = 10;
var nrOfDots = 420;
var multiplier = 100;
var dots = [];

/**
 * Main draw function which gets the context and draws everything.
 */
function draw() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    
    // Responsiveness
    circleRadius = canvas.width / 2 - offset;
    dotRadius = canvas.width / 200;
    context.lineWidth = canvas.width / 1000;
    
    // Draw on canvas
    clearCanvas(context);
    drawOutlineCircle(context, circleRadius);
    drawOutlineDots(context, circleRadius, dotRadius);
    drawLines(context);
}

/**
 * Clears the whole canvas before and is called before any else is drawn.
 * @param {CanvasRenderingContext2D} context 
 */
function clearCanvas(context) {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

/**
 * Draws the large circle which encapsulates everything.
 * @param {CanvasRenderingContext2D} context 
 * @param {Number} radius 
 */
function drawOutlineCircle(context, radius) {
    context.strokeStyle = "lightgrey";
    context.beginPath();
    context.arc(radius + offset, radius + offset, radius, 0, Math.PI * 2, true);
    context.stroke();
}

/**
 * Draws the dots on the large circle based on nrOfDots.
 * @param {CanvasRenderingContext2D} context 
 * @param {Number} circleRadius the radius of the outline circle
 * @param {Number} dotRadius the radius of each dot on the outline circle
 */
function drawOutlineDots(context, circleRadius, dotRadius) {
    context.fillStyle = "red";
    for(var i = 0; i < nrOfDots; i++) {
        var circleOrigin = offset + circleRadius;
        var x = circleOrigin + (circleRadius * Math.cos(2 * Math.PI * i / nrOfDots - Math.PI * 0.5));
        var y = circleOrigin + (circleRadius * Math.sin(2 * Math.PI * i / nrOfDots - Math.PI * 0.5));

        context.beginPath();
        context.arc(x, y, dotRadius, 0, Math.PI * 2, true);
        context.fill();

        dots[i] = {
            x: x,
            y: y,
        };
    }
}

/**
 * Draws the lines between each dot on the circle based the multiplier.
 * @param {CanvasRenderingContext2D} context 
 */
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