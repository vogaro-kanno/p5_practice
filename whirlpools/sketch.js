function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(255);
  colorMode(HSB, 360, 100, 100, 255);
}

function draw() {
  background(0);

  const step = 20;
  const maxSize = 10;
  const time = millis() / 1000; // 時間を取得して回転を作成

  for (let y = 0; y <= height; y += step) {
    for (let x = 0; x <= width; x += step) {
      const centerX = mouseX;
      const centerY = mouseY;
      const angle = atan2(y - centerY, x - centerX) + time; // 中心からの角度と時間による回転
      const d = dist(x, y, centerX, centerY); // 中心からの距離
      const size = map(sin(d * 0.05 + angle), -1, 1, 0, maxSize); // 距離と角度に基づくサイズ
      const hue = map(sin(d * 0.05 + angle), -1, 1, 60, 320); // 距離と角度に基づく色

      fill(hue, 100, 100);
      ellipse(x, y, size, size);
    }
  }
}
