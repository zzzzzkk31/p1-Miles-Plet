
// Spel variablene
let beurt = "";
let gameOver = false;
let gelijkspel = false

//Tijd variabelen
let maxTijd = 5;
let startTijd = 0;
let overigeTijd = 5;

// Kleur selectie
let kleurKiezen = true;
let kiezendeSpeler = 1;
let speler1Kleur = "";
let speler2Kleur = "";
let kleuren = ["red", "blue", "green", "orange", "purple", "hotpink"];
let kleurVakGrootte = 40;
let kleurVakY = 200;

// Vakjes variabelen
let rectW = 80;
let rectH = 80;

let vak1Kleur = ("grey");
let vak2Kleur = ("grey");
let vak3Kleur = ("grey");
let vak4Kleur = ("grey");
let vak5Kleur = ("grey");
let vak6Kleur = ("grey");
let vak7Kleur = ("grey");
let vak8Kleur = ("grey");
let vak9Kleur = ("grey");

let vak1X = 50;  let vak1Y = 50;
let vak2X = 150; let vak2Y = 50;
let vak3X = 250; let vak3Y = 50;

let vak4X = 50;  let vak4Y = 150;
let vak5X = 150; let vak5Y = 150;
let vak6X = 250; let vak6Y = 150;

let vak7X = 50;  let vak7Y = 250;
let vak8X = 150; let vak8Y = 250;
let vak9X = 250; let vak9Y = 250;

// Win streep
let lijnStartX = 0; let lijnStartY = 0;
let lijnEindX = 0;  let lijnEindY = 0;

// Play again knop
let playAgainX = 135;
let playAgainY = 345;
let playAgainH = 40;
let playAgainW = 120;
let playAgainText = "opnieuw";

// Beurt tekst
let speler1Beurt = ("speler 1 is aan zet");
let speler2Beurt = ("speler 2 is aan zet");

// Geluiden
let klikGeluid;

let img;

function preload() {
  img = loadImage("Boterkaaseneieren.png-1600x900.png");
}

function setup() {
  createCanvas(400, 400);

  // Geluid laden in setup, zodat het spel niet blijft hangen als het bestand ontbreekt
  klikGeluid = loadSound("klik.ogg");
}

// Speel het klik geluid alleen af als het geladen is
function speelKlik() {
  if (klikGeluid && klikGeluid.isLoaded()) {
    klikGeluid.play();
  }
}

// Tekent een vakje en maakt het groter als je erover hovert en het nog vrij is
function tekenVak(x, y, kleur) {
  if (mouseX > x && mouseX < x + rectW && mouseY > y && mouseY < y + rectH && kleur == "grey" && gameOver == false) {
    fill(lerpColor(color("grey"), color(beurt), 0.4));
    rect(x - 5, y - 5, rectW + 10, rectH + 10, 10);
  } else {
    fill(kleur);
    rect(x, y, rectW, rectH, 10);
  }
}

