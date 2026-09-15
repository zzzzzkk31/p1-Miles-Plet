let canvasy
let canvasx
function setup() {
  canvasy =(715)
  canvasx =(1525)
  createCanvas(canvasx, canvasy);
}

function draw() {
  background("0");
  fill("lightblue")
  rect (0, 0, canvasx ,canvasy)

// bergen
  strokeWeight(1)
  stroke("grey")
  fill(100)
  triangle(30, 775, 258, 250, 500, 775)
  triangle(500, 775, 700, 350, 900, 775)
  triangle(300, 775, 500, 450, 700, 775)

  //weg
fill(70)
rect(0,525,1525,250);
fill(255)
rect(50,600,150,25,20)
rect(225,600,150,25,20)
rect(400,600,150,25,20)
rect(575,600,150,25,20)
rect(750,600,150,25,20)
rect(925,600,150,25,20)
rect(1100,600,150,25,20)
rect(1275,600,150,25,20)

  //stoplicht
  strokeWeight(0)
  fill(100);
  rect(925, 450, 50, 150);
  fill(0, 255, 0);
  circle(950, 475, 40);
  fill("orange");
  circle(950, 525, 40);
  fill("red");
  circle(950, 575, 40);
  fill(100);
  rect(937.5, 600, 25, 200);




}
