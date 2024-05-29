let tetrahedron;
let angleX = 0;
let angleY = 0;
let angleZ = 0;
let posX, posY;
let speedX, speedY;
let lastUpdateTime = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  tetrahedron = generateTetrahedron();
  stroke(255, 50);  // 白色の透過線をさらに薄く
  strokeWeight(1);  // 線の太さを1px
  posX = 0;
  posY = 0;
  speedX = random(-0.02, 0.02);  // 動きを今の2倍に
  speedY = random(-0.02, 0.02);  // 動きを今の2倍に
}

function draw() {
  background(50);  // 背景を少しグレー寄りに

  // 位置を更新
  posX += speedX;
  posY += speedY;

  // 画面の端で跳ね返るように
  let boundary = 400; // 四面体の大きさの半分（サイズをもっと大きく）
  if (posX < -width / 2 + boundary || posX > width / 2 - boundary) {
    speedX *= -1;
    posX += speedX;  // 速度更新後に位置を調整
  }
  if (posY < -height / 2 + boundary || posY > height / 2 - boundary) {
    speedY *= -1;
    posY += speedY;  // 速度更新後に位置を調整
  }

  translate(posX, posY, 0);

  // 回転
  rotateX(angleX);
  rotateY(angleY);
  rotateZ(angleZ);

  drawTetrahedron(tetrahedron);

  angleX += 0.001;  // 回転速度を非常にゆっくりに
  angleY += 0.001;  // 回転速度を非常にゆっくりに
  angleZ += 0.001;  // 回転速度を非常にゆっくりに

  // 4秒ごとにランダムな1辺を書き換える
  if (millis() - lastUpdateTime > 4000) {
    updateRandomEdge(tetrahedron);
    lastUpdateTime = millis();
  }
}

function generateTetrahedron() {
  let vertices = [];
  for (let i = 0; i < 4; i++) {
    vertices.push(createVector(random(-400, 400), random(-400, 400), random(-400, 400)));
  }
  return vertices;
}

function drawTetrahedron(vertices) {
  beginShape(LINES);
  for (let i = 0; i < vertices.length; i++) {
    for (let j = i + 1; j < vertices.length; j++) {
      vertex(vertices[i].x, vertices[i].y, vertices[i].z);
      vertex(vertices[j].x, vertices[j].y, vertices[j].z);
    }
  }
  endShape();
}

function updateRandomEdge(vertices) {
  let i = floor(random(0, 4));
  vertices[i] = createVector(random(-400, 400), random(-400, 400), random(-400, 400));
}
