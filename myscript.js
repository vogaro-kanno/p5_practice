function setup() {
  createCanvas(480, 240)
  background('skyblue')
  noStroke()

  fill(255, 0, 0, 127)
  rect(0, 0, 100, 100)

  push()
  // translate(10, 10)
  // rotate(PI/4)
  scale(2, 0.5)
  fill(0, 0, 255, 127)
  rect(0, 0, 100, 100)
  pop()
}

function draw() {
}