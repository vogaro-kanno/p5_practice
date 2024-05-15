let circles = [];
let maxCircles = 50; // 最大円の数
let framesPerCircle = 5; // 新しい円を追加するフレームの間隔

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100); // HSB色空間を使用
  noStroke();
}

function draw() {
  background(255);

  // 一定のフレームごとに新しい円を追加
  if (frameCount % framesPerCircle == 0) {
    addCircle();
  }

  // 各円を更新して描画
  for (let i = circles.length - 1; i >= 0; i--) {
    circles[i].update();
    circles[i].display();

    // 円が画面端に到達したら配列から削除
    if (circles[i].isOutOfScreen()) {
      circles.splice(i, 1);
    }
  }
}

function addCircle() {
  if (circles.length < maxCircles) {
    circles.push(new Circle(random(width / 2 - 50, width / 2 + 50), random(height / 2 - 50, height / 2 + 50), random(10, 30), random(360)));
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
    this.speed = random(0.5, 1.5);
  }

  update() {
    // 中心から外に向かって拡散するように位置を更新
    this.x += cos(this.angle) * this.speed;
    this.y += sin(this.angle) * this.speed;

    // 少しずつ大きくする
    this.size += 0.05;
  }

  display() {
    fill(this.hue, 80, 80, 0.6); // 色相、彩度、明度、透明度
    ellipse(this.x, this.y, this.size, this.size);
  }

  isOutOfScreen() {
    // 円の中心から半径の距離を考慮して、画面の端に到達したかどうかを判定
    return (this.x + this.size / 2 < 0 || this.x - this.size / 2 > width || this.y + this.size / 2 < 0 || this.y - this.size / 2 > height);
  }
}
