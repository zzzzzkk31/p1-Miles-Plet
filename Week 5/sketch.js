//tank quiz
// je krijgt een vraag met een plaatje en 4 antwoorden
// bij vragen over pantser of munitie zie je na het antwoord een animatie van wat er gebeurt
// zwarte lijn = het pantser, zwarte bal = de kogel
// na de gewone vragen kun je nog de hard mode doen voor extra punten

// array met alle vragen, elke vraag is een data-object
// vraag = de vraag zelf
// plaatje = waar het plaatje staat
// antwoorden = array met de 4 antwoorden
// goedAntwoord = welk antwoord goed is (0 is de eerste, 3 is de laatste)
// uitleg = tekst die je ziet na je antwoord
// animatie = wat de bal doet: "door", "stopt", "afketsen" of "kooi"
//            of "geen": dan zie je bij de uitleg gewoon het plaatje
// dikte = hoe dik het pantser (de lijn) is (alleen nodig met een animatie)
// snelheid = hoe snel de bal gaat (alleen nodig met een animatie)
let vragen = [
  {
    vraag: "Dit is de Britse Mark I uit 1916, de eerste tank die ooit in een oorlog vocht. Zijn pantser was maar 6 tot 12mm dik. Waar beschermde dat tegen?",
    plaatje: "plaatjes/mark1.jpg",
    antwoorden: ["Tegen kanonnen", "Tegen kogels van geweren en machinegeweren", "Tegen bommen uit vliegtuigen", "Nergens tegen, het was voor de show"],
    goedAntwoord: 1,
    uitleg: "Gewone geweerkogels kwamen niet door het staal heen. Tegen een kanon had de Mark I bijna geen kans.",
    animatie: "stopt",
    dikte: 3,
    snelheid: 3
  },
  {
    vraag: "Dit is de Russische Tsaar Tank uit 1915. Hij had voorwielen van 9 meter hoog! Wat gebeurde er bij de eerste test?",
    plaatje: "plaatjes/tsartank.jpg",
    antwoorden: ["Hij reed 100 km per uur", "Hij rolde een berg af", "Het kleine achterwiel zakte vast in de modder", "Hij vloog de lucht in"],
    goedAntwoord: 2,
    uitleg: "Het kleine wiel achteraan zakte meteen vast in de zachte grond. Ze kregen hem er niet meer uit, dus bleef hij jaren in het bos staan tot hij gesloopt werd.",
    animatie: "geen"
  },
  {
    vraag: "Dit is de Franse Renault FT uit 1917. Hij was klein, maar had iets wat bijna alle tanks daarna ook kregen. Wat?",
    plaatje: "plaatjes/renaultft.jpg",
    antwoorden: ["Een toren die helemaal rond kan draaien", "Een raket op het dak", "Vleugels", "Een zwembad"],
    goedAntwoord: 0,
    uitleg: "De Renault FT was de eerste tank met een toren die helemaal rond kon draaien. Zo kon hij alle kanten op schieten zonder de hele tank te draaien. Er zaten maar 2 mensen in.",
    animatie: "geen"
  },
  {
    vraag: "Dit is de Franse Char 2C uit 1921, een van de grootste tanks ooit. Hoeveel man bemanning zat erin?",
    plaatje: "plaatjes/char2c.jpg",
    antwoorden: ["2", "4", "12", "50"],
    goedAntwoord: 2,
    uitleg: "12 man! Hij was 10 meter lang en woog 69 ton. Er werden er maar 10 gemaakt en ze hebben nooit echt gevochten.",
    animatie: "geen"
  },
  {
    vraag: "Dit is de Sovjet T-35. Hij was enorm lang en zat vol met torens. Hoeveel torens had hij?",
    plaatje: "plaatjes/t35.jpg",
    antwoorden: ["1", "2", "5", "12"],
    goedAntwoord: 2,
    uitleg: "5 torens en 11 man bemanning! Maar zijn pantser was dun en hij ging steeds kapot. De meeste T-35's zijn in 1941 achtergelaten omdat ze niet meer reden.",
    animatie: "geen"
  },
  {
    vraag: "Nieuw-Zeeland had in 1941 geen tanks, dus bouwden ze zelf deze: de Bob Semple tank. Waar was hij op gebouwd?",
    plaatje: "plaatjes/bobsemple.jpg",
    antwoorden: ["Een vrachtwagen", "Een tractor (bulldozer)", "Een trein", "Een boot"],
    goedAntwoord: 1,
    uitleg: "Het was een Caterpillar tractor met staalplaten eromheen en overal machinegeweren. Hij was traag, wiebelde heel erg en er werden er maar 3 gemaakt. Gevochten heeft hij nooit.",
    animatie: "geen"
  },
  {
    vraag: "De Britse Matilda II had in 1940 heel dik pantser: 78mm. Wat gebeurde er als Italiaanse tanks en kanonnen op hem schoten?",
    plaatje: "plaatjes/matilda.jpg",
    antwoorden: ["De granaten kwamen er bijna nooit door", "Hij ontplofte meteen", "De granaten gingen er dwars doorheen", "Hij reed snel weg"],
    goedAntwoord: 0,
    uitleg: "In Noord-Afrika kregen de Italianen hem bijna niet kapot. Hij kreeg de bijnaam 'Koningin van het slagveld'. Wel was hij heel langzaam.",
    animatie: "stopt",
    dikte: 10,
    snelheid: 3
  },
  {
    vraag: "Dit is de Sovjet KV-2, met een gigantische toren en een 152mm kanon. Wat was een groot probleem van die toren?",
    plaatje: "plaatjes/kv2.jpg",
    antwoorden: ["Hij was van karton", "Hij was zo zwaar dat hij op een helling bijna niet kon draaien", "Hij paste niet door de fabrieksdeur", "Hij kon alleen naar achteren schieten"],
    goedAntwoord: 1,
    uitleg: "De toren woog zo veel dat hij op een schuine helling bijna niet rond kon. Maar zijn pantser was dik, en als zijn enorme granaat iets raakte, bleef er niet veel van over.",
    animatie: "geen"
  },
  {
    vraag: "Dit is een Sovjet T-34. Het pantser aan de voorkant staat heel schuin. Wat gebeurt er vaak als een granaat daarop komt?",
    plaatje: "plaatjes/t34.jpg",
    antwoorden: ["Hij gaat er sneller doorheen", "Hij blijft in het pantser steken", "Hij ontploft twee keer", "Hij ketst af"],
    goedAntwoord: 3,
    uitleg: "Op een schuine plaat glijdt de granaat weg en ketst hij af. En als hij er wel in gaat, moet hij schuin door meer staal heen.",
    animatie: "afketsen",
    dikte: 6,
    snelheid: 4
  },
  {
    vraag: "De Finnen pakten een buitgemaakte Sovjet tank en zetten er een oud Brits kanon op: de BT-42. Hoe goed werkte dat?",
    plaatje: "plaatjes/bt42.jpg",
    antwoorden: ["Super, het was de beste tank van de oorlog", "Slecht: de granaten waren te langzaam en kwamen vaak niet door het pantser", "Hij kon alleen achteruit rijden", "Het kanon was van hout"],
    goedAntwoord: 1,
    uitleg: "Het kanon was eigenlijk gemaakt om met een boog over dingen heen te schieten, niet tegen tanks. De granaten waren te langzaam. Er zijn er maar 18 gemaakt.",
    animatie: "stopt",
    dikte: 8,
    snelheid: 1.5
  },
  {
    vraag: "De Sovjets bouwden in 1942 de Antonov A-40: een tank met vleugels eraan. Wat was het plan?",
    plaatje: "plaatjes/a40.jpg",
    antwoorden: ["Onder water rijden", "Als zweefvliegtuig naar het slagveld vliegen", "Vijanden laten schrikken", "Sneller rijden door de wind"],
    goedAntwoord: 1,
    uitleg: "Een vliegtuig trok hem de lucht in en dan moest hij zweven en landen. Hij was zo zwaar dat ze er bijna alles uit moesten halen. Hij heeft maar 1 keer gevlogen.",
    animatie: "geen"
  },
  {
    vraag: "Dit kleine ding is een Duitse Goliath. Er zat niemand in. Hoe werkte hij?",
    plaatje: "plaatjes/goliath.jpg",
    antwoorden: ["Hij reed vanzelf naar huis", "Je bestuurde hem met een kabel en hij zat vol met explosieven", "Een hond bestuurde hem", "Hij werd gegooid als een bal"],
    goedAntwoord: 1,
    uitleg: "Hij was een rijdende bom die je met een lange kabel bestuurde. Maar hij was langzaam, zijn pantser was heel dun en als je de kabel kapot schoot deed hij niks meer.",
    animatie: "geen"
  },
  {
    vraag: "Deze Amerikaanse M3 Lee had 2 kanonnen: een kleine in de toren en een grote in de zijkant. Waarom zat die grote niet in de toren?",
    plaatje: "plaatjes/m3lee.jpg",
    antwoorden: ["Er was nog geen toren gemaakt waar hij in paste", "Dat zag er cooler uit", "Zodat hij naar achteren kon schieten", "De toren was al vol met eten"],
    goedAntwoord: 0,
    uitleg: "De Amerikanen hadden haast en nog geen toren voor het grote kanon. Daarom kwam het in de zijkant en kon het bijna alleen naar voren schieten. En de tank was heel hoog, dus makkelijk te raken.",
    animatie: "geen"
  },
  {
    vraag: "Waarom probeerden soldaten een tank, zoals deze Sherman, liever in de zijkant te raken dan aan de voorkant?",
    plaatje: "plaatjes/sherman.jpg",
    antwoorden: ["Daar zit de bemanning niet", "Daar is het pantser dunner", "De zijkant is van hout", "Dat maakt geen verschil"],
    goedAntwoord: 1,
    uitleg: "Het dikste pantser zit voorop, want daar wordt een tank het meest op beschoten. De zijkant is dunner, anders wordt de tank veel te zwaar.",
    animatie: "door",
    dikte: 3,
    snelheid: 4
  },
  {
    vraag: "De Britten zetten een heel lang en sterk kanon op een Sherman: de Firefly. Duitsers probeerden hem daarom altijd als eerste te raken. Wat deden de Britten daartegen?",
    plaatje: "plaatjes/firefly.jpg",
    antwoorden: ["Ze bouwden er een nep-boom omheen", "Ze schilderden de loop zo dat hij korter leek", "Ze reden alleen 's nachts", "Ze zetten er een witte vlag op"],
    goedAntwoord: 1,
    uitleg: "Het voorste stuk van de loop werd zo geverfd dat het van ver bijna onzichtbaar was. Dan leek de Firefly op een gewone Sherman met een kort kanon.",
    animatie: "geen"
  },
  {
    vraag: "Dit is een Duitse Tiger I. Zijn pantser aan de voorkant is 100mm dik. Wat gebeurde er meestal als een Amerikaanse Sherman hem van voren raakte?",
    plaatje: "plaatjes/tiger.jpg",
    antwoorden: ["De granaat ging er makkelijk door", "De granaat kwam er niet door", "De Tiger viel om", "De granaat vloog terug naar de Sherman"],
    goedAntwoord: 1,
    uitleg: "Het kanon van de Sherman was niet sterk genoeg voor 100mm staal. Shermans probeerden de Tiger daarom van opzij of van achteren te raken.",
    animatie: "stopt",
    dikte: 12,
    snelheid: 4
  },
  {
    vraag: "De Duitse Panther had voorop 80mm pantser, maar de plaat stond heel schuin. Hoe dik is dat ongeveer voor een granaat die recht van voren komt?",
    plaatje: "plaatjes/panther.jpg",
    antwoorden: ["40mm", "80mm", "Ongeveer 140mm", "1 meter"],
    goedAntwoord: 2,
    uitleg: "Omdat de plaat zo schuin staat, moet een granaat er schuin doorheen. Dat is net zoveel staal als ongeveer 140mm recht pantser. En vaak ketste de granaat gewoon af.",
    animatie: "afketsen",
    dikte: 6,
    snelheid: 4
  },
  {
    vraag: "De Duitse Tiger II (Koningstijger) had super dik pantser en een enorm kanon. Wat was zijn grootste probleem?",
    plaatje: "plaatjes/tiger2.jpg",
    antwoorden: ["Hij was te klein", "Hij ging vaak kapot en verbruikte heel veel brandstof", "Hij kon niet schieten", "Hij was roze"],
    goedAntwoord: 1,
    uitleg: "De motor was eigenlijk te zwak voor 68 ton. Veel Tiger II's moesten worden achtergelaten omdat ze kapot waren of geen brandstof meer hadden.",
    animatie: "geen"
  },
  {
    vraag: "De Duitse Elefant had in 1943 bij de slag om Koersk een groot probleem. Wat?",
    plaatje: "plaatjes/elefant.jpg",
    antwoorden: ["Hij kon niet rijden in de sneeuw", "Hij had geen machinegeweer, dus soldaten konden er gewoon op klimmen", "Zijn kanon was te klein", "Hij was te snel"],
    goedAntwoord: 1,
    uitleg: "Met zijn grote kanon kon hij tanks van ver kapot schieten, maar tegen soldaten van dichtbij kon hij niks doen. Later kreeg hij er alsnog een machinegeweer bij.",
    animatie: "geen"
  },
  {
    vraag: "Dit is de Duitse Maus, de zwaarste tank die ooit gebouwd is. Hoeveel woog hij ongeveer?",
    plaatje: "plaatjes/maus.jpg",
    antwoorden: ["18 ton", "60 ton", "188 ton", "1000 ton"],
    goedAntwoord: 2,
    uitleg: "188 ton, zo zwaar als ongeveer 130 auto's! Bruggen konden hem niet houden, dus het plan was om onder water door rivieren te rijden. Er zijn er maar 2 gemaakt.",
    animatie: "geen"
  },
  {
    vraag: "Dit rare ronde ding heet de Kugelpanzer (bal-tank). Er bestaat er nog maar 1, in een museum in Rusland. Wat weten we over waar hij voor was?",
    plaatje: "plaatjes/kugelpanzer.jpg",
    antwoorden: ["Hij was om voetbal mee te spelen", "Hij was voor de maan", "Bijna niks, het is nog steeds een raadsel", "Hij was een duikboot"],
    goedAntwoord: 2,
    uitleg: "Hij is na de oorlog gevonden en niemand weet precies wat hij moest doen. Waarschijnlijk was hij om dingen te verkennen. Zijn pantser was maar 5mm dik.",
    animatie: "geen"
  },
  {
    vraag: "De Sovjet T-54/T-55 is de meest gebouwde tank ooit. Hoeveel zijn er ongeveer gemaakt?",
    plaatje: "plaatjes/t55.jpg",
    antwoorden: ["Ongeveer 1.000", "Ongeveer 10.000", "Ongeveer 100.000", "Ongeveer 1 miljoen"],
    goedAntwoord: 2,
    uitleg: "Tussen de 86.000 en 100.000! Ze werden in heel veel landen gebruikt en sommige rijden nu nog steeds rond.",
    animatie: "geen"
  },
  {
    vraag: "Deze Zweedse Stridsvagn 103 (S-tank) heeft geen toren. Hoe richt hij zijn kanon?",
    plaatje: "plaatjes/stank.jpg",
    antwoorden: ["Hij kan niet richten", "Hij draait de hele tank en kantelt hem omhoog of omlaag", "Iemand duwt de loop met de hand", "Met een afstandsbediening"],
    goedAntwoord: 1,
    uitleg: "Het kanon zit vast in de tank. Hij draait met zijn rupsbanden en kantelt zichzelf om te richten. Zonder toren is hij heel laag en dus moeilijk te zien en te raken.",
    animatie: "geen"
  },
  {
    vraag: "Als een T-72 zwaar geraakt wordt, vliegt de toren er soms helemaal af. Hoe komt dat?",
    plaatje: "plaatjes/t72.jpg",
    antwoorden: ["De toren zit er maar los op", "De munitie ligt in een ring onder de toren en ontploft", "De bemanning drukt op de verkeerde knop", "Door de wind"],
    goedAntwoord: 1,
    uitleg: "De automatische lader heeft alle granaten in een ring onder de toren. Gaat een granaat door het pantser en raakt hij die munitie, dan ontploft alles en wordt de toren weggeblazen.",
    animatie: "door",
    dikte: 6,
    snelheid: 6
  },
  {
    vraag: "Bij de Israëlische Merkava zit de motor voorin in plaats van achterin. Waarom?",
    plaatje: "plaatjes/merkava.jpg",
    antwoorden: ["Dan rijdt hij sneller", "De motor is extra bescherming voor de bemanning", "Dan is het warmer voor de bemanning", "Er was achterin geen plek"],
    goedAntwoord: 1,
    uitleg: "Een granaat die van voren komt moet eerst door het pantser en dan nog door de motor. De bemanning zit erachter en is veiliger. Achterin zit zelfs een deur waar soldaten in kunnen.",
    animatie: "stopt",
    dikte: 12,
    snelheid: 4
  },
  {
    vraag: "Op deze Russische T-90 zitten overal blokjes op het pantser. Wat zijn dat?",
    plaatje: "plaatjes/t90.jpg",
    antwoorden: ["Opbergkastjes voor eten", "Explosief pantser: het ontploft naar buiten als het geraakt wordt", "Zonnepanelen", "Versiering"],
    goedAntwoord: 1,
    uitleg: "Dat heet reactief pantser (ERA). Als een granaat zo'n blok raakt, ontploft het naar buiten en maakt het de granaat kapot voordat hij bij het echte pantser is.",
    animatie: "stopt",
    dikte: 10,
    snelheid: 4
  },
  {
    vraag: "In elke Britse tank, zoals deze Challenger 2, zit iets wat andere tanks bijna nooit hebben. Wat?",
    plaatje: "plaatjes/challenger2.jpg",
    antwoorden: ["Een televisie", "Een waterkoker om thee te zetten", "Een wc", "Een koelkast voor ijs"],
    goedAntwoord: 1,
    uitleg: "Sinds de Centurion uit 1945 heeft elke Britse tank een 'boiling vessel'. Daarmee zet je thee en warm je eten op zonder dat je de tank uit hoeft.",
    animatie: "geen"
  },
  {
    vraag: "Dit is een Duitse Leopard 2 die schiet. Hoe snel vliegt zijn granaat ongeveer?",
    plaatje: "plaatjes/leopard2.jpg",
    antwoorden: ["Ongeveer 100 km per uur", "Ongeveer 340 meter per seconde", "Ongeveer 1 meter per seconde", "Ongeveer 1700 meter per seconde"],
    goedAntwoord: 3,
    uitleg: "Ongeveer 1700 meter per seconde: meer dan 5 keer zo snel als geluid! Door die enorme snelheid gaat hij door heel dik pantser.",
    animatie: "door",
    dikte: 10,
    snelheid: 12
  },
  {
    vraag: "Een moderne tank zoals deze M1 Abrams schiet een lange, dunne pijl van heel zwaar metaal. Waarom is die pijl zo dun?",
    plaatje: "plaatjes/abrams.jpg",
    antwoorden: ["Zodat hij goedkoper is", "Zodat hij beter in de loop past", "Zodat alle kracht op een klein puntje komt", "Zodat de vijand hem niet ziet"],
    goedAntwoord: 2,
    uitleg: "Denk aan een punaise: met een scherpe punt druk je hem zo in hout. Zo werkt de pijl ook: alle kracht op een klein puntje.",
    animatie: "door",
    dikte: 10,
    snelheid: 10
  },
  {
    vraag: "Om dit voertuig zit een soort kooi van stalen staven, een stukje van het echte pantser af. Waar is die voor?",
    plaatje: "plaatjes/stryker.jpg",
    antwoorden: ["Om spullen aan op te hangen", "Tegen kogels van geweren", "Om de motor te koelen", "Zodat een raket (RPG) de kooi raakt in plaats van het voertuig"],
    goedAntwoord: 3,
    uitleg: "Een RPG raket raakt eerst de staven. Daardoor gaat hij kapot of ontploft hij te vroeg. Het echte pantser erachter blijft heel.",
    animatie: "kooi",
    dikte: 6,
    snelheid: 4
  }
];

