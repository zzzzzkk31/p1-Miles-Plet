// virtueel huisdier
// je moet je huisdier voeden, laten slapen, met hem spelen en hem wassen
// eten kost geld, dat verdien je door krasloten te kopen en open te krassen
// voeden is een minigame waarbij je vallend eten vangt met je huisdier
// spelen is een minigame waarbij je zo vaak mogelijk op een stuiterende bal klikt
// wassen is een minigame waarbij je de vlekken van het huisdier afschrobt
// bij sommige gezichten, bij het eten en tijdens het slapen hoor je een geluidje
// alles wordt opgeslagen in localStorage, zo begint hij niet steeds opnieuw
// de tijd loopt ook door als de game dicht is, dus vergeet hem niet
// als je slecht voor hem zorgt en zijn gezondheid 0 wordt, gaat hij dood
// wil je een andere naam? dan moet je hem eerst doodschieten en een nieuwe nemen

// het plaatje van de achtergrond
let img;

// namen van alle gezichten van het huisdier
// elke naam is ook de naam van het plaatje in de map expressies
let expressieNamen = [
  "blij",
  "superblij",
  "verdrietig",
  "huilen",
  "boos",
  "honger",
  "moe",
  "slapen",
  "ziek",
  "misselijk",
];

// hier komen de plaatjes in, met de naam erbij
// expressies["blij"] is dus het plaatje van het blije gezicht
let expressies = {};

// welk gezicht je nu ziet, dit wordt elke keer gekozen in kiesExpressie()
let huidigeExpressie = "blij";

// gezichten die een eigen geluidje hebben
// elke naam is ook de naam van het geluid in de map sounds
let geluidNamen = ["boos", "huilen", "verdrietig"];
// hier komen de geluiden in, net als bij de expressies
let geluiden = {};
// geluid bij elke hap eten en een geluid dat blijft herhalen als hij slaapt
let eetGeluid;
let slaapGeluid;

// welk scherm je ziet: "naam", "huisdier", "eten", "spelen", "kraslot", "wassen", "schieten" of "dood"
// draw() kijkt elke keer naar deze variabele om te weten wat hij moet tekenen
// mousePressed() kijkt ernaar om te weten welke knoppen er zijn
// in setup() wordt gekeken met welk scherm je begint
let scherm = "huisdier";

// de naam van je huisdier, die typ je zelf in op het naam scherm
// "" betekent dat hij nog geen naam heeft
let huisdierNaam = "";
// langer past niet mooi boven zijn hoofd
let maxNaamLengte = 12;

// true als het huisdier dood is, dan zie je alleen nog de grafsteen
let dood = false;
// waardoor hij dood is gegaan: "ziek" of "geschoten"
// daarmee laten we op het dood scherm de goede tekst zien
let doodsoorzaak = "";

// verjaardag van het huisdier, wordt ingevuld als je hem een naam geeft
// day(), month() en year() van p5 geven de datum van vandaag
let geboorteDag = 0;
let geboorteMaand = 0;
let geboorteJaar = 0;
// Date.now() is de tijd in milliseconden sinds 1 januari 1970
// anders dan millis() begint die niet opnieuw als je de game afsluit
// daarmee rekenen we uit hoeveel dagen oud hij is
let geboorteTijd = 0;
// 1 dag in milliseconden: 1000 ms * 60 seconden * 60 minuten * 24 uur
let dagInMillis = 1000 * 60 * 60 * 24;

// grootte en plek van het huisdier
// schaal 1 = even groot als het plaatje, alle gezichten krijgen dezelfde schaal
let huisdierSchaal = 1;
let huisdierX = 440;
// voetY is waar de voeten staan, zo staat hij op het gras bij elk gezicht
let huisdierVoetY = 400;

// plek en grootte van de naam boven zijn hoofd
let naamY = huisdierVoetY - 225;
let naamTekstGrootte = 24;

// de 4 statistieken van het huisdier, alles gaat van 0 tot 100
// let op: bij honger is hoog slecht (100 = heel veel honger)
// bij de andere 3 is hoog juist goed
let huisdier = {
  honger: 20,
  energie: 80,
  geluk: 80,
  gezondheid: 100,
};

// geld om eten te kopen, dat verdien je met krasloten
let geld = 20;
let etenPrijs = 10;
let kraslotPrijs = 5;

// true als het huisdier slaapt
// dan krijgt hij energie en gezondheid terug en kun je alleen wakker maken
let slaapt = false;

// tijd bijhouden, net als de timer bij boter kaas en eieren
// elke tikTijd milliseconden (1000 = 1 seconde) veranderen de statistieken een beetje
// laatsteTik is in Date.now() tijd en wordt opgeslagen
// zo weten we na het opstarten hoe lang je weg was en loopt de tijd door als de game dicht is
let tikTijd = 1000;
let laatsteTik = 0;

// na te veel eten is hij een paar seconden misselijk
// misselijkTot is het moment (in millis) waarop dat weer over is
let misselijkTot = 0;
// na een goede actie in een minigame is hij heel even superblij
let superblijTot = 0;

// korte tekst bovenin zodat je ziet wat er gebeurt, bijvoorbeeld "Niet genoeg geld!"
// meldingTot is het moment waarop hij weer weg moet
let melding = "";
let meldingTot = 0;

// de naam waaronder alles in localStorage wordt opgeslagen
let opslagNaam = "virtueelHuisdier";

// alles staat in variabelen, dan hoef je het maar op 1 plek te veranderen

// maat van alle knoppen
let knopBreedte = 150;
let knopHoogte = 45;

// de knoppen onderaan het huisdier scherm
// de x van elke knop komt uit knopX(), ze hebben allemaal dezelfde y
let knopY = 425;
let knopTeksten = [
  "Voeden (€" + etenPrijs + ")",
  "Spelen",
  "Wassen",
  "Slapen",
  "Kraslot (€" + kraslotPrijs + ")",
];

// de symbolen die op een kraslot kunnen staan
// krasPrijzen[0] is wat je wint met 3 keer krasSymbolen[0], enzovoort
let krasSymbolen = ["💎", "💰", "🍖", "⭐", "🍀"];
let krasPrijzen = [100, 50, 30, 25, 20];
// wat je wint als er 2 dezelfde zijn
let tweeDezelfdePrijs = 8;

