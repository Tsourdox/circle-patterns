
function init() {
    var dotsInput = document.getElementById("dots-input");
    var mulitplierInput = document.getElementById("multiplier-input");
    var dotsSpan = document.getElementById("dots");
    var multiplierSpan = document.getElementById("multiplier");
    
    dotsInput.value = nrOfDots;
    mulitplierInput.value = multiplier;
    dotsSpan.innerText = nrOfDots;
    multiplierSpan.innerText = multiplier;

    window.addEventListener("resize", onWindowResize);
    draw();
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

function onWindowResize() {
    var canvas = document.getElementById('canvas');
    var width = window.innerWidth;
    var height = window.innerHeight;
    
    if (width > height) {
        // Landscape
        canvas.width = height - 120;
        canvas.height = height - 120;
    } else {
        // Portrait
        canvas.width = width;
        canvas.height = width;
    }

    draw();
}