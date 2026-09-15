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
// Wolk 1
let wolkX1 = 300;
let wolkY1 = 85;
let wolkDiameter1 = 70;

let wolkX2 = 330;
let wolkY2 = 80;
let wolkDiameter2 = 70;

let wolkX3 = 360;
let wolkY3 = 85;
let wolkDiameter3 = 70;

// Wolk 2
let wolkX4 = 500;
let wolkY4 = 155;
let wolkDiameter4 = 70;

let wolkX5 = 530;
let wolkY5 = 150;
let wolkDiameter5 = 70;

let wolkX6 = 560;
let wolkY6 = 155;
let wolkDiameter6 = 70;
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


// wolken
strokeWeight(0)
  fill("#ffffff")
  circle(wolkX1, wolkY1, wolkDiameter1);
  wolkX1 = wolkX1 + 0.2;

  circle(wolkX2, wolkY2, wolkDiameter2);
  wolkX2 = wolkX2 + 0.2;

  circle(wolkX3, wolkY3, wolkDiameter3);
  wolkX3 = wolkX3 + 0.2;

  circle(wolkX4, wolkY4, wolkDiameter4);
  wolkX4 = wolkX4 + 0.1;
 
  circle(wolkX5, wolkY5, wolkDiameter5);
  wolkX5 = wolkX5 + 0.1;

  circle(wolkX6, wolkY6, wolkDiameter6);
  wolkX6 = wolkX6 + 0.1;

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