// vragen voor de hard mode, van moeilijk naar heel erg moeilijk
let hardVragen = [
  {
    vraag: "Dit is Little Willie uit 1915, het allereerste tank-prototype. Waarom heten tanks eigenlijk 'tank'?",
    plaatje: "plaatjes/littlewillie.jpg",
    antwoorden: ["Het is een afkorting", "Om het geheim te houden: ze zeiden dat het watertanks waren", "Naar de uitvinder, meneer Tank", "Omdat ze vol benzine zitten"],
    goedAntwoord: 1,
    uitleg: "De Britten deden alsof ze watertanks aan het bouwen waren, zodat spionnen niet wisten dat het een gevechtsvoertuig was. De naam 'tank' bleef daarna gewoon hangen.",
    animatie: "geen"
  },
  {
    vraag: "Op D-Day in 1944 reden deze Shermans vanaf zee naar het strand. Wat was dat opgevouwen doek rond de tank?",
    plaatje: "plaatjes/shermandd.jpg",
    antwoorden: ["Camouflage", "Een scherm waardoor de tank kon drijven", "Een tent om in te slapen", "Bescherming tegen zand"],
    goedAntwoord: 1,
    uitleg: "Dit is een Sherman DD (Duplex Drive). Het doek werd omhoog gezet zodat de tank als een boot dreef, en 2 schroeven duwden hem vooruit. Bij Omaha Beach zonken er veel door de hoge golven.",
    animatie: "geen"
  },
  {
    vraag: "Dit is een Duitse A7V uit 1918, met 18 man bemanning erin. Hoeveel A7V's hebben de Duitsers in totaal gebouwd?",
    plaatje: "plaatjes/a7v.jpg",
    antwoorden: ["5", "20", "200", "2000"],
    goedAntwoord: 1,
    uitleg: "Maar 20! Op 24 april 1918 vocht een A7V bij Villers-Bretonneux tegen een Britse Mark IV: het allereerste gevecht van tank tegen tank.",
    animatie: "geen"
  },
  {
    vraag: "Wat trok de Britse Churchill Crocodile achter zich aan?",
    plaatje: "plaatjes/crocodile.jpg",
    antwoorden: ["Een kanon", "Een aanhanger met brandstof voor zijn vlammenwerper", "Een tweede tank", "Een boot"],
    goedAntwoord: 1,
    uitleg: "De Crocodile was een vlammenwerper-tank. In de aanhanger zat ongeveer 1800 liter brandstof, en hij kon tot ongeveer 110 meter ver vuur spuiten.",
    animatie: "geen"
  },
  {
    vraag: "Duitse Panzer IV's kregen vanaf 1943 dunne platen aan de zijkant: Schürzen (schorten). Waar waren die vooral voor bedoeld?",
    plaatje: "plaatjes/schurzen.jpg",
    antwoorden: ["Tegen modder", "Tegen kogels van Sovjet antitankgeweren", "Om er reclame op te zetten", "Om de tank zwaarder te maken"],
    goedAntwoord: 1,
    uitleg: "De dunne platen vingen de kogels van Sovjet antitankgeweren op of lieten ze kantelen, zodat ze niet meer door het dunne pantser van de zijkant kwamen.",
    animatie: "kooi",
    dikte: 4,
    snelheid: 5
  },
  {
    vraag: "De Sturmtiger schoot een raketgranaat van 38cm die bijna 400 kilo woog. Hoe kreeg de bemanning die in de tank?",
    plaatje: "plaatjes/sturmtiger.jpg",
    antwoorden: ["Met z'n vieren tillen", "Met een kraantje dat op de tank zat", "Hij rolde er vanzelf in", "Met een helikopter"],
    goedAntwoord: 1,
    uitleg: "Achter op de tank zat een kleine kraan om de granaten op te tillen. Er pasten er maar 14 in. Een gebouw of bunker hield zo'n granaat bijna niet tegen.",
    animatie: "door",
    dikte: 12,
    snelheid: 2
  },
  {
    vraag: "De Japanse Type 2 Ka-Mi kon zwemmen. Hoe deed hij dat?",
    plaatje: "plaatjes/kami.jpg",
    antwoorden: ["Met grote drijvers voor en achter die er op het land af konden", "Met opblaasbare banden", "Hij zwom niet, hij reed over de bodem", "Met vleugels als een vis"],
    goedAntwoord: 0,
    uitleg: "Aan de voorkant en achterkant zaten holle drijvers. Op het strand werden ze losgemaakt en dan reed hij verder als een gewone tank.",
    animatie: "geen"
  },
  {
    vraag: "Bij een APFSDS pijl valt er meteen na het schieten iets af (zie plaatje). Dat heet de 'sabot'. Wat betekent dat Franse woord?",
    plaatje: "plaatjes/sabot.jpg",
    antwoorden: ["Pijl", "Klomp", "Kogel", "Vleugel"],
    goedAntwoord: 1,
    uitleg: "Sabot betekent klomp. De 'klomp' houdt de dunne pijl op zijn plek in de dikke loop en valt eraf zodra hij uit de loop is. Dan vliegt alleen de pijl verder.",
    animatie: "door",
    dikte: 10,
    snelheid: 12
  },
  {
    vraag: "Een HEAT granaat maakt een superdunne straal van metaal die door pantser gaat. Hoe gaat die straal door het pantser?",
    plaatje: "plaatjes/heat.jpg",
    antwoorden: ["Hij smelt erdoorheen omdat hij zo heet is", "Door enorme druk: het staal wordt opzij geduwd zonder te smelten", "Hij boort een gat", "Met zuur"],
    goedAntwoord: 1,
    uitleg: "Veel mensen denken dat hij smelt, maar HEAT betekent High Explosive Anti-Tank. De straal gaat zo snel dat het staal zich als een vloeistof gedraagt en opzij geduwd wordt.",
    animatie: "door",
    dikte: 8,
    snelheid: 8
  },
  {
    vraag: "Deze Britse Vickers Independent uit 1926 had 5 torens. Er is er maar 1 gebouwd. Welke tank is waarschijnlijk op hem gebaseerd?",
    plaatje: "plaatjes/independent.jpg",
    antwoorden: ["Tiger I", "Sherman", "T-35", "Maus"],
    goedAntwoord: 2,
    uitleg: "De Sovjets hebben goed gekeken naar de Independent toen ze de T-35 maakten, die ook 5 torens had. De Britten zelf hebben hem nooit in productie genomen.",
    animatie: "geen"
  },
  {
    vraag: "De Britse TOG II uit 1941 leek op een tank uit de Eerste Wereldoorlog. Waar staat TOG voor?",
    plaatje: "plaatjes/tog2.jpg",
    antwoorden: ["Tank Of Giants", "The Old Gang", "Top Offensive Gun", "Tracked Over Ground"],
    goedAntwoord: 1,
    uitleg: "Hij werd ontworpen door dezelfde mannen die in 1916 de eerste tanks hadden gemaakt: 'The Old Gang'. Ze dachten dat het weer een oorlog met loopgraven zou worden. Er is er maar 1 gebouwd.",
    animatie: "geen"
  },
  {
    vraag: "De Sovjet Object 279 uit 1959 was gemaakt om een atoomoorlog te overleven. Hoeveel rupsbanden had hij?",
    plaatje: "plaatjes/object279.jpg",
    antwoorden: ["2", "3", "4", "6"],
    goedAntwoord: 2,
    uitleg: "4 rupsbanden zodat hij niet vast zou zakken in moeras of puin, en een vorm als een vliegende schotel zodat de drukgolf van een atoombom hem niet omver zou blazen. Er is er maar 1 gemaakt.",
    animatie: "geen"
  },
  {
    vraag: "De Amerikaanse T28 Super Heavy Tank had dubbele rupsbanden aan elke kant. Wat konden ze met de buitenste rupsbanden doen?",
    plaatje: "plaatjes/t28.jpg",
    antwoorden: ["Er extra granaten in stoppen", "Eraf halen en als aanhanger achter de tank aan slepen", "Ze als brug gebruiken", "Er een tweede tank van maken"],
    goedAntwoord: 1,
    uitleg: "Met alle rupsbanden was hij te breed voor wegen en bruggen. Dan haalden ze de buitenste eraf, maakten die aan elkaar vast en sleepten ze achter de tank aan. Er bestaat er nog maar 1.",
    animatie: "geen"
  },
  {
    vraag: "In mei 1940 schoot de Franse Char B1 bis 'Eure' bij Stonne 13 Duitse tanks kapot. Hoe vaak werd hij ongeveer geraakt zonder dat er iets doorheen ging?",
    plaatje: "plaatjes/charb1.jpg",
    antwoorden: ["3 keer", "20 keer", "Ongeveer 140 keer", "1000 keer"],
    goedAntwoord: 2,
    uitleg: "Ongeveer 140 keer! De kleine Duitse granaten kwamen niet door zijn 60mm pantser. Kapitein Pierre Billotte en zijn bemanning werden er beroemd door.",
    animatie: "stopt",
    dikte: 8,
    snelheid: 3
  },
  {
    vraag: "Er is nog maar 1 Tiger I in de wereld die echt kan rijden. Hij staat in het Tank Museum in Bovington in Engeland. Welk nummer heeft hij?",
    plaatje: "plaatjes/tiger131.jpg",
    antwoorden: ["007", "131", "217", "501"],
    goedAntwoord: 1,
    uitleg: "Tiger 131 werd in 1943 in Tunesië buitgemaakt door de Britten, nadat een granaat zijn toren had vastgeslagen. Het is de enige Tiger I ter wereld die nog rijdt.",
    animatie: "geen"
  }
];

