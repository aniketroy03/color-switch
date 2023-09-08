document.addEventListener("click", jump);

// Physics
let ballX = "50%";
let ballY = "100px";
let ballSpeedY = "0px";
let gravity = "-0.1px";
let jumpForce = "2.5 px";
let jumpStart = false;
let isGameOver = false;
let touchColorChange = false;
let secondShapeHit = false;

// Materials
let red2 = document.getElementById("red2");
let blue2 = document.getElementById("blue2");
let green2 = document.getElementById("green2");
let yellow2 = document.getElementById("yellow2");
let square2 = document.getElementById("square2");

let red1 = document.getElementById("red1");
let blue1 = document.getElementById("blue1");
let green1 = document.getElementById("green1");
let yellow1 = document.getElementById("yellow1");
let square1 = document.getElementById("square1");

// Color Logic
let colors = [
  "rgb(228, 73, 73)", // Red
  "rgb(28, 189, 46)", // Green
  "rgb(88, 73, 228)", // Blue
  "rgb(228, 247, 26)", // Yellow
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomIndex = getRandomInt(0, 3);
let randomColor = colors[randomIndex];
//

// colorChange
let colorCircle = document.getElementById("colorCircle");
// let computedStyle = window.getComputedStyle(colorCircle);
// let colorCircleX = computedStyle.getPropertyValue("left");
// let colorCircleY = computedStyle.getPropertyValue("bottom");
// console.log(colorCircleX, colorCircleY);

// Rotate shapes in circular motion logic
let angle = 0;
let radius = 75;
let speed = 0.18; // Adjust the speed of the animation

// Collision detection
function compStyle(line) {
  let computedStyle = window.getComputedStyle(line);
  let y = computedStyle.getPropertyValue("bottom");
  return y;
}
function collisionDetection(circle) {
  // console.log(touchColorChange, "dekho");
  // console.log(circle.style.bottom);
  let red = circle.style.backgroundColor === "rgb(228, 73, 73)";
  let blue = circle.style.backgroundColor === "rgb(88, 73, 228)";
  let green = circle.style.backgroundColor === "rgb(28, 189, 46)";
  let yellow = circle.style.backgroundColor === "rgb(228, 247, 26)";

  //
  let firstShapeBottom =
    parseFloat(circle.style.bottom) > 200 &&
    parseFloat(circle.style.bottom) < 210;
  let firstShapeRedLine =
    parseFloat(compStyle(red2)) > -78 && parseFloat(compStyle(red2)) < -58;
  let firstShapeBlueLine =
    parseFloat(compStyle(blue2)) > -78 && parseFloat(compStyle(blue2)) < -58;
  let firstShapeGreenLine =
    parseFloat(compStyle(green2)) > -78 && parseFloat(compStyle(green2)) < -58;
  let firstShapeYellowLine =
    parseFloat(compStyle(yellow2)) > -78 &&
    parseFloat(compStyle(yellow2)) < -58;

  //
  let firstShapeTop =
    parseFloat(circle.style.bottom) > 360 &&
    parseFloat(circle.style.bottom) < 380;
  let firstShapeRedLineTop =
    parseFloat(compStyle(red2)) > 51 && parseFloat(compStyle(red2)) < 73;
  let firstShapeBlueLineTop =
    parseFloat(compStyle(blue2)) > 51 && parseFloat(compStyle(blue2)) < 73;
  let firstShapeGreenLineTop =
    parseFloat(compStyle(green2)) > 51 && parseFloat(compStyle(green2)) < 73;
  let firstShapeYellowLineTop =
    parseFloat(compStyle(yellow2)) > 51 && parseFloat(compStyle(yellow2)) < 73;

  //
  let secondShapeBottom =
    parseFloat(circle.style.bottom) > 540 &&
    parseFloat(circle.style.bottom) < 560;
  let secondShapeRedLine =
    parseFloat(compStyle(red1)) > -78 && parseFloat(compStyle(red1)) < -58;
  let secondShapeBlueLine =
    parseFloat(compStyle(blue1)) > -78 && parseFloat(compStyle(blue1)) < -58;
  let secondShapeGreenLine =
    parseFloat(compStyle(green1)) > -78 && parseFloat(compStyle(green1)) < -58;
  let secondShapeYellowLine =
    parseFloat(compStyle(yellow1)) > -78 &&
    parseFloat(compStyle(yellow1)) < -58;

  //
  let secondShapeTop =
    parseFloat(circle.style.bottom) > 700 &&
    parseFloat(circle.style.bottom) < 730;
  let secondShapeRedLineTop =
    parseFloat(compStyle(red1)) > 51 && parseFloat(compStyle(red1)) < 73;
  let secondShapeBlueLineTop =
    parseFloat(compStyle(blue1)) > 51 && parseFloat(compStyle(blue1)) < 73;
  let secondShapeGreenLineTop =
    parseFloat(compStyle(green1)) > 51 && parseFloat(compStyle(green1)) < 73;
  let secondShapeYellowLineTop =
    parseFloat(compStyle(yellow1)) > 51 && parseFloat(compStyle(yellow1)) < 73;

  if (
    (firstShapeBottom &&
      (firstShapeBlueLine || firstShapeGreenLine || firstShapeYellowLine) &&
      red) ||
    (firstShapeBottom &&
      (firstShapeRedLine || firstShapeGreenLine || firstShapeYellowLine) &&
      blue) ||
    (firstShapeBottom &&
      (firstShapeRedLine || firstShapeBlueLine || firstShapeYellowLine) &&
      green) ||
    (firstShapeBottom &&
      (firstShapeRedLine || firstShapeBlueLine || firstShapeGreenLine) &&
      yellow)
  ) {
    jumpStart = false;
    colorCircle.style.display = "block";
    touchColorChange = false;
    ballY = "100px";
    randomIndex = getRandomInt(0, 3);
    randomColor = colors[randomIndex];
  }

  if (
    (firstShapeTop &&
      (firstShapeBlueLineTop ||
        firstShapeGreenLineTop ||
        firstShapeYellowLineTop) &&
      red) ||
    (firstShapeTop &&
      (firstShapeRedLineTop ||
        firstShapeGreenLineTop ||
        firstShapeYellowLineTop) &&
      blue) ||
    (firstShapeTop &&
      (firstShapeRedLineTop ||
        firstShapeBlueLineTop ||
        firstShapeYellowLineTop) &&
      green) ||
    (firstShapeTop &&
      (firstShapeRedLineTop ||
        firstShapeBlueLineTop ||
        firstShapeGreenLineTop) &&
      yellow)
  ) {
    jumpStart = false;
    colorCircle.style.display = "block";
    touchColorChange = false;
    ballY = "100px";
    randomIndex = getRandomInt(0, 3);
    randomColor = colors[randomIndex];
  }

  if (
    (secondShapeBottom &&
      (secondShapeBlueLine || secondShapeGreenLine || secondShapeYellowLine) &&
      red) ||
    (secondShapeBottom &&
      (secondShapeRedLine || secondShapeGreenLine || secondShapeYellowLine) &&
      blue) ||
    (secondShapeBottom &&
      (secondShapeRedLine || secondShapeBlueLine || secondShapeYellowLine) &&
      green) ||
    (secondShapeBottom &&
      (secondShapeRedLine || secondShapeBlueLine || secondShapeGreenLine) &&
      yellow)
  ) {
    jumpStart = false;
    colorCircle.style.display = "block";
    touchColorChange = false;
    ballY = "100px";
    randomIndex = getRandomInt(0, 3);
    randomColor = colors[randomIndex];
  }

  if (
    (secondShapeTop &&
      (secondShapeBlueLineTop ||
        secondShapeGreenLineTop ||
        secondShapeYellowLineTop) &&
      red) ||
    (secondShapeTop &&
      (secondShapeRedLineTop ||
        secondShapeGreenLineTop ||
        secondShapeYellowLineTop) &&
      blue) ||
    (secondShapeTop &&
      (secondShapeRedLineTop ||
        secondShapeBlueLineTop ||
        secondShapeYellowLineTop) &&
      green) ||
    (secondShapeTop &&
      (secondShapeRedLineTop ||
        secondShapeBlueLineTop ||
        secondShapeGreenLineTop) &&
      yellow)
  ) {
    jumpStart = false;
    colorCircle.style.display = "block";
    touchColorChange = false;
    ballY = "100px";
    randomIndex = getRandomInt(0, 3);
    randomColor = colors[randomIndex];
  }

  // color change collision detection
  if (parseFloat(circle.style.bottom) > 440 && !touchColorChange) {
    touchColorChange = true;
    randomIndex = getRandomInt(0, 3);
    randomColor = colors[randomIndex];
    colorCircle.style.display = "none";
  }
}

function animateRed(shape, square) {
  let x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  shape.style.left = `${x + square.clientWidth / 2 - shape.clientWidth / 2}px`;
  shape.style.top = `${y + square.clientHeight / 2 - shape.clientHeight / 2}px`;

  // Calculate the rotation angle to face the tangent direction
  const rotationAngle = Math.atan2(y, x);

  // Apply the rotation
  shape.style.transform = `rotate(${rotationAngle + Math.PI / 2}rad)`; // Adding 90 degrees

  angle += speed * (Math.PI / 180); // Convert to radians

  requestAnimationFrame(animateRed);
}

function animateBlue(shape, square) {
  let x = Math.cos(angle + Math.PI / 2) * radius;
  const y = Math.sin(angle + Math.PI / 2) * radius;

  shape.style.left = `${x + square.clientWidth / 2 - shape.clientWidth / 2}px`;
  shape.style.top = `${y + square.clientHeight / 2 - shape.clientHeight / 2}px`;

  // Calculate the rotation angle to face the tangent direction
  const rotationAngle = Math.atan2(y, x);

  // Apply the rotation
  shape.style.transform = `rotate(${rotationAngle + Math.PI / 2}rad)`; // Adding 90 degrees

  angle += speed * (Math.PI / 180); // Convert to radians

  requestAnimationFrame(animateBlue);
}

function animateGreen(shape, square) {
  let x = Math.cos(angle + Math.PI / 1) * radius;
  const y = Math.sin(angle + Math.PI / 1) * radius;

  shape.style.left = `${x + square.clientWidth / 2 - shape.clientWidth / 2}px`;
  shape.style.top = `${y + square.clientHeight / 2 - shape.clientHeight / 2}px`;

  // Calculate the rotation angle to face the tangent direction
  const rotationAngle = Math.atan2(y, x);

  // Apply the rotation
  shape.style.transform = `rotate(${rotationAngle + Math.PI / 2}rad)`; // Adding 90 degrees

  angle += speed * (Math.PI / 180); // Convert to radians

  requestAnimationFrame(animateGreen);
}

function animateYellow(shape, square) {
  let x = Math.cos(angle + Math.PI / -2) * radius;
  const y = Math.sin(angle + Math.PI / -2) * radius;

  shape.style.left = `${x + square.clientWidth / 2 - shape.clientWidth / 2}px`;
  shape.style.top = `${y + square.clientHeight / 2 - shape.clientHeight / 2}px`;

  // Calculate the rotation angle to face the tangent direction
  const rotationAngle = Math.atan2(y, x);

  // Apply the rotation
  shape.style.transform = `rotate(${rotationAngle + Math.PI / 2}rad)`; // Adding 90 degrees

  angle += speed * (Math.PI / 180); // Convert to radians

  requestAnimationFrame(animateYellow);
}

function update() {
  if (jumpStart) {
    let m1 = parseFloat(ballSpeedY);
    let m2 = parseFloat(gravity);
    let sum1 = m1 + m2;
    ballSpeedY = sum1 + "px"; // ballSpeedY = ballSpeedY + gravity;

    let n1 = parseFloat(ballY);
    let n2 = parseFloat(ballSpeedY);
    let sum2 = n1 + n2;
    ballY = sum2 + "px"; // ballY = ballY + gravity;
    // console.log(ballY, ballSpeedY, gravity, jumpForce);
    if (parseFloat(ballY) < 95) {
      jumpStart = false;
      colorCircle.style.display = "block";
      touchColorChange = false;
      ballY = "100px";
      randomIndex = getRandomInt(0, 3);
      randomColor = colors[randomIndex];
    }
  }
  animateRed(red1, square1);
  animateRed(red2, square2);

  animateBlue(blue1, square1);
  animateBlue(blue2, square2);

  animateGreen(green1, square1);
  animateGreen(green2, square2);

  animateYellow(yellow1, square1);
  animateYellow(yellow2, square2);

  collisionDetection(circle);

  if (parseFloat(ballY) === 100) {
    colorCircle.style.display = "block";
    touchColorChange = false;
  }
}

function render() {
  let circle = document.getElementById("circle");
  circle.style.position = "absolute";
  circle.style.left = ballX;
  circle.style.bottom = ballY;
  circle.style.transform = "translateX(-50%)";
  circle.style.backgroundColor = randomColor;
}

function gameLoop() {
  isGameOver = false;
  update();
  render();

  if (true) {
    requestAnimationFrame(gameLoop);
  }
}

gameLoop();

function jump(event) {
  // console.log("HIt.............")
  jumpStart = true;
  ballSpeedY = jumpForce;
}

// Rollback
// Rollback 2