function draw() {
  background(220);

  // Achtergrond
  image(img, 0, 0, 400, 400);

  // Kleur selectie scherm voordat het spel begint
  if (kleurKiezen == true) {
    noStroke();
    fill(0, 150);
    rect(0, 0, 400, 400);

    textSize(26);
    fill(255);
    stroke(0);
    strokeWeight(5);
    text("speler " + kiezendeSpeler + " kies een kleur", 55, 150);

    for (let i = 0; i < kleuren.length; i++) {
      let x = 30 + i * 60;

      // De kleur van speler 1 is doorzichtig want die kan speler 2 niet meer kiezen
      let vakKleur = color(kleuren[i]);
      if (kleuren[i] == speler1Kleur) {
        vakKleur.setAlpha(50);
      }

      fill(vakKleur);
      stroke(255);
      strokeWeight(3);
      rect(x, kleurVakY, kleurVakGrootte, kleurVakGrootte, 10);
    }
    return;
  }

  // Achtergrond krijgt de kleur van wie er aan de beurt is
  let achtergrondKleur = color(beurt);
  achtergrondKleur.setAlpha(90);
  noStroke();
  fill(achtergrondKleur);
  rect(0, 0, 400, 400);

  // Vakjes tekenen
  strokeWeight(5);
  stroke(150)
  tekenVak(vak1X, vak1Y, vak1Kleur);
  tekenVak(vak2X, vak2Y, vak2Kleur);
  tekenVak(vak3X, vak3Y, vak3Kleur);
  tekenVak(vak4X, vak4Y, vak4Kleur);
  tekenVak(vak5X, vak5Y, vak5Kleur);
  tekenVak(vak6X, vak6Y, vak6Kleur);
  tekenVak(vak7X, vak7Y, vak7Kleur);
  tekenVak(vak8X, vak8Y, vak8Kleur);
  tekenVak(vak9X, vak9Y, vak9Kleur);

  // Streep door het midden van de winnende vakjes
  if (gameOver == true && gelijkspel == false) {
    let startX = lijnStartX + rectW / 2;
    let startY = lijnStartY + rectH / 2;
    let eindX = lijnEindX + rectW / 2;
    let eindY = lijnEindY + rectH / 2;

    stroke(255);
    strokeWeight(14);
    line(startX, startY, eindX, eindY);
    stroke(0);
    strokeWeight(6);
    line(startX, startY, eindX, eindY);
  }

  // Teken de timer
  fill(255)
  strokeWeight(5)
  stroke(0)
  text(overigeTijd, 15, 200)

  if (gameOver == false) {
    let verstreken = (millis() - startTijd) / 1000
    overigeTijd = ceil (maxTijd - verstreken)

    if (overigeTijd <= 0) {
      if (beurt == speler1Kleur) {
        beurt = speler2Kleur;
      } else {
        beurt = speler1Kleur;
      }
      startTijd = millis()
    }
  }
// Game over of draw
if (gameOver == true) {
  textSize(30);
  fill(255);
  stroke(10);

  // Check of het gelijkspel was of dat iemand gewonnen heeft
  if (gelijkspel == true) {
    text("gelijkspel", 125, 35);
    stroke("black")
  } else {
    text("spel afgelopen", 95, 35);
  }

  // Play again knop
  fill("#37ff00");
  stroke("#2dcf00");
  rect(playAgainX, playAgainY, playAgainW, playAgainH, 5);
  fill("white");
  textSize(20);
  stroke(0);
  text(playAgainText, 160, 370);

  overigeTijd = "";
}

  // Laat zien welke speler aan de beurt is
  if (gameOver == false) {
    textSize(30)
    fill(255)
    stroke(10)
    if (beurt == speler1Kleur) {
      text(speler1Beurt, 65, 35)
    } else {
      text(speler2Beurt, 65, 35)
    }
  }

  // Cursor in de kleur van wie er aan de beurt is
  strokeWeight(3);
  stroke(255);
  fill(beurt);
  circle(mouseX, mouseY, 15);
}

