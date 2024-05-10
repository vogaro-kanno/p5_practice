function setup() {
  createCanvas(600, 300);
  noStroke();
  fill(255);
  colorMode(HSB, 360, 100, 100, 255)
}

function draw() {
  background(0)

  const step = 20;
  const size = 5

  for (let y = 0; y <= height; y += step) {
    for (let x = 0; x <= width; x += step) {
      const d = dist(x, y, mouseX, mouseY)
      // const size = d / 10;
      const size = map(sin(d * 0.05), -1, 1, 0, 10);
      fill(map(sin(d * 0.05), -1, 1, 60, 320), 100, 100)
      ellipse(x, y, size, size);
    }
  }
}
