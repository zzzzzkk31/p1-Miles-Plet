let rectB = 0;
let rectH = 0;

let number = 0;

let ballX = 500;
let ballY = 200; 
let acht = 8;

let lichtStatus = 0;

function setup() {
  createCanvas(800, 600);
}

// Druk functies
function keyPressed() {
  if (keyCode === 66) {
    rectB = 60;
    rectH = 60;
  }
  
  if (keyCode === 32) {
    number = 0;
  }
  
  if (keyCode === ENTER) {
    lichtStatus = lichtStatus + 1;
    if (lichtStatus > 2) {
      lichtStatus = 0;
    }
  }
}

function keyReleased() {
  if (keyCode === 66) {
    rectB = 0;
    rectH = 0;
  }
}

function draw() {
  background(220);
  
  //tekst
  fill(0);
  noStroke();
  textSize(12);
  text("1. Houd B in om een blokje te laten verschijnen.", 20, 20);
  text("2. Druk op spatie om het getal op 0 te zetten.", 20, 120);
  text("3. Druk op enter om het verkeerslicht te veranderen (Rood -> Groen -> Oranje).", 20, 240);
  text("4. Beweeg de eightball met WASD of de pijltjestoetsen.", 360, 20);

  // Vierkant verschijn
  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(20, 40, rectB, rectH);
  
  fill(0);
  noStroke();
  textSize(14);
  text(number, 120, 180);
  
  number = number + 1;
  if (number == 500) {
    number = 0;
  }

  // Stoplicht
  fill(30);
  rect(135, 450, 20, 120);

  fill(30);
  stroke(0);
  strokeWeight(1);
  rect(105, 270, 80, 190, 15);

  // Stoplicht kleur
  let roodKleur = color(50);
  let oranjeKleur = color(50);
  let groenKleur = color(50);

  if (lichtStatus === 0) {
    roodKleur = color(255, 0, 0);
  } else if (lichtStatus === 1) {
    groenKleur = color(0, 255, 0);
  } else if (lichtStatus === 2) {
    oranjeKleur = color(255, 165, 0);
  }

  stroke(0);
  strokeWeight(2);
  
  fill(roodKleur);
  circle(145, 305, 45);
  
  fill(oranjeKleur);
  circle(145, 365, 45);
  
  fill(groenKleur);
  circle(145, 425, 45);

  // 8 bal
  fill(0);
  stroke(0);
  strokeWeight(10);
  circle(ballX, ballY, 100);
  
  fill(255);
  noStroke();
  textSize(80);
  textAlign(CENTER, CENTER);
  text(acht, ballX, ballY);
  textAlign(LEFT, BASELINE);

  if (keyIsDown(40) || keyIsDown(83)) {
    ballY += 5;
  }
  if (keyIsDown(38) || keyIsDown(87)) {
    ballY -= 5;
  }
  if (keyIsDown(39) || keyIsDown(68)) {
    ballX += 5;
  }
  if (keyIsDown(37) || keyIsDown(65)) {
    ballX -= 5;
  }
}