// welk scherm je ziet: "start", "vraag", "uitleg", "einde" of "hardEinde"
let scherm = "start";

// de lijst met vragen die je nu doet: eerst vragen, daarna eventueel hardVragen
let lijst = vragen;

// true als je in de hard mode zit
let hardMode = false;

// bij welke vraag je bent (0 is de eerste)
let huidigeVraag = 0;

// hoeveel je goed hebt
let score = 0;

// hoeveel je goed hebt in de hard mode
let extraPunten = 0;

// op welk antwoord je hebt geklikt
let gekozenAntwoord = 0;

// plek van de bal in de animatie
let balX = 0;
let balY = 0;

// telt de frames van de animatie zodat hij opnieuw kan beginnen
let animatieTeller = 0;

// vak in het midden voor het plaatje en de animatie
let vakX = 130;
let vakY = 130;
let vakBreedte = 640;
let vakHoogte = 300;

// maat van de antwoord knoppen
let knopBreedte = 410;
let knopHoogte = 65;

// grote knop onderaan (start, volgende, opnieuw)
let groteKnopX = 350;
let groteKnopY = 620;
let groteKnopBreedte = 200;
let groteKnopHoogte = 50;

// op het eind scherm staan 2 knoppen naast elkaar
let opnieuwKnopX = 220;
let hardModeKnopX = 480;

