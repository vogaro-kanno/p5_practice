let angleX = 0;
let angleY = 0;
let targetAngleX = 0;
let targetAngleY = 0;
let angleSpeed = 0.005; // 変形の速度を速めに設定
let defaultScale = 1.0;
let hoverScale = 1.1;
let currentScale = 1.0;
let scaleChangeSpeed = 0.08; // 変形の速度を速めに設定

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);

  // ハロー効果の描画
  drawHalo();

  stroke(255, 255, 255, 45);
  noFill();

  let centerX = width / 2;
  let centerY = height / 2;
  let d = dist(mouseX, mouseY, centerX, centerY);
  let hover = d < 250;

  if (hover) {
    targetAngleX = map(mouseY, 0, height, -PI, PI);
    targetAngleY = map(mouseX, 0, width, -PI, PI);
    currentScale = lerp(currentScale, hoverScale, 0.05);
  } else {
    targetAngleX += angleSpeed;
    targetAngleY += angleSpeed * 0.3;
    currentScale = lerp(currentScale, defaultScale, 0.05);
  }

  angleX = lerp(angleX, targetAngleX, 0.05);
  angleY = lerp(angleY, targetAngleY, 0.05);

  rotateX(angleX);
  rotateY(angleY);
  scale(currentScale);

  sphere(250);
}

function drawHalo() {
  // ハロー効果の描画
  let numPoints = 50;
  let radius = 300;
  let angleIncrement = TWO_PI / numPoints;
  let angleOffset = frameCount * 0.01;

  stroke(255, 50);
  noFill();
  beginShape(POINTS);
  for (let i = 0; i < numPoints; i++) {
    let x = cos(angleIncrement * i + angleOffset) * radius;
    let y = sin(angleIncrement * i + angleOffset) * radius;
    vertex(x, y, 0);
  }
  endShape();
}
