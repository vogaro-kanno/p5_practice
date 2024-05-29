let tileSize = 10; // モザイクのサイズ
let cols, rows;
let tiles = [];
let backgroundColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = ceil(width / tileSize);
  rows = ceil(height / tileSize);
  // 初回の背景色設定
  setBackgroundColor();
  // 1秒ごとに背景色を変更
  setInterval(setBackgroundColor, 1000);
  // タイルを初期化
  initTiles();
}

function draw() {
  // 背景を描画
  background(backgroundColor);
  // タイルを描画
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      tiles[i][j].display();
    }
  }
}

// タイルを初期化
function initTiles() {
  for (let i = 0; i < cols; i++) {
    tiles[i] = [];
    for (let j = 0; j < rows; j++) {
      let gray = random(255);
      tiles[i][j] = new Tile(i * tileSize, j * tileSize, tileSize, color(gray));
    }
  }
}

// 背景色を設定する関数
function setBackgroundColor() {
  // ランダムなグレースケール色を生成
  let gray = random(255);
  backgroundColor = color(gray);
}

// タイルのクラス
class Tile {
  constructor(x, y, size, c) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = c;
  }

  // タイルを描画
  display() {
    fill(this.color);
    noStroke();
    rect(this.x, this.y, this.size, this.size);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  cols = ceil(width / tileSize);
  rows = ceil(height / tileSize);
  initTiles();
}