// de 3 vakjes van het kraslot
// symbool = welk symbool eronder zit (het nummer in krasSymbolen)
// kras = hoe lang je er al over hebt gekrast
// open = true als het vakje helemaal open is
let krasVakGrootte = 130;
let krasVakken = [
  { x: 215, y: 158, symbool: 0, kras: 0, open: false },
  { x: 375, y: 158, symbool: 0, kras: 0, open: false },
  { x: 535, y: 158, symbool: 0, kras: 0, open: false },
];
// hoe lang je moet krassen voordat een vakje open gaat
let krasNodig = 20;
// true als de winst van dit lot al bij je geld is opgeteld
// anders zou je elke keer dat draw() wordt aangeroepen opnieuw geld krijgen
let krasUitbetaald = false;
let krasWinst = 0;

// de vuile vlekken voor de was minigame
// elke vlek is een data-object met x, y, grootte en vuil (100 = vies, 0 = schoon)
let vlekken = [];
let aantalVlekken = 6;

// de eet minigame: eten valt uit de lucht en jij vangt het met je huisdier
// soms valt er iets vies naar beneden, dat moet je juist ontwijken
let etenSymbolen = ["🍖", "🍎", "🍕", "🍌", "🥕"];
let viesSymbool = "💩";
// kans dat er iets vies valt, 0.25 = 1 op de 4
let viesKans = 0.25;
// alles wat nu aan het vallen is, elk ding is een data-object met x, y en vies
let vallendEten = [];
// hoeveel dingen er per potje vallen en hoeveel er nog moeten komen
let etenPerPotje = 10;
let etenNogTeVallen = 0;
let etenSnelheid = 4;
// om de hoeveel milliseconden er iets nieuws valt
let etenTussenTijd = 900;
let volgendEtenTijd = 0;
let etenGevangen = 0;
// waar het huisdier staat, die volgt je muis
let etenX = 440;

// de speel minigame: een bal stuitert rond en jij klikt erop
let bal = { x: 440, y: 250, snelheidX: 4, snelheidY: 3, grootte: 50 };
// de bal stuitert tussen deze hoogtes, zo komt hij niet over de tekst en de knoppen
let balBoven = 85;
let balOnder = 415;
// een potje duurt 15 seconden
let speelDuur = 15000;
let speelEindTijd = 0;
let speelScore = 0;
// zoveel geluk krijgt hij elke keer dat je de bal raakt
let gelukPerRaak = 4;

// plaatjes en geluiden laden voordat het spel start
// p5 roept preload() als eerste aan en wacht tot alles geladen is
function preload() {
  img = loadImage("huisdierachtergrond.png");

  // elk gezicht laden en in het object bewaren onder zijn naam
  for (let i = 0; i < expressieNamen.length; i++) {
    let naam = expressieNamen[i];
    expressies[naam] = loadImage("expressies/" + naam + ".png");
  }

  // zelfde manier voor de geluiden van de gezichten
  for (let i = 0; i < geluidNamen.length; i++) {
    let naam = geluidNamen[i];
    geluiden[naam] = loadSound("sounds/" + naam + ".mp3");
  }
  eetGeluid = loadSound("sounds/eet.mp3");
  slaapGeluid = loadSound("sounds/slapen.mp3");
}

// setup() wordt 1 keer aangeroepen als het programma start
function setup() {
  // zelfde verhouding als de achtergrond (1408 x 768), dan wordt niks uitgerekt
  createCanvas(880, 480);

  // pixel-art scherp houden als je het groter of kleiner tekent
  noSmooth();

  // de oude save laden, zo ga je verder waar je was
  // eerst laatsteTik op nu zetten, een oude save zonder laatsteTik begint dan gewoon vanaf nu
  laatsteTik = Date.now();
  laden();

  // nog geen naam? dan moet je die eerst geven
  // was hij de vorige keer al dood? dan zie je meteen de grafsteen
  if (huisdierNaam == "") {
    scherm = "naam";
  } else if (dood) {
    scherm = "dood";
  }
}

// draw() wordt steeds opnieuw aangeroepen (ongeveer 60 keer per seconde)
// elke keer wordt het hele scherm opnieuw getekend
function draw() {
  image(img, 0, 0, width, height);

  // de tijd loopt altijd door, ook als je aan het krassen of wassen bent
  tijdVerloop();
  kiesExpressie();
  slaapGeluidje();

  // gezondheid op 0? dan gaat hij dood
  // dood == false erbij, anders gebeurt dit 60 keer per seconde
  if (huisdier.gezondheid <= 0 && dood == false) {
    dood = true;
    doodsoorzaak = "ziek";
    scherm = "dood";
    opslaan();
  }

  // goede scherm laten zien
  // elk scherm heeft zijn eigen teken functie
  if (scherm == "naam") {
    tekenNaamScherm();
  } else if (scherm == "dood") {
    tekenDoodScherm();
  } else if (scherm == "huisdier") {
    tekenHuisdierScherm();
  } else if (scherm == "eten") {
    tekenEetScherm();
  } else if (scherm == "spelen") {
    tekenSpeelScherm();
  } else if (scherm == "kraslot") {
    tekenKraslotScherm();
  } else if (scherm == "wassen") {
    tekenWasScherm();
  } else if (scherm == "schieten") {
    tekenSchietScherm();
  }

  // melding als laatste, zodat hij boven alles staat
  tekenMelding();
}

// de slaap geluidjes laten herhalen zolang hij slaapt
// isPlaying() is true als het geluid al speelt, dan hoeven we niet opnieuw te beginnen
function slaapGeluidje() {
  if (slaapt && dood == false) {
    if (slaapGeluid.isPlaying() == false) {
      slaapGeluid.loop();
    }
  } else if (slaapGeluid.isPlaying()) {
    slaapGeluid.stop();
  }
}

// de eet minigame starten, dat kost geld
function startEten() {
  if (geld < etenPrijs) {
    toonMelding("Niet genoeg geld! Probeer een kraslot.");
    return;
  }
  geld = geld - etenPrijs;

  vallendEten = [];
  etenNogTeVallen = etenPerPotje;
  etenGevangen = 0;
  volgendEtenTijd = millis();
  scherm = "eten";
}

