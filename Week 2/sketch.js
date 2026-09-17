let canvasy;
let canvasx;
let circleX;
let circleY;
let skycolor;
let suncolor;
let isDay = true;
let stars = [];
let auto1xpositie = -300;
let richtingAuto1 = 3;
let timer = 0;

circleX = 100;
circleY = 115;
let circlediameter = 100;
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

let autoX = -200;
let autoY = 628;
let autoB = 130;
let autoH = 58;
let autoSnelheid = 3;
let autoSnelheidNormaal = 3;
let autoSnelheidLangzaam = 1;
let stopLijn = 905;

let autoX2 = -450;
let autoY2 = 528;
let autoB2 = 120;
let autoH2 = 48;
let autoSnelheid2 = 4;
let autoSnelheidNormaal2 = 4;
let autoSnelheidLangzaam2 = 1.5;
let stopLijn2 = 915;

let stoplichtRood;
let stoplichtOranje;
let stoplichtGroen;
let stoplichtStand = "rood";

let voorgrondBoomX = 1330;
let voorgrondBoomY = 555;
let voorgrondBoomB = 44;
let voorgrondBoomKruinY = 525;
let voorgrondBoomKruinD = 230;

function keyPressed() {
  if (keyCode === 13) {
    if (stoplichtStand === "rood") {
      stoplichtStand = "groen";
    } else if (stoplichtStand === "groen") {
      stoplichtStand = "oranje";
    } else {
      stoplichtStand = "rood";
    }
  }
}