// plaatjes laden voordat de quiz start
function preload() {
  // bij elke vraag het plaatje laden en in het object zelf bewaren als "img"
  for (let i = 0; i < vragen.length; i++) {
    vragen[i].img = loadImage(vragen[i].plaatje);
  }
  for (let i = 0; i < hardVragen.length; i++) {
    hardVragen[i].img = loadImage(hardVragen[i].plaatje);
  }
}

function setup() {
  createCanvas(900, 700);
}

function draw() {
  background(255);

  // goede scherm laten zien
  if (scherm == "start") {
    tekenStartScherm();
  } else if (scherm == "vraag") {
    tekenVraagScherm();
  } else if (scherm == "uitleg") {
    tekenUitlegScherm();
  } else if (scherm == "einde") {
    tekenEindScherm();
  } else if (scherm == "hardEinde") {
    tekenHardEindScherm();
  }
}

function tekenStartScherm() {
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);

  textSize(56);
  text("Tank Quiz", width / 2, 180);

  textSize(20);
  text("Hoe goed ken jij tanks, van de gewone tot de hele rare?", width / 2, 260);
  text(vragen.length + " vragen, klik op het antwoord dat jij goed denkt", width / 2, 295);
  text("Bij vragen over pantser en munitie zie je daarna een animatie:", width / 2, 360);
  text("de lijn is het pantser, de bal is de kogel", width / 2, 390);

  // voorbeeldje van een bal en een lijn
  stroke(0);
  strokeWeight(6);
  line(500, 440, 500, 540);
  noStroke();
  fill(0);
  circle(400, 490, 20);

  tekenGroteKnop("Start", groteKnopX);
}