// het scherm van de eet minigame
function tekenEetScherm() {
  // het huisdier volgt de muis, constrain zodat hij niet uit beeld loopt
  etenX = constrain(mouseX, 110, width - 110);
  tekenHuisdier(etenX);

  // tijd voor iets nieuws? dan laten we het bovenaan op een random plek vallen
  if (etenNogTeVallen > 0 && millis() > volgendEtenTijd) {
    vallendEten.push({
      x: random(60, width - 60),
      y: -20,
      symbool: random(etenSymbolen),
      // random() zonder getal geeft iets tussen 0 en 1
      vies: random() < viesKans,
    });
    etenNogTeVallen = etenNogTeVallen - 1;
    volgendEtenTijd = millis() + etenTussenTijd;
  }

  // alles laten vallen en tekenen
  // we gaan achteruit door de array, want met splice halen we er dingen uit
  // als je vooruit gaat sla je dan per ongeluk een ding over
  textAlign(CENTER, CENTER);
  textSize(40);
  for (let i = vallendEten.length - 1; i >= 0; i--) {
    let eten = vallendEten[i];
    eten.y = eten.y + etenSnelheid;

    if (eten.vies) {
      text(viesSymbool, eten.x, eten.y);
    } else {
      text(eten.symbool, eten.x, eten.y);
    }

    if (opgevangen(eten)) {
      eetHap(eten);
      vallendEten.splice(i, 1);
    } else if (eten.y > height + 30) {
      // onderaan uit beeld, dan is hij gemist
      vallendEten.splice(i, 1);
    }
  }

  // uitleg en hoeveel je al hebt gevangen
  noStroke();
  fill(0, 150);
  rect(width / 2 - 220, 15, 440, 60, 10);
  fill(255);
  textSize(18);
  text("Vang het eten met de muis! Pas op voor " + viesSymbool, width / 2, 35);
  textSize(15);
  text("Gevangen: " + etenGevangen + "   Nog " + (etenNogTeVallen + vallendEten.length) + " te gaan", width / 2, 58);

  tekenKnop("Stoppen", knopX(2), knopY);

  // niks meer te vallen en alles is beneden? dan is het potje klaar
  if (etenNogTeVallen == 0 && vallendEten.length == 0) {
    toonMelding("Lekker! " + etenGevangen + " hapjes gegeten.");
    scherm = "huisdier";
  }
}

// true als het eten bij de mond van het huisdier is
// de mond zit ongeveer 60 tot 150 pixels boven zijn voeten
function opgevangen(eten) {
  return (
    eten.y > huisdierVoetY - 150 &&
    eten.y < huisdierVoetY - 60 &&
    abs(eten.x - etenX) < 70
  );
}

// wat er gebeurt als hij iets vangt
// lekker eten: minder honger en meer energie
// als hij al bijna geen honger had eet hij te veel, dan gaat zijn gezondheid omlaag
// iets vies: minder gezondheid
function eetHap(eten) {
  if (eten.vies) {
    huisdier.gezondheid = huisdier.gezondheid - 10;
    // nu + 3000 is over 3 seconden
    misselijkTot = millis() + 3000;
    toonMelding("Bah! Dat was vies...");
  } else {
    if (huisdier.honger < 10) {
      huisdier.gezondheid = huisdier.gezondheid - 5;
      misselijkTot = millis() + 3000;
      toonMelding("Bah, te veel gegeten...");
    } else {
      superblijTot = millis() + 500;
    }
    huisdier.honger = huisdier.honger - 8;
    huisdier.energie = huisdier.energie + 3;
    etenGevangen = etenGevangen + 1;
    eetGeluid.play();
  }
  begrensStatistieken();
}

// de speel minigame starten
// spelen kost energie en hij krijgt er honger van
function startSpelen() {
  if (huisdier.energie < 15) {
    toonMelding(huisdierNaam + " is te moe om te spelen.");
    return;
  }
  huisdier.energie = huisdier.energie - 15;
  huisdier.honger = huisdier.honger + 5;
  begrensStatistieken();

  // de bal begint in het midden en gaat een random kant op
  bal.x = width / 2;
  bal.y = 200;
  bal.snelheidX = random([-4, 4]);
  bal.snelheidY = random([-3, 3]);
  speelScore = 0;
  speelEindTijd = millis() + speelDuur;
  scherm = "spelen";
}

// het scherm van de speel minigame
function tekenSpeelScherm() {
  tekenHuisdier(huisdierX);

  // de bal bewegen
  bal.x = bal.x + bal.snelheidX;
  bal.y = bal.y + bal.snelheidY;

  // tegen de rand? dan de andere kant op
  // * -1 maakt van 4 een -4 en van -4 een 4
  let straal = bal.grootte / 2;
  if (bal.x < straal || bal.x > width - straal) {
    bal.snelheidX = bal.snelheidX * -1;
  }
  if (bal.y < balBoven + straal || bal.y > balOnder - straal) {
    bal.snelheidY = bal.snelheidY * -1;
  }

  // rode bal met een witte streep
  fill("#e63946");
  stroke(0);
  strokeWeight(3);
  circle(bal.x, bal.y, bal.grootte);
  stroke(255);
  line(bal.x - straal + 5, bal.y, bal.x + straal - 5, bal.y);
  noStroke();

  // hoeveel seconden nog, ceil rondt naar boven af zodat je geen 0 ziet als er nog tijd is
  let secondenOver = ceil((speelEindTijd - millis()) / 1000);

  fill(0, 150);
  rect(width / 2 - 200, 15, 400, 60, 10);
  fill(255);
  textSize(18);
  textAlign(CENTER, CENTER);
  text("Klik zo vaak mogelijk op de bal!", width / 2, 35);
  textSize(15);
  text("Raak: " + speelScore + "   Tijd: " + secondenOver, width / 2, 58);

  tekenKnop("Stoppen", knopX(2), knopY);

  if (millis() > speelEindTijd) {
    toonMelding("Klaar! " + speelScore + " keer raak, +" + speelScore * gelukPerRaak + " geluk");
    scherm = "huisdier";
  }
}

// true als de muis op de bal staat
function muisOpBal() {
  return dist(mouseX, mouseY, bal.x, bal.y) < bal.grootte / 2;
}

// raak! meer geluk en de bal gaat steeds een beetje sneller
function raakBal() {
  speelScore = speelScore + 1;
  huisdier.geluk = huisdier.geluk + gelukPerRaak;
  begrensStatistieken();
  superblijTot = millis() + 500;
  bal.snelheidX = bal.snelheidX * 1.15;
  bal.snelheidY = bal.snelheidY * 1.15;
}

