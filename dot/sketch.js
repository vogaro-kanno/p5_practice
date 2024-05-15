let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100); // HSB色空間を使用
  noStroke();

  // 初期状態で円を生成
  for (let i = 0; i < 90; i++) {
    circles.push(new Circle(random(width), random(height), random(10, 50), random(360)));
  }
}

function draw() {
  background(255);

  // 各円を更新して描画
  for (let circle of circles) {
    circle.update();
    circle.display();
  }
}

// Circleクラス
class Circle {
  constructor(x, y, size, hue) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.hue = hue;
    this.angle = random(TWO_PI);
    this.speed = random(0.1, 1.25);
  }

  update() {
    // 円がふわふわと動くように位置を更新
    this.x += cos(this.angle) * this.speed;
    this.y += sin(this.angle) * this.speed;

    // 画面の端に到達したら反対側に再配置
    if (this.x > width) this.x = 0;
    if (this.x < 0) this.x = width;
    if (this.y > height) this.y = 0;
    if (this.y < 0) this.y = height;
  }

  display() {
    fill(255, 55, this.hue, 0.8); // 色相、彩度、明度、透明度
    ellipse(this.x, this.y, this.size, this.size);
  }
}
