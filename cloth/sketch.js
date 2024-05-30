let startY1, startY2;
let noiseOffset1 = 0;
let noiseOffset2 = 1000; // 別々の初期値を設定
let numPoints = 300; // 点の数

function setup() {
  createCanvas(windowWidth, windowHeight);
  startY1 = height / 2 - 50; // 1本目の線の開始点を上に調整
  startY2 = height / 2 + 50; // 2本目の線の開始点を下に調整
}

function draw() {
  background(255); // White background

  // First line
  stroke(90, 50, 255, 10); // Adjusted color: more towards blue-purple
  strokeWeight(2);
  let wave1 = drawWave(startY1, noiseOffset1); // 初めのノイズオフセットを渡す

  // Second line
  stroke(90, 50, 255, 1); // Adjusted color with further reduced alpha value for the second line
  strokeWeight(2);
  let wave2 = drawWave(startY2, noiseOffset2); // 2番目のノイズオフセットを渡す

  // Draw the translucent cloth between the two lines
  drawCloth(wave1, wave2, noiseOffset1, noiseOffset2);

  // Update noise offsets
  noiseOffset1 += 0.005; // Increment for slower motion
  noiseOffset2 += 0.005; // Increment for slower motion
}

function drawWave(startY, noiseOffset) { // ノイズオフセットを引数として受け取る
  let wave = [];
  let xoff = 0;
  beginShape();
  for (let x = 0; x <= width; x += width / numPoints) {
    let yOffset = map(noise(xoff, noiseOffset), 0, 1, -height / 3, height / 3); // Adjusted amplitude
    let y = startY + yOffset;
    vertex(x, y);
    wave.push({x: x, y: y});
    xoff += 0.01; // Increment for slower motion
  }
  endShape();
  return wave;
}

function drawCloth(wave1, wave2, noiseOffset1, noiseOffset2) {
  let alphaStart = 1;
  let alphaEnd = 10;
  let clothAlpha = 10; // Adjusted cloth transparency
  beginShape();
  // Draw the first line
  for (let i = 0; i < wave1.length - 1; i++) { // Increase the density of points
    let x1 = wave1[i].x;
    let y1 = wave1[i].y;

    let alphaValue = map(i, 0, wave1.length - 1, alphaEnd, alphaStart); // グラデーションのアルファ値 (50 から 5)

    // Calculate the gradient color
    let lerpedColor = lerpColor(color(90, 50, 255, alphaStart), color(90, 50, 255, alphaEnd), i / (wave1.length - 1));

    fill(lerpedColor); // Adjusted fill color and alpha value for gradient effect

    // Draw the point of the first line
    vertex(x1, y1);
  }

  // Draw the second line in reverse order
  for (let i = wave2.length - 1; i >= 0; i--) {
    let x2 = wave2[i].x;
    let y2 = wave2[i].y;

    // Draw the point of the second line
    vertex(x2, y2);
  }
  endShape(CLOSE);

  // Draw the translucent cloth with adjusted transparency
  fill(90, 50, 255, clothAlpha);
  beginShape();
  for (let i = 0; i < wave1.length; i++) {
    let x1 = wave1[i].x;
    let y1 = wave1[i].y;
    vertex(x1, y1);
  }
  for (let i = wave2.length - 1; i >= 0; i--) {
    let x2 = wave2[i].x;
    let y2 = wave2[i].y;
    vertex(x2, y2);
  }
  endShape(CLOSE);
}