// slapen kan alleen als hij een beetje moe is
function gaSlapen() {
  if (huisdier.energie >= 90) {
    toonMelding(huisdierNaam + " is nog niet moe.");
    return;
  }
  slaapt = true;
}

// kijkt hoeveel tikken er voorbij zijn sinds de laatste tik en doet die allemaal
// normaal is dat er 1, maar als je weg was (game dicht of ander tabblad) kunnen het er heel veel zijn
// zo gaat het huisdier door met honger krijgen, slapen enzovoort terwijl jij weg bent
function tijdVerloop() {
  // tijdens het naam geven en als hij dood is loopt de tijd niet
  if (scherm == "naam" || dood) {
    return;
  }

  // Date.now() gaat ook door als de game dicht is, millis() niet
  // zolang er nog een hele tik voorbij is, doen we een tik
  let getikt = false;
  while (Date.now() - laatsteTik >= tikTijd) {
    tik();
    laatsteTik = laatsteTik + tikTijd;
    getikt = true;

    // dood gegaan terwijl je weg was? dan stoppen, draw() laat het dood scherm zien
    if (huisdier.gezondheid <= 0) {
      laatsteTik = Date.now();
      break;
    }
  }

  // opslaan na de tikken, zo ben je nooit veel kwijt
  if (getikt) {
    opslaan();
  }
}

// 1 tik: de statistieken veranderen een beetje
// wakker: meer honger, moeier en minder blij
// slapen: energie en gezondheid komen terug, honger gaat langzamer omhoog
function tik() {
  if (slaapt) {
    huisdier.energie = huisdier.energie + 2;
    huisdier.gezondheid = huisdier.gezondheid + 0.5;
    huisdier.honger = huisdier.honger + 0.5;
    huisdier.geluk = huisdier.geluk - 0.2;

    // uitgeslapen, dan wordt hij vanzelf wakker
    if (huisdier.energie >= 100) {
      slaapt = false;
      toonMelding("Goedemorgen! Helemaal uitgeslapen.");
    }
  } else {
    huisdier.honger = huisdier.honger + 1;
    huisdier.energie = huisdier.energie - 0.5;
    huisdier.geluk = huisdier.geluk - 0.7;
    huisdier.gezondheid = huisdier.gezondheid - 0.2;
  }

  // met veel honger wordt hij ook nog ziek
  if (huisdier.honger > 80) {
    huisdier.gezondheid = huisdier.gezondheid - 1;
  }

  begrensStatistieken();
}

// zorgt dat elke statistiek tussen 0 en 100 blijft
// constrain(waarde, 0, 100) maakt van -20 een 0 en van 130 een 100
// zo klopt het altijd, hoe vaak je ook klikt
function begrensStatistieken() {
  huisdier.honger = constrain(huisdier.honger, 0, 100);
  huisdier.energie = constrain(huisdier.energie, 0, 100);
  huisdier.geluk = constrain(huisdier.geluk, 0, 100);
  huisdier.gezondheid = constrain(huisdier.gezondheid, 0, 100);
}

// alles opslaan in localStorage
// localStorage kan alleen tekst bewaren, geen objecten
// JSON.stringify maakt van het object een lange tekst
function opslaan() {
  let save = {
    huisdier: huisdier,
    geld: geld,
    slaapt: slaapt,
    naam: huisdierNaam,
    dood: dood,
    doodsoorzaak: doodsoorzaak,
    geboorteDag: geboorteDag,
    geboorteMaand: geboorteMaand,
    geboorteJaar: geboorteJaar,
    geboorteTijd: geboorteTijd,
    laatsteTik: laatsteTik,
  };
  localStorage.setItem(opslagNaam, JSON.stringify(save));
}

// de save weer laden uit localStorage
// JSON.parse maakt van de tekst weer een object
function laden() {
  let tekst = localStorage.getItem(opslagNaam);

  // de eerste keer is er nog niks opgeslagen, dan krijg je null terug
  // dan beginnen we gewoon met de waardes van bovenaan
  if (tekst == null) {
    return;
  }

  let save = JSON.parse(tekst);
  huisdier = save.huisdier;
  geld = save.geld;
  slaapt = save.slaapt;

  // oude saves van voordat er een naam was hebben geen naam en dood
  // dan is het undefined, en dan houden we de waardes van bovenaan
  if (save.naam != undefined) {
    huisdierNaam = save.naam;
  }
  if (save.dood != undefined) {
    dood = save.dood;
  }
  if (save.doodsoorzaak != undefined) {
    doodsoorzaak = save.doodsoorzaak;
  }

  // oude saves hebben nog geen laatsteTik, dan blijft het nu
  if (save.laatsteTik != undefined) {
    laatsteTik = save.laatsteTik;
  }

  // oude saves hebben nog geen verjaardag, dan is hij vandaag jarig
  if (save.geboorteTijd != undefined) {
    geboorteDag = save.geboorteDag;
    geboorteMaand = save.geboorteMaand;
    geboorteJaar = save.geboorteJaar;
    geboorteTijd = save.geboorteTijd;
  } else {
    zetVerjaardag();
  }
}

// de verjaardag wordt vandaag
function zetVerjaardag() {
  geboorteDag = day();
  geboorteMaand = month();
  geboorteJaar = year();
  geboorteTijd = Date.now();
}

// hoeveel dagen oud het huisdier is
// nu - geboorteTijd is hoeveel milliseconden hij al leeft, dat delen door 1 dag
// floor zodat je 2 dagen krijgt in plaats van 2.7 dagen
function leeftijdInDagen() {
  return floor((Date.now() - geboorteTijd) / dagInMillis);
}

// true als het vandaag zijn verjaardag is
// zelfde dag en maand, maar niet op de dag dat hij geboren is
function isJarig() {
  return (
    day() == geboorteDag &&
    month() == geboorteMaand &&
    year() > geboorteJaar
  );
}

// de verjaardag als tekst, bijvoorbeeld "14-10-2026"
function geboorteDatumTekst() {
  return geboorteDag + "-" + geboorteMaand + "-" + geboorteJaar;
}

// alles terug naar het begin voor een nieuw huisdier
// daarna moet je hem eerst weer een naam geven
function nieuwHuisdier() {
  huisdier = {
    honger: 20,
    energie: 80,
    geluk: 80,
    gezondheid: 100,
  };
  geld = 20;
  slaapt = false;
  dood = false;
  doodsoorzaak = "";
  huisdierNaam = "";
  scherm = "naam";
  opslaan();
}

