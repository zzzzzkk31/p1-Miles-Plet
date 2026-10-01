// array om alle vormen op te slaan
let vormen = [];
// array om alle zwevende tekens (typografie) op te slaan
let teksten = [];

// alle tekens die random gekozen kunnen worden:
// oude Cypriotische letters + gewone cijfers + Egeïsche cijfers
let cypriotischeLetters = "𐠀𐠁𐠂𐠃𐠄𐠅𐠈𐠊𐠋𐠌𐠍𐠎𐠏𐠐𐠑𐠒𐠓𐠔𐠕𐠖𐠗𐠘𐠙𐠚𐠛𐠜𐠝𐠞𐠟𐠠𐠡𐠢𐠣𐠤𐠥𐠦𐠧𐠨𐠩𐠪𐠫𐠬𐠭𐠮𐠯𐠰𐠱𐠲𐠳𐠴𐠵𐠷𐠸𐠼𐠿";
let cijfers = "0123456789𐄇𐄈𐄉𐄊𐄋𐄌𐄍𐄎𐄏𐄐𐄑𐄒𐄓𐄔𐄕𐄖𐄗𐄘𐄙𐄚𐄛𐄜𐄝𐄞𐄟𐄠𐄡𐄢𐄣𐄤𐄥𐄦𐄧𐄨𐄩𐄪𐄫𐄬𐄭𐄮𐄯𐄰𐄱𐄲𐄳";

// Array.from() maakt van de string een array met losse tekens
// (split("") werkt hier NIET: deze speciale tekens bestaan uit 2 delen
// en split zou ze kapot knippen)
let mogelijkeTekens = Array.from(cypriotischeLetters + cijfers);

let geluid;

// in WEBGL moet je zelf een lettertype laden
let lettertype;

// hoeveel lagen elk teken heeft (meer lagen = dikkere 3d letter)
let aantalLagen = 12;

// geluid en lettertype laden voordat setup() start
function preload() {
  geluid = loadSound("trip.mp3");
  lettertype = loadFont("NotoSansCypriot-Regular.ttf");
}

function setup() {
  // canvas maken over het hele scherm in 3d
  createCanvas(windowWidth, windowHeight, WEBGL);

  // kleurmodus veranderen naar hsb (makkelijker met kleuren)
  colorMode(HSB, 360, 100, 100, 1);

  // lettertype instellen en tekst rond het midden van het draaipunt zetten
  textFont(lettertype);
  textAlign(CENTER, CENTER);

  genereerWereld();
}

// geluid afspelen als het geladen is
function speelGeluid() {
  if (geluid && geluid.isLoaded()) {
    geluid.play();
  }
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

    if (vorm.type === 'box') box(puls);
    else if (vorm.type === 'sphere') sphere(puls / 2);
    else if (vorm.type === 'cone') cone(puls / 2, puls);
    else if (vorm.type === 'torus') torus(puls / 2, puls / 8);
    else if (vorm.type === 'cylinder') cylinder(puls / 2, puls);

    pop();
  }

  // alle tekens uit de array tekenen
  for (let tekst of teksten) {
    push();

    // teken laten zweven met sin/cos (zelfde manier als de vormen)
    let zweefX = tekst.x + sin(frameCount * tekst.zweefsnelheid + tekst.fase) * 40;
    let zweefY = tekst.y + cos(frameCount * tekst.zweefsnelheid + tekst.fase) * 40;
    let zweefZ = tekst.z + sin(frameCount * tekst.zweefsnelheid * 0.7 + tekst.fase) * 30;

    translate(zweefX, zweefY, zweefZ);

//random shit maken
    rotateX(frameCount * tekst.draaiX);
    rotateY(frameCount * tekst.draaiY);
    rotateZ(frameCount * tekst.draaiZ);

    textSize(tekst.grootte);

    // rainbow kleur die door de regenboog draait
    let hue = (tekst.hue + frameCount * tekst.hueSnelheid) % 360;

    // text() is plat, dus om een dikke 3d letter te maken
    // stapelen we het teken een aantal keer achter elkaar (lagen)
    for (let laag = 0; laag < aantalLagen; laag++) {
      translate(0, 0, -1.5);

      let laagHue = (hue + laag * 8) % 360;
      let helderheid = 100 - laag * 5;

      fill(laagHue, 90, helderheid);
      text(tekst.teken, 0, 0);
    }

    pop();
  }

  orbitControl();
}

// canvas meebewegen als het scherm verandert
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// al het oude wissen
function genereerWereld() {
  vormen = [];
  let aantal = floor(random(50, 500));

  for (let i = 0; i < aantal; i++) {
    vormen.push({
      x: random(-windowWidth / 2, windowWidth / 2),
      y: random(-windowHeight / 2, windowHeight / 2),
      z: random(-600, 600),
      maat: random(30, 120),
      hue: random(360),
      hueSnelheid: random(10, 20),
      hoek: random(TWO_PI),
      rotatiesnelheid: random(0.01, 0.05),
      zweefsnelheid: random(0.01, 0.04),
      fase: random(TWO_PI),
      type: random(['box', 'sphere', 'cone', 'torus', 'cylinder' ,'ellipsoid', 'plane'])
    });
  }

  teksten = [];
  let aantalTekens = floor(random(10, 40));

  for (let i = 0; i < aantalTekens; i++) {
    teksten.push({
      x: random(-windowWidth / 2, windowWidth / 2),
      y: random(-windowHeight / 2, windowHeight / 2),
      z: random(-600, 600),
      grootte: random(60, 200),
      hue: random(360),
      hueSnelheid: random(1, 5),
      // draaisnelheid per as, kan ook negatief zijn (andere kant op draaien)
      draaiX: random(-0.04, 0.04),
      draaiY: random(-0.04, 0.04),
      draaiZ: random(-0.04, 0.04),
      zweefsnelheid: random(0.01, 0.03),
      fase: random(TWO_PI),
      teken: random(mogelijkeTekens)
    });
  }
}

// op backspace nieuwe wereld genereren
function keyPressed() {
  if (key === 'Backspace') genereerWereld();
  if (key === 'Backspace') speelGeluid();
}   
