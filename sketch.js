function setup() {
  createCanvas(630, 600);
  noStroke();
  fill(250);
}
function draw() {
  background(30, 30, 100, 30);
  noStroke();
  rect(0, 400, 630, 200);
  stroke(10, 60, 110);
  rect(300, 200, 100, 260);
  line(300, 320, 270, 460);
  line(400, 320, 430, 460);
  line(270, 460, 430, 460);
  strokeWeight(5);
  stroke(10, 60, 110);
  triangle(402, 350, 403, 458, 427, 457);
  triangle(298, 350, 297, 458, 274, 457);
  stroke(10, 60, 110);
  line(400, 320, 300, 320);
  line(320, 460, 310, 320);
  line(340, 460, 330, 320);
  line(360, 460, 370, 320);
  line(380, 460, 390, 320);
  line(350, 460, 350, 320);
  strokeWeight(5);
  stroke(10, 60, 110);
  triangle(298, 240, 190, 160, 240, 320);
  triangle(404, 240, 510, 160, 460, 320);
  stroke(20, 30, 40, 160);
  ellipse(350, 150, 100);
  stroke(10, 60, 110);
  rect(260, 202, 38, 120);
  rect(404, 202, 38, 120);
  stroke(150, 10, 10);
  triangle(356, 162, 368, 162, 362, 180);
  triangle(344, 162, 332, 162, 338, 180);
  triangle(378, 162, 390, 150, 382, 176);
  triangle(320, 162, 308, 150, 316, 176);
  triangle(350, 170, 358, 188, 344, 188);
  triangle(326, 169, 334, 188, 321, 182);
  triangle(373, 169, 379, 183, 368, 188);
  stroke(250, 20, 20);
  ellipse(330, 140, 8);
  ellipse(366, 140, 8);
  stroke(250, 210, 100);
  if ((mouseX > 0) & (mouseX < 63) & (mouseY > 0) & (mouseY < 63)) {
    background(250, 10, 10, 20);
    fill(0);
    stroke(250, 20, 20);
  } else {
    fill(250);
  }
  ellipse(10, 10, 130);
  ellipse(10, 10, 130);
  ellipse(200, 40, 5);
  ellipse(270, 10, 5);
  ellipse(300, 70, 5);
  ellipse(350, 40, 5);
  ellipse(400, 90, 5);
  ellipse(450, 40, 5);
  ellipse(600, 130, 5);
  ellipse(550, 80, 5);
  ellipse(100, 160, 5);
  ellipse(140, 100, 5);
  ellipse(230, 110, 5);
  ellipse(60, 120, 5);
  ellipse(90, 60, 5);
  ellipse(500, 130, 5);
  ellipse(600, 40, 5);
  if (mouseIsPressed == true) {
    background(250, 10, 10, 20);
    fill(0);
    stroke(250, 20, 20);
    strokeWeight(13);
    ellipse(315, 270, 600);
    ellipse(150, 200, 160);
    ellipse(480, 200, 160);
    triangle(60, 250, 150, 350, 100, 420);
    triangle(590, 238, 480, 350, 530, 420);
    triangle(160, 370, 110, 450, 200, 500);
    triangle(470, 370, 520, 450, 440, 500);
    triangle(180, 370, 220, 502, 298, 380);
    triangle(450, 370, 418, 500, 338, 380);
    triangle(318, 380, 240, 520, 400, 520);
  } else {
  }
}