function tekenVraagScherm() {
  let vraag = lijst[huidigeVraag];

  tekenBovenkant();
  tekenVraag(vraag.vraag);
  tekenPlaatje(vraag.img);

  // alle 4 antwoorden tekenen met een for loop
  for (let i = 0; i < 4; i++) {
    tekenAntwoord(i);
  }
}

function tekenUitlegScherm() {
  let vraag = lijst[huidigeVraag];

  tekenBovenkant();
  tekenVraag(vraag.vraag);

  // alleen een animatie bij vragen over pantser of munitie, anders het plaatje
  if (vraag.animatie == "geen") {
    tekenPlaatje(vraag.img);
  } else {
    tekenAnimatie(vraag);
  }

  fill(0);
  noStroke();
  textAlign(LEFT, TOP);

  // laten zien of het goed of fout was
  textSize(30);
  if (gekozenAntwoord == vraag.goedAntwoord) {
    text("Goed!", 30, 450);
  } else {
    text("Fout!", 30, 450);
  }

  // goede antwoord en uitleg laten zien
  textSize(18);
  text("Het goede antwoord: " + vraag.antwoorden[vraag.goedAntwoord], 140, 457);
  // met een breedte en hoogte erbij gaat lange tekst vanzelf naar de volgende regel
  text(vraag.uitleg, 30, 500, 840, 100);

  // bij de laatste vraag staat er iets anders op de knop
  if (huidigeVraag == lijst.length - 1) {
    tekenGroteKnop("Bekijk score", groteKnopX);
  } else {
    tekenGroteKnop("Volgende", groteKnopX);
  }
}