function mousePressed(){

  // Kleur kiezen waarbij speler 2 niet dezelfde kleur als speler 1 kan kiezen
  if (kleurKiezen == true) {
    for (let i = 0; i < kleuren.length; i++) {
      let x = 30 + i * 60;

      if (
        mouseX > x && mouseX < x + kleurVakGrootte &&
        mouseY > kleurVakY && mouseY < kleurVakY + kleurVakGrootte &&
        kleuren[i] != speler1Kleur
      ) {
        if (kiezendeSpeler == 1) {
          speler1Kleur = kleuren[i];
          kiezendeSpeler = 2;
        } else {
          speler2Kleur = kleuren[i];
          kleurKiezen = false;
          beurt = speler1Kleur;
          startTijd = millis();
        }
        speelKlik();
        return;
      }
    }
    return;
  }

  if (gameOver == true) {
    if (
      mouseX > playAgainX && mouseX < playAgainX + playAgainW &&
      mouseY > playAgainY && mouseY < playAgainY + playAgainH
    ) {
      resetGame();
      return;
    }
    return;
  }

  // Houdt bij of er deze klik een vakje is ingekleurd
  let geplaatst = false;

  if (mouseX > vak1X && mouseX < vak1X + rectW && mouseY > vak1Y && mouseY < vak1Y + rectH && vak1Kleur == "grey") {
    vak1Kleur = beurt;
    speelKlik();
    geplaatst = true;
  }

  // VAK 2
  if (mouseX > vak2X && mouseX < vak2X + rectW && mouseY > vak2Y && mouseY < vak2Y + rectH && vak2Kleur == "grey") {
    vak2Kleur = beurt;
    speelKlik();
    geplaatst = true;
  }

    // VAK 3
  if (mouseX > vak3X && mouseX < vak3X + rectW && mouseY > vak3Y && mouseY < vak3Y + rectH && vak3Kleur == "grey") {
    vak3Kleur = beurt;
    speelKlik();
    geplaatst = true;
  }

    // VAK 4
  if (mouseX > vak4X && mouseX < vak4X + rectW && mouseY > vak4Y && mouseY < vak4Y + rectH && vak4Kleur == "grey") {
    vak4Kleur = beurt;
    speelKlik();
    geplaatst = true;
  }

    // VAK 5
  if (mouseX > vak5X && mouseX < vak5X + rectW && mouseY > vak5Y && mouseY < vak5Y + rectH && vak5Kleur == "grey") {
    vak5Kleur = beurt;
    speelKlik();
    geplaatst = true;
  }

    // VAK 6
  if (mouseX > vak6X && mouseX < vak6X + rectW && mouseY > vak6Y && mouseY < vak6Y + rectH && vak6Kleur == "grey") {
    vak6Kleur = beurt;
    speelKlik();
    geplaatst = true;
  }

    // VAK 7
  if (mouseX > vak7X && mouseX < vak7X + rectW && mouseY > vak7Y && mouseY < vak7Y + rectH && vak7Kleur == "grey") {
    vak7Kleur = beurt;
    speelKlik();
    geplaatst = true;
  }

    // VAK 8
  if (mouseX > vak8X && mouseX < vak8X + rectW && mouseY > vak8Y && mouseY < vak8Y + rectH && vak8Kleur == "grey") {
    vak8Kleur = beurt;
    speelKlik();
    geplaatst = true;
  }

    // VAK 9
  if (mouseX > vak9X && mouseX < vak9X + rectW && mouseY > vak9Y && mouseY < vak9Y + rectH && vak9Kleur == "grey") {
    vak9Kleur = beurt;
    speelKlik();
    geplaatst = true;
  }

  // Als er naast het bord of op een vol vakje is geklikt, gebeurt er niks
  if (geplaatst == false) {
    return;
  }

  // Alle mogelijke combinaties die er zijn gebruiken om het spel te spelen
  // Bij een winst onthouden we het eerste en laatste vakje voor de streep
  if (vak1Kleur != "grey" && vak1Kleur == vak2Kleur && vak2Kleur == vak3Kleur) {
    gameOver = true;
    lijnStartX = vak1X; lijnStartY = vak1Y; lijnEindX = vak3X; lijnEindY = vak3Y;
  }
  if (vak4Kleur != "grey" && vak4Kleur == vak5Kleur && vak5Kleur == vak6Kleur) {
    gameOver = true;
    lijnStartX = vak4X; lijnStartY = vak4Y; lijnEindX = vak6X; lijnEindY = vak6Y;
  }
  if (vak7Kleur != "grey" && vak7Kleur == vak8Kleur && vak8Kleur == vak9Kleur) {
    gameOver = true;
    lijnStartX = vak7X; lijnStartY = vak7Y; lijnEindX = vak9X; lijnEindY = vak9Y;
  }

  if (vak1Kleur != "grey" && vak1Kleur == vak4Kleur && vak4Kleur == vak7Kleur) {
    gameOver = true;
    lijnStartX = vak1X; lijnStartY = vak1Y; lijnEindX = vak7X; lijnEindY = vak7Y;
  }
  if (vak2Kleur != "grey" && vak2Kleur == vak5Kleur && vak5Kleur == vak8Kleur) {
    gameOver = true;
    lijnStartX = vak2X; lijnStartY = vak2Y; lijnEindX = vak8X; lijnEindY = vak8Y;
  }
  if (vak3Kleur != "grey" && vak3Kleur == vak6Kleur && vak6Kleur == vak9Kleur) {
    gameOver = true;
    lijnStartX = vak3X; lijnStartY = vak3Y; lijnEindX = vak9X; lijnEindY = vak9Y;
  }

  if (vak1Kleur != "grey" && vak1Kleur == vak5Kleur && vak5Kleur == vak9Kleur) {
    gameOver = true;
    lijnStartX = vak1X; lijnStartY = vak1Y; lijnEindX = vak9X; lijnEindY = vak9Y;
  }
  if (vak3Kleur != "grey" && vak3Kleur == vak5Kleur && vak5Kleur == vak7Kleur) {
    gameOver = true;
    lijnStartX = vak3X; lijnStartY = vak3Y; lijnEindX = vak7X; lijnEindY = vak7Y;
  }

// Gelijkspel
if (
  vak1Kleur != "grey" &&
  vak2Kleur != "grey" &&
  vak3Kleur != "grey" &&
  vak4Kleur != "grey" &&
  vak5Kleur != "grey" &&
  vak6Kleur != "grey" &&
  vak7Kleur != "grey" &&
  vak8Kleur != "grey" &&
  vak9Kleur != "grey"
) {
  if (gameOver == false) {
    gameOver = true;
    gelijkspel = true;
  }
}

  // Bij winst blijft de achtergrond in de kleur van de winnaar
  if (gameOver == true && gelijkspel == false) {
    return;
  }

// Wissel de beurt om elke keer dat er op een vakje word gedrukt
  if (beurt == speler1Kleur) {
    beurt = speler2Kleur;
  } else {
    beurt = speler1Kleur;
  }


  startTijd = millis();
}

function mouseReleased(){

}

// Aparte functie om het spel te laten resetten wanneer het klaar is
function resetGame(){
  vak1Kleur = "grey";
  vak2Kleur = "grey";
  vak3Kleur = "grey";
  vak4Kleur = "grey";
  vak5Kleur = "grey";
  vak6Kleur = "grey";
  vak7Kleur = "grey";
  vak8Kleur = "grey";
  vak9Kleur = "grey";

  gameOver = false;
  gelijkspel = false

  beurt = speler1Kleur;

  startTijd = millis();
}