// kiest het gezicht dat past bij hoe het huisdier zich voelt
// bovenaan staat wat het belangrijkst is, de eerste die klopt wint
// bijvoorbeeld: als hij slaapt zie je altijd het slaap gezicht, ook als hij honger heeft
// als het gezicht verandert en het nieuwe gezicht heeft een geluid, dan hoor je dat 1 keer
function kiesExpressie() {
  // onthouden welk gezicht het was, zo kunnen we straks zien of het veranderd is
  let vorigeExpressie = huidigeExpressie;

  if (slaapt) {
    huidigeExpressie = "slapen";
  } else if (millis() < misselijkTot) {
    huidigeExpressie = "misselijk";
  } else if (millis() < superblijTot) {
    huidigeExpressie = "superblij";
  } else if (huisdier.gezondheid < 30) {
    huidigeExpressie = "ziek";
  } else if (huisdier.honger > 70 && huisdier.geluk < 30) {
    huidigeExpressie = "boos";
  } else if (huisdier.honger > 70) {
    huidigeExpressie = "honger";
  } else if (huisdier.energie < 25) {
    huidigeExpressie = "moe";
  } else if (huisdier.geluk < 25) {
    huidigeExpressie = "huilen";
  } else if (huisdier.geluk < 50) {
    huidigeExpressie = "verdrietig";
  } else if (huisdier.geluk > 85) {
    huidigeExpressie = "superblij";
  } else {
    huidigeExpressie = "blij";
  }

  // undefined betekent dat dit gezicht geen geluid heeft
  // als hij dood is hoor je niks meer
  if (
    huidigeExpressie != vorigeExpressie &&
    geluiden[huidigeExpressie] != undefined &&
    dood == false
  ) {
    geluiden[huidigeExpressie].play();
  }
}

// melding 2,5 seconden laten zien
function toonMelding(tekst) {
  melding = tekst;
  meldingTot = millis() + 2500;
}

// tekent de melding bovenin, maar alleen als hij nog niet voorbij is
function tekenMelding() {
  if (millis() > meldingTot) {
    return;
  }
  // zwart doorzichtig vak met witte tekst erin
  noStroke();
  fill(0, 180);
  rect(width / 2 - 200, 20, 400, 40, 10);

  fill(255);
  textSize(18);
  textAlign(CENTER, CENTER);
  text(melding, width / 2, 40);
}

// het gewone scherm met het huisdier, de statistieken en de knoppen
function tekenHuisdierScherm() {
  // als hij slaapt wordt alles donker, net of het nacht is
  if (slaapt) {
    noStroke();
    fill(0, 0, 40, 150);
    rect(0, 0, width, height);
  }

  tekenHuisdier(huisdierX);
  tekenNaam();
  tekenStatistieken();

  // als hij slaapt is er maar 1 knop, die staat op de plek van de middelste knop
  if (slaapt) {
    tekenKnop("Wakker maken", knopX(2), knopY);
  } else {
    // alle knoppen tekenen met een for loop
    // i is 0 t/m 4, knopX(i) zet ze netjes naast elkaar
    for (let i = 0; i < knopTeksten.length; i++) {
      tekenKnop(knopTeksten[i], knopX(i), knopY);
    }
  }
}

// tekent het huisdier met de voeten op huisdierVoetY en met zijn midden op x
// meestal is x gewoon huisdierX, maar bij de eet minigame loopt hij heen en weer
function tekenHuisdier(x) {
  let plaatje = expressies[huidigeExpressie];
  let breedte = plaatje.width * huisdierSchaal;
  let hoogte = plaatje.height * huisdierSchaal;

  // x - breedte / 2 zodat het midden van het plaatje op x staat
  // voetY - hoogte zodat de onderkant van het plaatje op voetY staat
  image(
    plaatje,
    x - breedte / 2,
    huisdierVoetY - hoogte,
    breedte,
    hoogte,
  );
}

// de tekst boven zijn hoofd
// op zijn verjaardag staat er ook bij dat hij jarig is
function naamTekst() {
  if (isJarig()) {
    return "🎂 " + huisdierNaam + " is jarig! 🎉";
  }
  return huisdierNaam;
}

// de naam van het huisdier boven zijn hoofd
// witte tekst met een zwarte rand, dan kun je hem lezen op de lucht en op het gras
// als de muis erop staat wordt hij geel, zo zie je dat je erop kan klikken
function tekenNaam() {
  if (muisOpNaam() && slaapt == false) {
    fill("#ffd84d");
  } else {
    fill(255);
  }
  stroke(0);
  strokeWeight(4);
  textSize(naamTekstGrootte);
  textAlign(CENTER, CENTER);
  text(naamTekst(), huisdierX, naamY);
  noStroke();
}

// true als de muis op de naam boven zijn hoofd staat
// textWidth() geeft hoe breed de tekst is, daarvoor moet eerst de goede textSize gezet worden
function muisOpNaam() {
  textSize(naamTekstGrootte);
  let breedte = textWidth(naamTekst());
  return (
    mouseX > huisdierX - breedte / 2 &&
    mouseX < huisdierX + breedte / 2 &&
    mouseY > naamY - naamTekstGrootte / 2 &&
    mouseY < naamY + naamTekstGrootte / 2
  );
}

// je kan je huisdier geen nieuwe naam geven
// wil je toch een andere naam, dan moet je hem eerst doodschieten
function startSchieten() {
  scherm = "schieten";
}

// het scherm waar je op je huisdier richt
// je ziet een rood vizier op de plek van de muis
function tekenSchietScherm() {
  tekenHuisdier(huisdierX);

  // uitleg bovenaan
  noStroke();
  fill(0, 150);
  rect(width / 2 - 260, 15, 520, 60, 10);
  fill(255);
  textSize(18);
  textAlign(CENTER, CENTER);
  text("Een nieuwe naam? Dan moet " + huisdierNaam + " eerst dood.", width / 2, 35);
  textSize(15);
  text("Klik op hem om te schieten", width / 2, 58);

  tekenKnop("Toch niet", knopX(2), knopY);

  // rood vizier: een cirkel met een kruis erdoor
  noFill();
  stroke(255, 0, 0);
  strokeWeight(3);
  circle(mouseX, mouseY, 40);
  line(mouseX - 30, mouseY, mouseX + 30, mouseY);
  line(mouseX, mouseY - 30, mouseX, mouseY + 30);
  noStroke();
}

