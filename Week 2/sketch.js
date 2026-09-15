let canvasy
let canvasx
let circleX
let circleY
let skycolor
let suncolor
let isDay = true;
let stars = []

circleX = 100
circleY = 115
let circlediameter = 100
function setup() {
  canvasy =(715)
  canvasx =(1525)
  createCanvas(canvasx, canvasy);

  
  for (let i = 0; i < 150; i++) {
    stars.push({ x: random(canvasx), y: random(525), size: random(1, 4) })
  }
}
function draw() {
  if (isDay) {
  skycolor = "lightblue";
  suncolor = "yellow";
} else {
  skycolor = "darkblue";
  suncolor = "white";
}
  background("0");
  fill(skycolor)
  rect (0, 0, canvasx ,canvasy)

//sterren
if (!isDay) {
  noStroke()
  for (let star of stars) {
    fill(255, random(150, 255))
    circle(star.x, star.y, star.size)
  }
}

//zon
circleX = circleX + 1;


noStroke()
let glow = color(suncolor)
glow.setAlpha(30)
fill(glow)
for (let i = 1; i <= 5; i++) {
  circle(circleX, circleY, circlediameter + i * 20)
}

fill(suncolor)
circle(circleX, circleY, circlediameter)

if (circleX > canvasx) {
  circleX = 100;    
  isDay = !isDay;   
}

  
// bergen
  strokeWeight(1)
  stroke("grey")
  fill(100)
  triangle(30, 775, 258, 250, 500, 775)
  triangle(500, 775, 700, 350, 900, 775)
  triangle(300, 775, 500, 450, 700, 775)

//wolken
strokeWeight(0)
fill("white")
circle(50,50,50)
circle(60,40,50)
circle(70,60,50)
circle(40,70,50)
circle(70,40,50)
circle(80,50,50)

  //weg
  strokeWeight(1)
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