function tekenEindScherm() {
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);

  textSize(50);
  text("Klaar!", width / 2, 220);

  textSize(34);
  text("Je score: " + score + " van de " + vragen.length, width / 2, 300);

  // ander bericht bij een andere score
  textSize(20);
  if (score == vragen.length) {
    text("Alles goed! Jij bent een echte tank expert.", width / 2, 370);
  } else if (score >= vragen.length / 2) {
    text("Goed gedaan! Je weet al best veel.", width / 2, 370);
  } else {
    text("Dat kan beter, probeer het nog een keer!", width / 2, 370);
  }

  // uitleg over de hard mode
  text("Wil je extra punten? Probeer de hard mode:", width / 2, 480);
  text(hardVragen.length + " vragen die steeds moeilijker worden. Bijna niemand weet ze!", width / 2, 515);

  tekenGroteKnop("Opnieuw", opnieuwKnopX);
  tekenGroteKnop("Hard mode", hardModeKnopX);
}

function tekenHardEindScherm() {
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);

  textSize(50);
  text("Hard mode klaar!", width / 2, 200);

  textSize(30);
  text("Gewone vragen: " + score + " van de " + vragen.length, width / 2, 290);
  text("Extra punten: " + extraPunten + " van de " + hardVragen.length, width / 2, 340);

  // ander bericht bij een andere score
  textSize(20);
  if (extraPunten == hardVragen.length) {
    text("Alles goed in de hard mode?! Jij bent een tank legende.", width / 2, 420);
  } else if (extraPunten >= hardVragen.length / 2) {
    text("Wauw, je weet echt heel veel over tanks!", width / 2, 420);
  } else {
    text("Geen schande, deze vragen weet bijna niemand.", width / 2, 420);
  }

  tekenGroteKnop("Opnieuw", groteKnopX);
}

