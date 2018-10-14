// Get the canvas element
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
let screenSize = document.getElementsByTagName('body')[0].clientWidth;
canvas.style.width = screenSize + "px";
canvas.style.height = "500px";

// Set actual screenSize in memory (scaled to account for extra pixel density).
var scale = window.devicePixelRatio; // <--- Change to 1 on retina screens to see blurry canvas.
canvas.width = screenSize * scale;
canvas.height = 500;

// Normalize coordinate system to use css pixels.
ctx.scale(scale, scale);
// create Particle Array
var balls = [];
//particle creation

// creation of balls
var ballsHTML = document.getElementsByTagName('ball');
for (var i = 0; i < ballsHTML.length; i++) {
    var ball = ballsHTML[i];
    var name = ball.getAttribute('data-name') || '';
    var value = ball.getAttribute('data-value') || 0;
    var color = ball.getAttribute('data-color') || null;
    var textColor = ball.getAttribute('data-text-color') || null;
    createBall(value, name, color, textColor)
}

//now make more balls with the mouse
//figure out mouse position
var rect = document.getElementById("canvas").getBoundingClientRect();
// Get canvas offset on page
var offset = {
    x: rect.left,
    y: rect.top
};

//get random number between 2 nums
function randNum(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomColor() {
    var letters = '23456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 14)];
    }
    return color;
}

function createBall(percent, text, color = null, textColor = null) {
    var size = (percent * screenSize / 100) / 8;
    balls.push({
        // location
        x: randNum(30, canvas.width - 30),
        y: randNum(30, canvas.width - 30),
        //velocity
        vx: randNum(-50, 50),
        vy: randNum(-50, 50),
        //acceleration
        ax: randNum(-50, 50),
        ay: randNum(-50, 50),
        radius: size,
        color: color || getRandomColor(),
        text: text,
        textColor: textColor || 'white',
    });
}

// draw all balls
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < balls.length; i++) {
        var p = balls[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.fill();

        var numLetters = p.text.length;
        var letterSize = ((p.radius * 2) / numLetters);
        ctx.fillStyle = p.textColor;
        ctx.font = letterSize + 'px Consolas';
        ctx.fillText(p.text, p.x - p.radius / 2, p.y + p.radius / 8);
    }
}

// animation update loop
function update() {
    for (var i = 0; i < balls.length; i++) {
        var p = balls[i];
        //set acceleration 
        p.vx += p.ax / FPS;
        p.vy += p.ay / FPS;
        p.x += p.vx / FPS;
        p.y += p.vy / FPS;
        //canvas edge collision detection
        if ((p.x - p.radius) < 0) {
            p.x = p.radius;
            p.vx = -p.vx;
        }
        if ((p.x + p.radius) > canvas.width) {
            p.x = canvas.width - p.radius;
            p.vx = -p.vx;
        }
        if ((p.y - p.radius) < 0) {
            p.y = p.radius;
            p.vy = -p.vy;
        }
        if ((p.y + p.radius) > canvas.height) {
            p.y = canvas.height - p.radius;
            p.vy = -p.vy;
        }
    }
}


//do all the things
function tick() {
    draw();
    update();
}

// set frames-per-second for timer
var FPS = 60;
//do it all at this speed
setInterval(tick, 1000 / FPS);