// true als de muis op het huisdier staat
// zelfde berekening als in tekenHuisdier(), zo klopt het met wat je ziet
function muisOpHuisdier() {
  let plaatje = expressies[huidigeExpressie];
  let breedte = plaatje.width * huisdierSchaal;
  let hoogte = plaatje.height * huisdierSchaal;
  let x = huisdierX - breedte / 2;
  let y = huisdierVoetY - hoogte;

  return mouseX > x && mouseX < x + breedte && mouseY > y && mouseY < y + hoogte;
}

// raak! het huisdier gaat dood
function schiet() {
  dood = true;
  doodsoorzaak = "geschoten";
  scherm = "dood";
  toonMelding("PANG!");
}

// vak linksboven met een balk per statistiek en je geld
function tekenStatistieken() {
  // wit doorzichtig vak zodat je de tekst goed kan lezen
  noStroke();
  fill(255, 200);
  rect(15, 15, 250, 210, 10);

  // bij honger is hoog slecht, daarom geven we omgekeerd = true mee
  tekenBalk("Honger", huisdier.honger, 30, true);
  tekenBalk("Energie", huisdier.energie, 60, false);
  tekenBalk("Geluk", huisdier.geluk, 90, false);
  tekenBalk("Gezondheid", huisdier.gezondheid, 120, false);

  fill(0);
  textSize(16);
  textAlign(LEFT, CENTER);
  text("Geld: €" + geld, 25, 155);

  // verjaardag en leeftijd
  textSize(14);
  text("Jarig op: " + geboorteDag + "-" + geboorteMaand, 25, 182);
  text("Leeftijd: " + leeftijdInDagen() + " dagen", 25, 205);
}

// tekent 1 balk met de naam, een gekleurde balk en het getal
// het getal is ook handig om te kijken of alles goed werkt
// omgekeerd = true betekent dat een hoge waarde slecht is (bij honger)
function tekenBalk(naam, waarde, y, omgekeerd) {
  // hoe goed het gaat, van 0 (slecht) tot 100 (goed)
  let goed = waarde;
  if (omgekeerd) {
    goed = 100 - waarde;
  }

  // groen als het goed gaat, oranje als het matig is, rood als het slecht is
  let kleur;
  if (goed > 60) {
    kleur = color("#3cb043");
  } else if (goed > 30) {
    kleur = color("orange");
  } else {
    kleur = color("red");
  }

  fill(0);
  noStroke();
  textSize(14);
  textAlign(LEFT, CENTER);
  text(naam, 25, y);

  // eerst een grijze balk en daaroverheen de gekleurde balk
  // de balk is 100 breed, dus de waarde is meteen de breedte
  fill(200);
  rect(115, y - 8, 100, 16, 4);
  fill(kleur);
  rect(115, y - 8, waarde, 16, 4);

  // het getal achter de balk, round zodat je geen 43.7 ziet
  fill(0);
  text(round(waarde), 225, y);
}

// x van een knop onderaan
// knop 0 staat op 35, elke volgende knop 165 verder (150 breed + 15 ruimte)
function knopX(nummer) {
  return 35 + nummer * 165;
}

// tekent een knop die bij x en y begint
// knopTekst is wat er op de knop staat, bijvoorbeeld "Spelen"
function tekenKnop(knopTekst, x, y) {
  // grijs als de muis erop staat
  if (muisOpKnop(x, y)) {
    fill(220);
  } else {
    fill(255);
  }
  // zwarte rand van 2 dik, de 8 aan het eind maakt de hoeken rond
  stroke(0);
  strokeWeight(2);
  rect(x, y, knopBreedte, knopHoogte, 8);

  // tekst precies in het midden van de knop
  fill(0);
  noStroke();
  textSize(17);
  textAlign(CENTER, CENTER);
  text(knopTekst, x + knopBreedte / 2, y + knopHoogte / 2);
}

// true als de muis op de knop staat die bij x en y begint
// de muis moet rechts van de linkerkant, links van de rechterkant,
// onder de bovenkant en boven de onderkant zijn
function muisOpKnop(x, y) {
  return (
    mouseX > x &&
    mouseX < x + knopBreedte &&
    mouseY > y &&
    mouseY < y + knopHoogte
  );
}

// een kraslot kopen
// heb je niet genoeg geld, dan krijg je een gratis lot
// anders kun je nooit meer eten kopen en zit je vast
function koopKraslot() {
  if (geld >= kraslotPrijs) {
    geld = geld - kraslotPrijs;
  } else {
    toonMelding("Je bent blut, deze krijg je gratis!");
  }
  nieuwKraslot();
  scherm = "kraslot";
}

// alle vakjes een random symbool geven en weer dicht maken
function nieuwKraslot() {
  for (let i = 0; i < krasVakken.length; i++) {
    // floor(random(5)) geeft 0, 1, 2, 3 of 4, dus een plek in krasSymbolen
    krasVakken[i].symbool = floor(random(krasSymbolen.length));
    krasVakken[i].kras = 0;
    krasVakken[i].open = false;
  }
  krasUitbetaald = false;
  krasWinst = 0;
}