function setup() {
  canvasy = 715;
  canvasx = 1525;
  createCanvas(canvasx, canvasy);

  for (let i = 0; i < 150; i++) {
    stars.push({ x: random(canvasx), y: random(525), size: random(1, 4) });
  }

  stoplichtRood = color("#930101");
  stoplichtOranje = color("#b38900");
  stoplichtGroen = color("#48ff00");
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
  fill(skycolor);
  rect(0, 0, canvasx, canvasy);

  //sterren
  if (!isDay) {
    noStroke();
    for (let star of stars) {
      fill(255, random(150, 255));
      circle(star.x, star.y, star.size);
    }
  }

  //zon
  circleX = circleX + 0.5;

  noStroke();
  let glow = color(suncolor);
  glow.setAlpha(30);
  fill(glow);
  for (let i = 1; i <= 5; i++) {
    circle(circleX, circleY, circlediameter + i * 20);
  }

  fill(suncolor);
  circle(circleX, circleY, circlediameter);

  if (circleX > canvasx) {
    circleX = 100;
    isDay = !isDay;
  }

  // bergen
  strokeWeight(1);
  stroke("grey");
  fill(100);
  triangle(30, 775, 258, 250, 500, 775);
  triangle(500, 775, 700, 350, 900, 775);
  triangle(300, 775, 500, 450, 700, 775);

  // wolken
  strokeWeight(0);
  fill("#ffffff");
  circle(wolkX1, wolkY1, wolkDiameter1);
  wolkX1 = wolkX1 - 0.8;

  circle(wolkX2, wolkY2, wolkDiameter2);
  wolkX2 = wolkX2 - 0.8;

  circle(wolkX3, wolkY3, wolkDiameter3);
  wolkX3 = wolkX3 - 0.8;

  circle(wolkX4, wolkY4, wolkDiameter4);
  wolkX4 = wolkX4 - 0.7;

  circle(wolkX5, wolkY5, wolkDiameter5);
  wolkX5 = wolkX5 - 0.7;

  circle(wolkX6, wolkY6, wolkDiameter6);
  wolkX6 = wolkX6 - 0.7;

  {
    if (wolkX1 < -120) {
      wolkX1 = canvasx + 100;
      wolkX2 = canvasx + 130;
      wolkX3 = canvasx + 160;
    }
    if (wolkX4 < -120) {
      wolkX4 = canvasx + 100;
      wolkX5 = canvasx + 130;
      wolkX6 = canvasx + 160;
    }
  }

  //gras met bomen
  noStroke();
  fill("#3faa3f");
  rect(0, 475, canvasx, 50);

  fill("#6b4423");
  rect(120, 425, 20, 100);
  rect(350, 425, 20, 100);
  rect(600, 425, 20, 100);
  rect(1200, 425, 20, 100);

  stroke("darkgreen");
  strokeWeight(6);
  fill("green");
  circle(130, 415, 110);
  circle(360, 415, 110);
  circle(610, 415, 110);
  circle(1210, 415, 110);
  stroke("grey");

  //weg
  strokeWeight(1);
  fill(70);
  rect(0, 525, 1525, 250);
  fill(255);
  rect(50, 600, 150, 25, 20);
  rect(225, 600, 150, 25, 20);
  rect(400, 600, 150, 25, 20);
  rect(575, 600, 150, 25, 20);
  rect(750, 600, 150, 25, 20);
  rect(925, 600, 150, 25, 20);
  rect(1100, 600, 150, 25, 20);
  rect(1275, 600, 150, 25, 20);

  //autos stoppen voor het stoplicht
  autoSnelheid = autoSnelheidNormaal;
  autoSnelheid2 = autoSnelheidNormaal2;

  if (stoplichtStand === "oranje") {
    autoSnelheid = autoSnelheidLangzaam;
    autoSnelheid2 = autoSnelheidLangzaam2;
  }

  if (stoplichtStand === "rood") {
    if (autoX + autoB <= stopLijn && autoX + autoB + autoSnelheid > stopLijn) {
      autoSnelheid = stopLijn - (autoX + autoB);
    }
    if (
      autoX2 + autoB2 <= stopLijn2 &&
      autoX2 + autoB2 + autoSnelheid2 > stopLijn2
    ) {
      autoSnelheid2 = stopLijn2 - (autoX2 + autoB2);
    }
  }

  //autos
  stroke(0);
  strokeWeight(1);
  fill("#ff3333");
  rect(autoX2, autoY2, autoB2, autoH2, 8);
  fill("black");
  circle(autoX2 + 28, autoY2 + autoH2 + 6, 32);
  circle(autoX2 + 92, autoY2 + autoH2 + 6, 32);

  fill("#00c8ff");
  rect(autoX, autoY, autoB, autoH, 8);
  fill("black");
  circle(autoX + 30, autoY + autoH + 8, 38);
  circle(autoX + 100, autoY + autoH + 8, 38);

  autoX = autoX + autoSnelheid;
  autoX2 = autoX2 + autoSnelheid2;

  if (autoX > canvasx) {
    autoX = -200;
  }
  if (autoX2 > canvasx) {
    autoX2 = -450;
  }

  //stoplicht
  if (stoplichtStand === "rood") {
    stoplichtRood = color("#ff0000");
    stoplichtOranje = color("#b38900");
    stoplichtGroen = color("#268500");
  } else if (stoplichtStand === "oranje") {
    stoplichtRood = color("#930101");
    stoplichtOranje = color("#ffc400");
    stoplichtGroen = color("#268500");
  } else {
    stoplichtRood = color("#930101");
    stoplichtOranje = color("#b38900");
    stoplichtGroen = color("#48ff00");
  }

  strokeWeight(0);
  fill(100);
  rect(925, 450, 50, 150);
  fill(stoplichtGroen);
  circle(950, 475, 40);
  fill(stoplichtOranje);
  circle(950, 525, 40);
  fill(stoplichtRood);
  circle(950, 575, 40);
  fill(100);
  rect(937.5, 600, 25, 200);

  //boom voor de auto
  noStroke();
  fill("#5a3618");
  rect(
    voorgrondBoomX,
    voorgrondBoomY,
    voorgrondBoomB,
    canvasy - voorgrondBoomY,
  );

  stroke("#0b3d0b");
  strokeWeight(8);
  fill("#1e7a1e");
  circle(
    voorgrondBoomX + voorgrondBoomB / 2,
    voorgrondBoomKruinY,
    voorgrondBoomKruinD,
  );
}
