function setup() {
  createCanvas(640, 530)
}

function draw() {
  background(200)
  noStroke()
  noLoop()

  // ear
  fill(247, 255, 79)
  triangle(187, 127, 255, 170, 224, 195)
  triangle(310, 170, 420, 127, 360, 195)

  fill(0)
  triangle(187, 127, 205, 137, 207, 168)
  triangle(390, 139, 420, 127, 384, 168)

  // face
  fill(247, 255, 79)
  rect(193, 164, 193, 165, 100)

  fill(0)
  rect(207, 214, 17, 26, 80, 100, 100, 80)

  fill(249, 69, 156)
  rect(194, 255, 13, 20, 80, 100, 100, 80)

  //右頬表示できない
  // circle(326, 257, 23)

  // body
  fill(247, 255, 79)
  ellipse(312, 300, 198, 234)

  fill(234, 102, 63)
  triangle(404, 253, 409, 272, 381, 298);
  triangle(404, 283, 409, 302, 351, 328);

  // arms
  fill(247, 255, 79)
  rect(200, 288, 29, 51, 30, 100, 100, 80);

  // foot
  fill(247, 255, 79)
  rect(244, 397, 54, 36, 100, 100, 100, 100)
  rect(338, 395, 33, 36, 100, 20, 50, 50)
}
