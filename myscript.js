var angle = 0
var r = 30

function setup() {
  createCanvas(480, 240);
  background('skyblue')
  noStroke()
}

function draw() {
  push()
  translate(width/2, height/2)
  x = sin(radians(angle)) * r
  y = cos(radians(angle)) * r
  ellipse(x, y, 10, 10)
  pop()

  angle += 2
  r += 0.1
}