function setup() {
  createCanvas(windowWidth, windowHeight); // キャンバスのサイズを指定
}

function draw() {
  loadPixels(); // ピクセルデータをロードする

  // すべてのピクセルに対してランダムに色を設定する
  for (let i = 0; i < pixels.length; i += 4) {
    let randColor = random(1) > 0.5 ? 255 : 0; // 50%の確率で255（白）か0（黒）を選ぶ
    pixels[i] = randColor; // R
    pixels[i + 1] = randColor; // G
    pixels[i + 2] = randColor; // B
    pixels[i + 3] = 255; // A（アルファ値は不透明）
  }

  updatePixels(); // ピクセルデータを更新する
}
