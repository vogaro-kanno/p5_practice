function setup() {
  createCanvas(400, 200);
  background(220);
  noLoop();
}

function draw() {
  fill(128, 128, 0);
  noStroke();

  let dia = 20
  y = 80

  circle(100, y, dia);
  circle(200, y, dia);
  circle(300, y, dia);

  y = 120

  circle(100, y, dia);
  circle(200, y, dia);
  circle(300, y, dia);
}
