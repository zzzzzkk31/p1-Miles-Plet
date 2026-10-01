// array om alle vormen op te slaan
let vormen = [];

function setup() {
  // canvas maken over het hele scherm in 3d
  createCanvas(windowWidth, windowHeight, WEBGL);

  // kleurmodus veranderen naar hsb (makkelijker met kleuren)
  colorMode(HSB, 360, 100, 100, 1);

  // eerste wereld genereren
  genereerWereld();
}

function draw() {
  // achtergrond hue die langzaam door de kleuren draait
  let achtergrondHue = (frameCount * 10) % 360;
  background(achtergrondHue, 60, 15);

  // licht aan anders zie je 3d vormen niet goed
  lights();

  // camera langzaam laten draaien voor crazy rainbow effect
  rotateY(frameCount * 0.003);
  rotateX(sin(frameCount * 0.01) * 0.3);

  // alle vormen uit de array tekenen
  for (let vorm of vormen) {
    push();

    // vorm laten zweven met sin/cos
    let zweefX = vorm.x + sin(frameCount * vorm.zweefsnelheid + vorm.fase) * 30;
    let zweefY = vorm.y + cos(frameCount * vorm.zweefsnelheid + vorm.fase) * 30;
    let zweefZ = vorm.z + sin(frameCount * vorm.zweefsnelheid * 0.7 + vorm.fase) * 20;

    // vorm op de juiste plek zetten
    translate(zweefX, zweefY, zweefZ);

    // vorm laten draaien
    rotateY(vorm.hoek + frameCount * vorm.rotatiesnelheid);
    rotateX(frameCount * vorm.rotatiesnelheid * 0.5);

    // vorm laten pulsen (groter en kleiner)
    let puls = vorm.maat + sin(frameCount * 0.05 + vorm.fase) * vorm.maat * 0.3;

    // kleur van de vorm die door de regenboog draait
    let hue = (vorm.hue + frameCount * vorm.hueSnelheid) % 360;
    fill(hue, 90, 100, 0.8);
    noStroke();

    // de juiste vorm tekenen
    if (vorm.type === 'box') box(puls);
    else if (vorm.type === 'sphere') sphere(puls / 2);
    else if (vorm.type === 'cone') cone(puls / 2, puls);
    else if (vorm.type === 'torus') torus(puls / 2, puls / 8);
    else if (vorm.type === 'cylinder') cylinder(puls / 2, puls);

    pop();
  }

  // camera met muis draaien
  orbitControl();
}

// canvas meebewegen als het scherm verandert
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// nieuwe willekeurige wereld genereren
function genereerWereld() {
  // oude vormen wissen
  vormen = [];

  // willekeurig aantal vormen
  let aantal = floor(random(50, 500));

  for (let i = 0; i < aantal; i++) {
    // een nieuwe vorm met willekeurige eigenschappen toevoegen
    vormen.push({
      x: random(-windowWidth / 2, windowWidth / 2),
      y: random(-windowHeight / 2, windowHeight / 2),
      z: random(-600, 600),
      maat: random(30, 120),
      hue: random(360),
      hueSnelheid: random(10, 100),
      hoek: random(TWO_PI),
      rotatiesnelheid: random(0.01, 0.05),
      zweefsnelheid: random(0.01, 0.04),
      fase: random(TWO_PI),
      type: random(['box', 'sphere', 'cone', 'torus', 'cylinder' ,'ellipsoid', 'plane'])
    });
  }
}

// op backspace nieuwe wereld genereren
function keyPressed() {
  if (key === 'Backspace') genereerWereld();
}   