let letters = [];
let fontSizeStart = 12; // 一番上の行のフォントサイズ
let fontSizeEnd = 4; // 一番下の行のフォントサイズ
let fontSizes = []; // 各行のフォントサイズを格納する配列
let speeds = []; // 各行のスピードを格納する配列
let directions = []; // 各行の方向を格納する配列

function setup() {
  createCanvas(windowWidth, windowHeight); // 全画面キャンバスを作成
  background(0); // 黒背景

  // 各行のフォントサイズとスピード、方向を計算
  let rows = height / fontSizeEnd;
  for (let i = 0; i < rows; i++) {
    let fontSize = map(i, 0, rows - 1, fontSizeStart, fontSizeEnd);
    fontSizes.push(fontSize);
    if (int(i / 6) % 2 == 0) {
      speeds.push(40); // もっと早い速度
      let prevX = 0;
      // 速い部分の文字列を生成
      for (let j = 0; j < width / fontSizeEnd + 1; j++) {
        // ランダムに文字の間隔を決定
        let gap = random(10, 30); // 10 から 30 ピクセルのランダムな間隔
        // 前の文字列との間隔が十分にある場合のみ新しい文字列を追加
        if (j * fontSizeEnd - prevX > gap) {
          let offsetX = random(-10, 10); // -10 から 10 ピクセルの範囲でずらす
          letters.push(new Letter(j * fontSizeEnd + offsetX, i));
          prevX = j * fontSizeEnd + offsetX;
        }
      }
    } else {
      speeds.push(5); // 遅い速度
      // 画面全体に文字列を生成
      for (let x = 0; x < width / fontSizeEnd + 1; x++) {
        if ((x + i) % 2 == 0) {
          // 文字の数を減らすため、チェッカー柄のように配置
          letters.push(new Letter(x * fontSizeEnd, i));
        }
      }
    }

    if (i % 6 == 0) {
      directions.push(1); // 左から右
    } else {
      directions.push(-1); // 右から左
    }
  }

  // 画面全体に文字列を生成
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < width / fontSizeEnd + 1; x++) {
      if ((x + y) % 2 == 0) {
        // 文字の数を減らすため、チェッカー柄のように配置
        letters.push(new Letter(x * fontSizeEnd, y));
      }
    }
  }
}

function draw() {
  background(0); // 黒背景を再設定

  // 各文字を更新して描画
  for (let i = 0; i < letters.length; i++) {
    letters[i].update();
    letters[i].display();
  }
}

class Letter {
  constructor(x, row) {
    // 初期位置をランダムにずらす
    this.x = x + random(-5, 5); // -5 から 5 ピクセルの範囲でずらす
    this.row = row;
    this.y = this.row * fontSizes[this.row];
    this.value = this.randomCharacter();
    this.blinkRate = int(random(20, 40)); // 点滅速度をランダムに設定
  }

  // ランダムな文字を生成する関数
  randomCharacter() {
    let chars = ["0", "1", "-"];
    return random(chars);
  }

  // 文字の位置を更新する関数
  update() {
    this.x += speeds[this.row] * directions[this.row];
    // 画面の左端に到達したら右端に戻す（右から左の場合）
    if (this.x < -fontSizes[this.row] && directions[this.row] == -1) {
      this.x = width;
      this.value = this.randomCharacter();
    }
    // 画面の右端に到達したら左端に戻す（左から右の場合）
    if (this.x > width && directions[this.row] == 1) {
      this.x = -fontSizes[this.row];
      this.value = this.randomCharacter();
    }
  }

  // 文字を描画する関数
  display() {
    fill(255); // 白色
    textSize(fontSizes[this.row]); // 各行のフォントサイズを設定
    // 点滅効果を追加
    if (frameCount % this.blinkRate < this.blinkRate / 2) {
      text(this.value, this.x, this.y + fontSizes[this.row]);
    }
  }
}