// het scherm met het kraslot
function tekenKraslotScherm() {
  // achtergrond wat donkerder zodat het lot opvalt
  noStroke();
  fill(0, 120);
  rect(0, 0, width, height);

  // het lot zelf, geel met een donkergele rand
  fill("#ffe27a");
  stroke("#c9a227");
  strokeWeight(4);
  rect(190, 80, 500, 300, 15);

  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(30);
  text("KRASLOT", width / 2, 110);
  textSize(14);
  text(
    "3 dezelfde = grote prijs, 2 dezelfde = €" + tweeDezelfdePrijs,
    width / 2,
    142,
  );

  krassen();

  // alle 3 de vakjes tekenen
  for (let i = 0; i < krasVakken.length; i++) {
    let vak = krasVakken[i];

    // eerst het symbool op een wit vakje
    fill(255);
    noStroke();
    rect(vak.x, vak.y, krasVakGrootte, krasVakGrootte, 10);
    fill(0);
    textSize(70);
    text(
      krasSymbolen[vak.symbool],
      vak.x + krasVakGrootte / 2,
      vak.y + krasVakGrootte / 2,
    );

    // daaroverheen de zilveren laag, als het vakje nog niet open is
    // hoe meer je krast, hoe doorzichtiger het zilver wordt
    if (vak.open == false) {
      let zilver = map(vak.kras, 0, krasNodig, 255, 60);
      fill(190, zilver);
      rect(vak.x, vak.y, krasVakGrootte, krasVakGrootte, 10);
      fill(150, zilver);
      textSize(60);
      text("?", vak.x + krasVakGrootte / 2, vak.y + krasVakGrootte / 2);
    }
  }

  // als alle vakjes open zijn de winst laten zien
  if (alleVakkenOpen()) {
    // maar 1 keer uitbetalen, anders krijg je 60 keer per seconde geld
    if (krasUitbetaald == false) {
      krasWinst = berekenWinst();
      geld = geld + krasWinst;
      krasUitbetaald = true;
    }

    fill(0);
    textSize(20);
    if (krasWinst > 0) {
      text("Je wint €" + krasWinst + "!", width / 2, 305);
    } else {
      text("Helaas, niks gewonnen.", width / 2, 305);
    }
    tekenKnop("Verder", knopX(2), 325);
  }
}

// als je de muis ingedrukt hebt en beweegt boven een vakje, kras je erover
// pmouseX en pmouseY zijn waar de muis het vorige frame was
// als die anders zijn dan mouseX en mouseY beweegt de muis
function krassen() {
  if (mouseIsPressed == false) {
    return;
  }
  if (mouseX == pmouseX && mouseY == pmouseY) {
    return;
  }

  for (let i = 0; i < krasVakken.length; i++) {
    let vak = krasVakken[i];
    if (
      mouseX > vak.x &&
      mouseX < vak.x + krasVakGrootte &&
      mouseY > vak.y &&
      mouseY < vak.y + krasVakGrootte
    ) {
      vak.kras = vak.kras + 1;

      // genoeg gekrast? dan gaat het hele vakje open
      if (vak.kras >= krasNodig) {
        vak.open = true;
      }
    }
  }
}

// true als alle 3 de vakjes open zijn
// als er 1 nog dicht is weten we het al en geven we meteen false terug
function alleVakkenOpen() {
  for (let i = 0; i < krasVakken.length; i++) {
    if (krasVakken[i].open == false) {
      return false;
    }
  }
  return true;
}

// kijken hoeveel je hebt gewonnen
// 3 dezelfde = prijs uit krasPrijzen, 2 dezelfde = kleine prijs, anders niks
function berekenWinst() {
  let a = krasVakken[0].symbool;
  let b = krasVakken[1].symbool;
  let c = krasVakken[2].symbool;

  if (a == b && b == c) {
    return krasPrijzen[a];
  } else if (a == b || b == c || a == c) {
    return tweeDezelfdePrijs;
  } else {
    return 0;
  }
}

// de was minigame starten
// vlekken op random plekken op het huisdier zetten
function startWassen() {
  vlekken = [];
  for (let i = 0; i < aantalVlekken; i++) {
    vlekken.push({
      x: random(huisdierX - 70, huisdierX + 70),
      y: random(huisdierVoetY - 150, huisdierVoetY - 30),
      grootte: random(30, 50),
      vuil: 60,
    });
  }
  scherm = "wassen";
}

// het scherm van de was minigame
function tekenWasScherm() {
  tekenHuisdier(huisdierX);
  schrobben();

  // alle vlekken tekenen
  // hoe schoner de vlek, hoe doorzichtiger hij wordt
  noStroke();
  for (let i = 0; i < vlekken.length; i++) {
    let vlek = vlekken[i];
    if (vlek.vuil > 0) {
      fill(110, 75, 35, map(vlek.vuil, 0, 100, 0, 220));
      circle(vlek.x, vlek.y, vlek.grootte);
    }
  }

  // uitleg en hoeveel vlekken er nog over zijn
  fill(0, 150);
  rect(width / 2 - 200, 15, 400, 60, 10);
  fill(255);
  textSize(18);
  textAlign(CENTER, CENTER);
  text("Schrob de vlekken weg met je muis!", width / 2, 35);
  textSize(15);
  text("Nog " + vuileVlekken() + " vlekken over", width / 2, 58);

  tekenKnop("Stoppen", knopX(2), knopY);

  // gele spons bij de muis
  fill("#ffd84d");
  stroke("#c9a227");
  strokeWeight(2);
  rect(mouseX - 20, mouseY - 12, 40, 24, 6);

  // alles schoon? dan krijgt hij zijn beloning
  if (vuileVlekken() == 0) {
    klaarMetWassen();
  }
}

// als je met de muis ingedrukt over een vlek gaat, wordt hij schoner
// dist() is de afstand tussen de muis en het midden van de vlek
function schrobben() {
  if (mouseIsPressed == false) {
    return;
  }
  for (let i = 0; i < vlekken.length; i++) {
    let vlek = vlekken[i];
    if (vlek.vuil > 0 && dist(mouseX, mouseY, vlek.x, vlek.y) < vlek.grootte / 2 + 10) {
      vlek.vuil = vlek.vuil - 3;

      // zeepbelletjes rond de spons, elke keer op een andere random plek
      fill(255, 200);
      stroke(170, 220, 255);
      strokeWeight(1);
      circle(mouseX + random(-25, 25), mouseY + random(-25, 25), random(6, 14));
      circle(mouseX + random(-25, 25), mouseY + random(-25, 25), random(6, 14));
      noStroke();
    }
  }
}

// telt hoeveel vlekken er nog vies zijn
function vuileVlekken() {
  let aantal = 0;
  for (let i = 0; i < vlekken.length; i++) {
    if (vlekken[i].vuil > 0) {
      aantal = aantal + 1;
    }
  }
  return aantal;
}

// beloning voor het wassen: veel gezondheid
// maar in bad gaan vindt hij niet zo leuk, dus een beetje minder geluk
function klaarMetWassen() {
  huisdier.gezondheid = huisdier.gezondheid + 25;
  huisdier.geluk = huisdier.geluk - 5;
  begrensStatistieken();
  toonMelding("Helemaal schoon! +25 gezondheid");
  scherm = "huisdier";
}