// vraagnummer en score bovenaan
function tekenBovenkant() {
  fill(0);
  noStroke();
  textSize(16);

  textAlign(LEFT, CENTER);
  if (hardMode) {
    text("HARD MODE - vraag " + (huidigeVraag + 1) + " van " + lijst.length, 30, 25);
  } else {
    text("Vraag " + (huidigeVraag + 1) + " van " + lijst.length, 30, 25);
  }

  textAlign(RIGHT, CENTER);
  if (hardMode) {
    text("Score: " + score + "   Extra punten: " + extraPunten, width - 30, 25);
  } else {
    text("Score: " + score, width - 30, 25);
  }
}

// tekent de vraag onder de bovenkant
function tekenVraag(vraagTekst) {
  fill(0);
  noStroke();
  textAlign(LEFT, TOP);
  textSize(20);
  text(vraagTekst, 30, 50, 840, 75);
}

// tekent het plaatje in het midden van het vak
function tekenPlaatje(img) {
  // plaatje wordt even hoog als het vak
  // breedte zo uitrekenen dat het plaatje niet uitgerekt wordt
  let hoogte = vakHoogte;
  let breedte = img.width * vakHoogte / img.height;

  // in het midden van het vak zetten
  let x = vakX + (vakBreedte - breedte) / 2;

  image(img, x, vakY, breedte, hoogte);
}

// x van een antwoord knop: 0 en 2 links, 1 en 3 rechts
function knopX(nummer) {
  if (nummer == 0 || nummer == 2) {
    return 30;
  } else {
    return 460;
  }
}

// y van een antwoord knop: 0 en 1 boven, 2 en 3 onder
function knopY(nummer) {
  if (nummer == 0 || nummer == 1) {
    return 455;
  } else {
    return 535;
  }
}

// true als de muis op antwoord knop "nummer" staat
function muisOpKnop(nummer) {
  let x = knopX(nummer);
  let y = knopY(nummer);
  return mouseX > x && mouseX < x + knopBreedte && mouseY > y && mouseY < y + knopHoogte;
}

// true als de muis op de grote knop staat die bij x begint
function muisOpGroteKnop(x) {
  return mouseX > x && mouseX < x + groteKnopBreedte &&
    mouseY > groteKnopY && mouseY < groteKnopY + groteKnopHoogte;
}

// tekent een antwoord knop (nummer 0 t/m 3)
function tekenAntwoord(nummer) {
  let x = knopX(nummer);
  let y = knopY(nummer);
  let letters = ["A", "B", "C", "D"];

  // grijs als de muis erop staat
  if (muisOpKnop(nummer)) {
    fill(220);
  } else {
    fill(255);
  }
  stroke(0);
  strokeWeight(2);
  rect(x, y, knopBreedte, knopHoogte, 8);

  // letter en antwoord
  fill(0);
  noStroke();
  textSize(16);
  textAlign(LEFT, CENTER);
  text(letters[nummer] + ".  " + lijst[huidigeVraag].antwoorden[nummer], x + 15, y, knopBreedte - 25, knopHoogte);
}

