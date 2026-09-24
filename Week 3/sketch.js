// Spel variablene
let beurt = "red";
let gameOver = false;
let gelijkspel = false

//Tijd variabelen
let maxTijd = 5;
let startTijd = 0;
let overigeTijd = 5;

// Cursor kleur
let cursorBlue = ("blue")
let cursorRed = ("red")

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

// Play again knop
let playAgainX = 135;
let playAgainY = 345;
let playAgainH = 40;
let playAgainW = 120;
let playAgainText = "Play again";

// Beurt tekst
let redsTurn = ("Reds turn");
let bluesTurn = ("Blue's turn");

// Geluiden
let klikGeluid;

function setup() {
  createCanvas(400, 400);

  // Geluid laden in setup, zodat het spel niet blijft hangen als het bestand ontbreekt
  klikGeluid = loadSound('../sounds/klik.mp3');
}

// Speel het klik geluid alleen af als het geladen is
function speelKlik() {
  if (klikGeluid && klikGeluid.isLoaded()) {
    klikGeluid.play();
  }
}



function draw() {
  background(220);

  // Achtergrond van het veld
  strokeWeight(0);
  fill("blue");
  rect(0, 0, 200, 400);
  fill("red");
  rect(195, 0, 210, 400);
  fill("#000000")
  rect(40,40,300,300,10)

  // Vakjes tekenen
  strokeWeight(5);
  stroke(150)
  fill(vak1Kleur);
  rect(vak1X, vak1Y, rectW, rectH, 10);

  fill(vak2Kleur);
  rect(vak2X, vak2Y, rectW, rectH, 10);

  fill(vak3Kleur);
  rect(vak3X, vak3Y, rectW, rectH, 10);

  fill(vak4Kleur);
  rect(vak4X, vak4Y, rectW, rectH, 10);

  fill(vak5Kleur);
  rect(vak5X, vak5Y, rectW, rectH, 10);

  fill(vak6Kleur);
  rect(vak6X, vak6Y, rectW, rectH, 10);

  fill(vak7Kleur);
  rect(vak7X, vak7Y, rectW, rectH, 10);

  fill(vak8Kleur);
  rect(vak8X, vak8Y, rectW, rectH, 10);

  fill(vak9Kleur);
  rect(vak9X, vak9Y, rectW, rectH, 10);

  // Teken de timer
  fill(255)
  strokeWeight(5)
  stroke(0)
  text(overigeTijd, 15, 200)

  if (gameOver == false) {
    let verstreken = (millis() - startTijd) / 1000
    overigeTijd = ceil (maxTijd - verstreken)
    
    if (overigeTijd <= 0) {
      if (beurt == "red") {
        beurt = "blue";
      } else {
        beurt = "red";
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
    text("Draw!", 160, 35);
    stroke("black")
  } else {
    text("Game finished", 100, 35);
  }

  // Play again knop
  fill("#37ff00");
  stroke("#2dcf00");
  rect(playAgainX, playAgainY, playAgainW, playAgainH, 5);
  fill("white");
  textSize(20);
  stroke(0);
  text(playAgainText, 150, 370);

  overigeTijd = "";
}

  // Laat zien welke speler aan de beurt is
  if (beurt == "red") {
    textSize(30)
    fill(255)
    stroke(10)
    text(redsTurn, 130, 35)

    strokeWeight(3);
    stroke(0)
    fill(cursorRed);
    stroke("#ff7070")
    circle(mouseX, mouseY, 15);

  } else {
    textSize(30)
    fill(255)
    stroke(10)
    text(bluesTurn, 130, 35)
    
    strokeWeight(3);
    stroke("#4659ff")
    fill(cursorBlue);
    circle(mouseX, mouseY, 15);
  }

  stroke(0)


  if (gameOver == true) {
    redsTurn = ("");
    bluesTurn = ("");

    stroke("#37ff00")
  }

  if (gelijkspel == true) {
    stroke(0)
  }
}

function mousePressed(){

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
if (
  (vak1Kleur != "grey" && vak1Kleur == vak2Kleur && vak2Kleur == vak3Kleur) || 
  (vak4Kleur != "grey" && vak4Kleur == vak5Kleur && vak5Kleur == vak6Kleur) || 
  (vak7Kleur != "grey" && vak7Kleur == vak8Kleur && vak8Kleur == vak9Kleur) || 
  
  (vak1Kleur != "grey" && vak1Kleur == vak4Kleur && vak4Kleur == vak7Kleur) || 
  (vak2Kleur != "grey" && vak2Kleur == vak5Kleur && vak5Kleur == vak8Kleur) || 
  (vak3Kleur != "grey" && vak3Kleur == vak6Kleur && vak6Kleur == vak9Kleur) || 
  
  (vak1Kleur != "grey" && vak1Kleur == vak5Kleur && vak5Kleur == vak9Kleur) || 
  (vak3Kleur != "grey" && vak3Kleur == vak5Kleur && vak5Kleur == vak7Kleur) 
) {
  gameOver = true;
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

// Wissel de beurt om elke keer dat er op een vakje word gedrukt
  if (beurt == "red") {
    beurt = "blue";
    text("Blue's turn", 150, 30)
  } else {
    beurt = "red";
    text("Reds turn", 150, 30)
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

  beurt = "red";

  redsTurn = ("Reds turn")
  bluesTurn = ("Blue's turn")

  startTijd = millis();
}