// het scherm waar je een naam geeft
// je ziet het huisdier al staan, met een vak waar je naam in komt
function tekenNaamScherm() {
  // achtergrond wat donkerder zodat de tekst opvalt
  noStroke();
  fill(0, 100);
  rect(0, 0, width, height);

  tekenHuisdier(huisdierX);

  fill(255);
  stroke(0);
  strokeWeight(4);
  textAlign(CENTER, CENTER);
  textSize(32);
  text("Hoe heet je huisdier?", width / 2, 60);

  // wit vak waar de naam in komt
  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(width / 2 - 150, 95, 300, 50, 8);

  // de naam met een knipperend streepje erachter, zoals bij typen
  // frameCount % 60 < 30 is de helft van de tijd true, zo knippert het 1 keer per seconde
  let streepje = "";
  if (frameCount % 60 < 30) {
    streepje = "|";
  }
  fill(0);
  noStroke();
  textSize(26);
  text(huisdierNaam + streepje, width / 2, 120);

  // uitleg onderaan
  fill(255);
  stroke(0);
  strokeWeight(3);
  textSize(18);
  text("Typ een naam en druk op Enter", width / 2, 450);
  noStroke();
}

// het scherm als het huisdier dood is
// een grafsteen met zijn naam erop en een knop om opnieuw te beginnen
function tekenDoodScherm() {
  // alles donker en grijs
  noStroke();
  fill(20, 20, 30, 190);
  rect(0, 0, width, height);

  // bergje aarde onder de grafsteen
  fill(90, 60, 30);
  ellipse(huisdierX, 400, 240, 40);

  // grafsteen, de 4 getallen aan het eind zijn de hoeken
  // linksboven en rechtsboven rond (70), onderaan recht (0)
  fill(150);
  stroke(90);
  strokeWeight(4);
  rect(huisdierX - 80, 190, 160, 210, 70, 70, 0, 0);

  // tekst op de grafsteen
  fill(60);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(30);
  text("R.I.P.", huisdierX, 250);
  textSize(20);
  text(huisdierNaam, huisdierX, 300);
  textSize(14);
  text("geboren", huisdierX, 335);
  text(geboorteDatumTekst(), huisdierX, 355);

  // uitleg bovenaan
  fill(255);
  textSize(32);
  text(huisdierNaam + " is dood...", width / 2, 70);
  // andere tekst als je hem zelf hebt doodgeschoten
  let uitleg = "Je hebt niet goed genoeg voor hem gezorgd.";
  if (doodsoorzaak == "geschoten") {
    uitleg = "Je hebt hem doodgeschoten.";
  }
  textSize(18);
  text(
    "Hij werd " + leeftijdInDagen() + " dagen oud. " + uitleg,
    width / 2,
    115,
  );

  tekenKnop("Nieuw huisdier", knopX(2), knopY);
}

// p5 roept keyPressed() 1 keer aan elke keer dat je een toets indrukt
// key is de toets die je hebt ingedrukt, bijvoorbeeld "a" of "Backspace"
function keyPressed() {
  // geluid aanzetten, net als in mousePressed()
  userStartAudio();

  // typen kan alleen op het naam scherm
  if (scherm != "naam") {
    return;
  }

  if (key == "Backspace") {
    // laatste letter weghalen
    // substring(0, lengte - 1) is de hele naam behalve de laatste letter
    huisdierNaam = huisdierNaam.substring(0, huisdierNaam.length - 1);
  } else if (key == "Enter") {
    // alleen verder als je wel iets hebt getypt
    // vandaag wordt zijn verjaardag
    if (huisdierNaam.length > 0) {
      zetVerjaardag();
      scherm = "huisdier";
      laatsteTik = Date.now();
      opslaan();
    }
  } else if (key.length == 1 && huisdierNaam.length < maxNaamLengte) {
    // key.length == 1 betekent een gewone letter of cijfer
    // toetsen zoals "Shift" of "Tab" zijn langer, die willen we niet in de naam
    huisdierNaam = huisdierNaam + key;
  }
}

// p5 roept mousePressed() 1 keer aan elke keer dat je klikt
// per scherm kijken we op welke knop je klikt en wat er dan moet gebeuren
function mousePressed() {
  // de browser laat pas geluid horen nadat je ergens hebt geklikt
  // userStartAudio() zet het geluid van p5.sound aan bij de eerste klik
  userStartAudio();

  if (scherm == "dood") {
    if (muisOpKnop(knopX(2), knopY)) {
      nieuwHuisdier();
    }
  } else if (scherm == "huisdier") {
    if (slaapt) {
      if (muisOpKnop(knopX(2), knopY)) {
        slaapt = false;
      }
    } else {
      // klik op zijn naam als je een andere naam wil, dan moet je gaan schieten
      // knop 0 t/m 4, in dezelfde volgorde als knopTeksten
      if (muisOpNaam()) {
        startSchieten();
      } else if (muisOpKnop(knopX(0), knopY)) {
        startEten();
      } else if (muisOpKnop(knopX(1), knopY)) {
        startSpelen();
      } else if (muisOpKnop(knopX(2), knopY)) {
        startWassen();
      } else if (muisOpKnop(knopX(3), knopY)) {
        gaSlapen();
      } else if (muisOpKnop(knopX(4), knopY)) {
        koopKraslot();
      }
    }
  } else if (scherm == "eten") {
    // stoppen, wat hij al gegeten heeft telt wel mee
    if (muisOpKnop(knopX(2), knopY)) {
      scherm = "huisdier";
    }
  } else if (scherm == "spelen") {
    // eerst naar de knop kijken, dan pas naar de bal
    if (muisOpKnop(knopX(2), knopY)) {
      scherm = "huisdier";
    } else if (muisOpBal()) {
      raakBal();
    }
  } else if (scherm == "kraslot") {
    // pas terug als alle vakjes open zijn, anders ben je je lot kwijt
    if (alleVakkenOpen() && muisOpKnop(knopX(2), 325)) {
      scherm = "huisdier";
    }
  } else if (scherm == "wassen") {
    // stoppen zonder beloning
    if (muisOpKnop(knopX(2), knopY)) {
      scherm = "huisdier";
    }
  } else if (scherm == "schieten") {
    // eerst naar de knop kijken, anders schiet je hem per ongeluk als je wil stoppen
    if (muisOpKnop(knopX(2), knopY)) {
      scherm = "huisdier";
    } else if (muisOpHuisdier()) {
      schiet();
    }
  }

  // na elke klik opslaan, zo ben je je geld en acties nooit kwijt
  opslaan();
}