// tekent een grote knop onderaan die bij x begint
function tekenGroteKnop(knopTekst, x) {
  // grijs als de muis erop staat
  if (muisOpGroteKnop(x)) {
    fill(220);
  } else {
    fill(255);
  }
  stroke(0);
  strokeWeight(2);
  rect(x, groteKnopY, groteKnopBreedte, groteKnopHoogte, 8);

  fill(0);
  noStroke();
  textSize(22);
  textAlign(CENTER, CENTER);
  text(knopTekst, x + groteKnopBreedte / 2, groteKnopY + groteKnopHoogte / 2);
}

// bal terug naar het begin zetten
function startAnimatie() {
  balX = vakX + 40;
  balY = vakY + vakHoogte / 2;
  animatieTeller = 0;
}

// bal vliegt van links naar de lijn, wat er dan gebeurt hangt af van de vraag
function tekenAnimatie(vraag) {
  // rand om het vak
  noFill();
  stroke(0);
  strokeWeight(2);
  rect(vakX, vakY, vakBreedte, vakHoogte);

  // na 200 frames opnieuw beginnen
  animatieTeller = animatieTeller + 1;
  if (animatieTeller > 200) {
    startAnimatie();
  }

  // plek van het pantser
  let muurX = vakX + 400;
  let muurBoven = vakY + 50;
  let muurOnder = vakY + 250;

  // lijn zo dik als bij de vraag staat
  stroke(0);
  strokeWeight(vraag.dikte);

  if (vraag.animatie == "door") {
    // bal gaat gewoon door
    balX = balX + vraag.snelheid;

    if (balX < muurX) {
      // bal is er nog niet, hele lijn tekenen
      line(muurX, muurBoven, muurX, muurOnder);
    } else {
      // bal is erdoor, lijn in 2 stukken met een gat ertussen
      line(muurX, muurBoven, muurX, balY - 15);
      line(muurX, balY + 15, muurX, muurOnder);
    }
  } else if (vraag.animatie == "stopt") {
    line(muurX, muurBoven, muurX, muurOnder);

    // bal gaat tot de lijn en blijft daar
    if (balX < muurX - 15) {
      balX = balX + vraag.snelheid;
    }
  } else if (vraag.animatie == "afketsen") {
    // schuine lijn van linksonder naar rechtsboven
    line(muurX - 100, muurOnder, muurX + 100, muurBoven);

    // eerst naar rechts, als hij de lijn raakt gaat hij omhoog
    if (balX < muurX - 15) {
      balX = balX + vraag.snelheid;
    } else {
      balY = balY - vraag.snelheid;
    }
  } else if (vraag.animatie == "kooi") {
    // echte pantser (dik)
    line(muurX, muurBoven, muurX, muurOnder);

    // kooi (dunne lijn) een stuk ervoor
    let kooiX = muurX - 120;
    strokeWeight(2);
    line(kooiX, muurBoven, kooiX, muurOnder);

    // bal blijft in de kooi hangen
    if (balX < kooiX - 12) {
      balX = balX + vraag.snelheid;
    }
  }

  // bal alleen tekenen als hij nog in het vak is
  if (balX < vakX + vakBreedte - 10 && balY > vakY + 10) {
    noStroke();
    fill(0);
    circle(balX, balY, 20);
  }
}

function mousePressed() {
  if (scherm == "start") {
    // quiz starten
    if (muisOpGroteKnop(groteKnopX)) {
      scherm = "vraag";
    }
  } else if (scherm == "vraag") {
    // kijken op welk antwoord is geklikt
    for (let i = 0; i < 4; i++) {
      if (muisOpKnop(i)) {
        gekozenAntwoord = i;

        // goed antwoord = punt erbij, in de hard mode een extra punt
        if (gekozenAntwoord == lijst[huidigeVraag].goedAntwoord) {
          if (hardMode) {
            extraPunten = extraPunten + 1;
          } else {
            score = score + 1;
          }
        }

        // animatie klaarzetten en naar het uitleg scherm
        startAnimatie();
        scherm = "uitleg";
      }
    }
  } else if (scherm == "uitleg") {
    // naar de volgende vraag
    if (muisOpGroteKnop(groteKnopX)) {
      huidigeVraag = huidigeVraag + 1;

      // na de laatste vraag naar het goede eind scherm
      if (huidigeVraag == lijst.length) {
        if (hardMode) {
          scherm = "hardEinde";
        } else {
          scherm = "einde";
        }
      } else {
        scherm = "vraag";
      }
    }
  } else if (scherm == "einde") {
    if (muisOpGroteKnop(opnieuwKnopX)) {
      opnieuwBeginnen();
    }

    // hard mode starten met de moeilijke vragen
    if (muisOpGroteKnop(hardModeKnopX)) {
      hardMode = true;
      lijst = hardVragen;
      huidigeVraag = 0;
      extraPunten = 0;
      scherm = "vraag";
    }
  } else if (scherm == "hardEinde") {
    if (muisOpGroteKnop(groteKnopX)) {
      opnieuwBeginnen();
    }
  }
}

// alles resetten en terug naar het start scherm
function opnieuwBeginnen() {
  hardMode = false;
  lijst = vragen;
  huidigeVraag = 0;
  score = 0;
  extraPunten = 0;
  scherm = "start";
}
