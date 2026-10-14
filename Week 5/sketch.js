//tank quiz
// je krijgt een vraag met een plaatje en 4 antwoorden
// na de gewone vragen kun je nog de hard mode doen voor extra punten

// array met alle vragen, elke vraag is een data-object
// vraag = de vraag zelf
// plaatje = waar het plaatje staat
// antwoorden = array met de 4 antwoorden
// goedAntwoord = welk antwoord goed is (0 is de eerste, 3 is de laatste)
// uitleg = tekst die je ziet na je antwoord
let vragen = [
  {
    vraag:
      "Dit is de Britse Mark I uit 1916, de eerste tank die ooit in een oorlog vocht. Zijn pantser was maar 6 tot 12mm dik. Waar beschermde dat tegen?",
    plaatje: "plaatjes/mark1.jpg",
    antwoorden: [
      "Tegen kanonnen",
      "Tegen kogels van geweren en machinegeweren",
      "Tegen bommen uit vliegtuigen",
      "Nergens tegen, het was voor de show",
    ],
    goedAntwoord: 1,
    uitleg:
      "Gewone geweerkogels kwamen niet door het staal heen. Tegen een kanon had de Mark I bijna geen kans.",
  },
  {
    vraag:
      "Dit is de Russische Tsaar Tank uit 1915. Hij had voorwielen van 9 meter hoog! Wat gebeurde er bij de eerste test?",
    plaatje: "plaatjes/tsartank.jpg",
    antwoorden: [
      "Hij reed 100 km per uur",
      "Hij rolde een berg af",
      "Het kleine achterwiel zakte vast in de modder",
      "Hij vloog de lucht in",
    ],
    goedAntwoord: 2,
    uitleg:
      "Het kleine wiel achteraan zakte meteen vast in de zachte grond. Ze kregen hem er niet meer uit, dus bleef hij jaren in het bos staan tot hij gesloopt werd.",
  },
  {
    vraag:
      "Dit is de Franse Renault FT uit 1917. Hij was klein, maar had iets wat bijna alle tanks daarna ook kregen. Wat?",
    plaatje: "plaatjes/renaultft.jpg",
    antwoorden: [
      "Een toren die helemaal rond kan draaien",
      "Een raket op het dak",
      "Vleugels",
      "Een zwembad",
    ],
    goedAntwoord: 0,
    uitleg:
      "De Renault FT was de eerste tank met een toren die helemaal rond kon draaien. Zo kon hij alle kanten op schieten zonder de hele tank te draaien. Er zaten maar 2 mensen in.",
  },
  {
    vraag:
      "Dit is de Franse Char 2C uit 1921, een van de grootste tanks ooit. Hoeveel man bemanning zat erin?",
    plaatje: "plaatjes/char2c.jpg",
    antwoorden: ["2", "4", "12", "50"],
    goedAntwoord: 2,
    uitleg:
      "12 man! Hij was 10 meter lang en woog 69 ton. Er werden er maar 10 gemaakt en ze hebben nooit echt gevochten.",
  },
  {
    vraag:
      "Dit is de Sovjet T-35. Hij was enorm lang en zat vol met torens. Hoeveel torens had hij?",
    plaatje: "plaatjes/t35.jpg",
    antwoorden: ["1", "2", "5", "12"],
    goedAntwoord: 2,
    uitleg:
      "5 torens en 11 man bemanning! Maar zijn pantser was dun en hij ging steeds kapot. De meeste T-35's zijn in 1941 achtergelaten omdat ze niet meer reden.",
  },
  {
    vraag:
      "Nieuw-Zeeland had in 1941 geen tanks, dus bouwden ze zelf deze: de Bob Semple tank. Waar was hij op gebouwd?",
    plaatje: "plaatjes/bobsemple.jpg",
    antwoorden: [
      "Een vrachtwagen",
      "Een tractor (bulldozer)",
      "Een trein",
      "Een boot",
    ],
    goedAntwoord: 1,
    uitleg:
      "Het was een Caterpillar tractor met staalplaten eromheen en overal machinegeweren. Hij was traag, wiebelde heel erg en er werden er maar 3 gemaakt. Gevochten heeft hij nooit.",
  },
  {
    vraag:
      "De Britse Matilda II had in 1940 heel dik pantser: 78mm. Wat gebeurde er als Italiaanse tanks en kanonnen op hem schoten?",
    plaatje: "plaatjes/matilda.jpg",
    antwoorden: [
      "De granaten kwamen er bijna nooit door",
      "Hij ontplofte meteen",
      "De granaten gingen er dwars doorheen",
      "Hij reed snel weg",
    ],
    goedAntwoord: 0,
    uitleg:
      "In Noord-Afrika kregen de Italianen hem bijna niet kapot. Hij kreeg de bijnaam 'Koningin van het slagveld'. Wel was hij heel langzaam.",
  },
  {
    vraag:
      "Dit is de Sovjet KV-2, met een gigantische toren en een 152mm kanon. Wat was een groot probleem van die toren?",
    plaatje: "plaatjes/kv2.jpg",
    antwoorden: [
      "Hij was van karton",
      "Hij was zo zwaar dat hij op een helling bijna niet kon draaien",
      "Hij paste niet door de fabrieksdeur",
      "Hij kon alleen naar achteren schieten",
    ],
    goedAntwoord: 1,
    uitleg:
      "De toren woog zo veel dat hij op een schuine helling bijna niet rond kon. Maar zijn pantser was dik, en als zijn enorme granaat iets raakte, bleef er niet veel van over.",
  },
  {
    vraag:
      "Dit is een Sovjet T-34. Het pantser aan de voorkant staat heel schuin. Wat gebeurt er vaak als een granaat daarop komt?",
    plaatje: "plaatjes/t34.jpg",
    antwoorden: [
      "Hij gaat er sneller doorheen",
      "Hij blijft in het pantser steken",
      "Hij ontploft twee keer",
      "Hij ketst af",
    ],
    goedAntwoord: 3,
    uitleg:
      "Op een schuine plaat glijdt de granaat weg en ketst hij af. En als hij er wel in gaat, moet hij schuin door meer staal heen.",
  },
  {
    vraag:
      "De Finnen pakten een buitgemaakte Sovjet tank en zetten er een oud Brits kanon op: de BT-42. Hoe goed werkte dat?",
    plaatje: "plaatjes/bt42.jpg",
    antwoorden: [
      "Super, het was de beste tank van de oorlog",
      "Slecht: de granaten waren te langzaam en kwamen vaak niet door het pantser",
      "Hij kon alleen achteruit rijden",
      "Het kanon was van hout",
    ],
    goedAntwoord: 1,
    uitleg:
      "Het kanon was eigenlijk gemaakt om met een boog over dingen heen te schieten, niet tegen tanks. De granaten waren te langzaam. Er zijn er maar 18 gemaakt.",
  },
  {
    vraag:
      "De Sovjets bouwden in 1942 de Antonov A-40: een tank met vleugels eraan. Wat was het plan?",
    plaatje: "plaatjes/a40.jpg",
    antwoorden: [
      "Onder water rijden",
      "Als zweefvliegtuig naar het slagveld vliegen",
      "Vijanden laten schrikken",
      "Sneller rijden door de wind",
    ],
    goedAntwoord: 1,
    uitleg:
      "Een vliegtuig trok hem de lucht in en dan moest hij zweven en landen. Hij was zo zwaar dat ze er bijna alles uit moesten halen. Hij heeft maar 1 keer gevlogen.",
  },
  {
    vraag:
      "Dit kleine ding is een Duitse Goliath. Er zat niemand in. Hoe werkte hij?",
    plaatje: "plaatjes/goliath.jpg",
    antwoorden: [
      "Hij reed vanzelf naar huis",
      "Je bestuurde hem met een kabel en hij zat vol met explosieven",
      "Een hond bestuurde hem",
      "Hij werd gegooid als een bal",
    ],
    goedAntwoord: 1,
    uitleg:
      "Hij was een rijdende bom die je met een lange kabel bestuurde. Maar hij was langzaam, zijn pantser was heel dun en als je de kabel kapot schoot deed hij niks meer.",
  },
  {
    vraag:
      "Deze Amerikaanse M3 Lee had 2 kanonnen: een kleine in de toren en een grote in de zijkant. Waarom zat die grote niet in de toren?",
    plaatje: "plaatjes/m3lee.jpg",
    antwoorden: [
      "Er was nog geen toren gemaakt waar hij in paste",
      "Dat zag er cooler uit",
      "Zodat hij naar achteren kon schieten",
      "De toren was al vol met eten",
    ],
    goedAntwoord: 0,
    uitleg:
      "De Amerikanen hadden haast en nog geen toren voor het grote kanon. Daarom kwam het in de zijkant en kon het bijna alleen naar voren schieten. En de tank was heel hoog, dus makkelijk te raken.",
  },
  {
    vraag:
      "Waarom probeerden soldaten een tank, zoals deze Sherman, liever in de zijkant te raken dan aan de voorkant?",
    plaatje: "plaatjes/sherman.jpg",
    antwoorden: [
      "Daar zit de bemanning niet",
      "Daar is het pantser dunner",
      "De zijkant is van hout",
      "Dat maakt geen verschil",
    ],
    goedAntwoord: 1,
    uitleg:
      "Het dikste pantser zit voorop, want daar wordt een tank het meest op beschoten. De zijkant is dunner, anders wordt de tank veel te zwaar.",
  },
  {
    vraag:
      "De Britten zetten een heel lang en sterk kanon op een Sherman: de Firefly. Duitsers probeerden hem daarom altijd als eerste te raken. Wat deden de Britten daartegen?",
    plaatje: "plaatjes/firefly.jpg",
    antwoorden: [
      "Ze bouwden er een nep-boom omheen",
      "Ze schilderden de loop zo dat hij korter leek",
      "Ze reden alleen 's nachts",
      "Ze zetten er een witte vlag op",
    ],
    goedAntwoord: 1,
    uitleg:
      "Het voorste stuk van de loop werd zo geverfd dat het van ver bijna onzichtbaar was. Dan leek de Firefly op een gewone Sherman met een kort kanon.",
  },
  {
    vraag:
      "Dit is een Duitse Tiger I. Zijn pantser aan de voorkant is 100mm dik. Wat gebeurde er meestal als een Amerikaanse Sherman hem van voren raakte?",
    plaatje: "plaatjes/tiger.jpg",
    antwoorden: [
      "De granaat ging er makkelijk door",
      "De granaat kwam er niet door",
      "De Tiger viel om",
      "De granaat vloog terug naar de Sherman",
    ],
    goedAntwoord: 1,
    uitleg:
      "Het kanon van de Sherman was niet sterk genoeg voor 100mm staal. Shermans probeerden de Tiger daarom van opzij of van achteren te raken.",
  },
  {
    vraag:
      "De Duitse Panther had voorop 80mm pantser, maar de plaat stond heel schuin. Hoe dik is dat ongeveer voor een granaat die recht van voren komt?",
    plaatje: "plaatjes/panther.jpg",
    antwoorden: ["40mm", "80mm", "Ongeveer 140mm", "1 meter"],
    goedAntwoord: 2,
    uitleg:
      "Omdat de plaat zo schuin staat, moet een granaat er schuin doorheen. Dat is net zoveel staal als ongeveer 140mm recht pantser. En vaak ketste de granaat gewoon af.",
  },
  {
    vraag:
      "De Duitse Tiger II (Koningstijger) had super dik pantser en een enorm kanon. Wat was zijn grootste probleem?",
    plaatje: "plaatjes/tiger2.jpg",
    antwoorden: [
      "Hij was te klein",
      "Hij ging vaak kapot en verbruikte heel veel brandstof",
      "Hij kon niet schieten",
      "Hij was roze",
    ],
    goedAntwoord: 1,
    uitleg:
      "De motor was eigenlijk te zwak voor 68 ton. Veel Tiger II's moesten worden achtergelaten omdat ze kapot waren of geen brandstof meer hadden.",
  },
  {
    vraag:
      "De Duitse Elefant had in 1943 bij de slag om Koersk een groot probleem. Wat?",
    plaatje: "plaatjes/elefant.jpg",
    antwoorden: [
      "Hij kon niet rijden in de sneeuw",
      "Hij had geen machinegeweer, dus soldaten konden er gewoon op klimmen",
      "Zijn kanon was te klein",
      "Hij was te snel",
    ],
    goedAntwoord: 1,
    uitleg:
      "Met zijn grote kanon kon hij tanks van ver kapot schieten, maar tegen soldaten van dichtbij kon hij niks doen. Later kreeg hij er alsnog een machinegeweer bij.",
  },
  {
    vraag:
      "Dit is de Duitse Maus, de zwaarste tank die ooit gebouwd is. Hoeveel woog hij ongeveer?",
    plaatje: "plaatjes/maus.jpg",
    antwoorden: ["18 ton", "60 ton", "188 ton", "1000 ton"],
    goedAntwoord: 2,
    uitleg:
      "188 ton, zo zwaar als ongeveer 130 auto's! Bruggen konden hem niet houden, dus het plan was om onder water door rivieren te rijden. Er zijn er maar 2 gemaakt.",
  },
  {
    vraag:
      "Dit rare ronde ding heet de Kugelpanzer (bal-tank). Er bestaat er nog maar 1, in een museum in Rusland. Wat weten we over waar hij voor was?",
    plaatje: "plaatjes/kugelpanzer.jpg",
    antwoorden: [
      "Hij was om voetbal mee te spelen",
      "Hij was voor de maan",
      "Bijna niks, het is nog steeds een raadsel",
      "Hij was een duikboot",
    ],
    goedAntwoord: 2,
    uitleg:
      "Hij is na de oorlog gevonden en niemand weet precies wat hij moest doen. Waarschijnlijk was hij om dingen te verkennen. Zijn pantser was maar 5mm dik.",
  },
  {
    vraag:
      "De Sovjet T-54/T-55 is de meest gebouwde tank ooit. Hoeveel zijn er ongeveer gemaakt?",
    plaatje: "plaatjes/t55.jpg",
    antwoorden: [
      "Ongeveer 1.000",
      "Ongeveer 10.000",
      "Ongeveer 100.000",
      "Ongeveer 1 miljoen",
    ],
    goedAntwoord: 2,
    uitleg:
      "Tussen de 86.000 en 100.000! Ze werden in heel veel landen gebruikt en sommige rijden nu nog steeds rond.",
  },
  {
    vraag:
      "Deze Zweedse Stridsvagn 103 (S-tank) heeft geen toren. Hoe richt hij zijn kanon?",
    plaatje: "plaatjes/stank.jpg",
    antwoorden: [
      "Hij kan niet richten",
      "Hij draait de hele tank en kantelt hem omhoog of omlaag",
      "Iemand duwt de loop met de hand",
      "Met een afstandsbediening",
    ],
    goedAntwoord: 1,
    uitleg:
      "Het kanon zit vast in de tank. Hij draait met zijn rupsbanden en kantelt zichzelf om te richten. Zonder toren is hij heel laag en dus moeilijk te zien en te raken.",
  },
  {
    vraag:
      "Als een T-72 zwaar geraakt wordt, vliegt de toren er soms helemaal af. Hoe komt dat?",
    plaatje: "plaatjes/t72.jpg",
    antwoorden: [
      "De toren zit er maar los op",
      "De munitie ligt in een ring onder de toren en ontploft",
      "De bemanning drukt op de verkeerde knop",
      "Door de wind",
    ],
    goedAntwoord: 1,
    uitleg:
      "De automatische lader heeft alle granaten in een ring onder de toren. Gaat een granaat door het pantser en raakt hij die munitie, dan ontploft alles en wordt de toren weggeblazen.",
  },
  {
    vraag:
      "Bij de Israëlische Merkava zit de motor voorin in plaats van achterin. Waarom?",
    plaatje: "plaatjes/merkava.jpg",
    antwoorden: [
      "Dan rijdt hij sneller",
      "De motor is extra bescherming voor de bemanning",
      "Dan is het warmer voor de bemanning",
      "Er was achterin geen plek",
    ],
    goedAntwoord: 1,
    uitleg:
      "Een granaat die van voren komt moet eerst door het pantser en dan nog door de motor. De bemanning zit erachter en is veiliger. Achterin zit zelfs een deur waar soldaten in kunnen.",
  },
  {
    vraag:
      "Op deze Russische T-90 zitten overal blokjes op het pantser. Wat zijn dat?",
    plaatje: "plaatjes/t90.jpg",
    antwoorden: [
      "Opbergkastjes voor eten",
      "Explosief pantser: het ontploft naar buiten als het geraakt wordt",
      "Zonnepanelen",
      "Versiering",
    ],
    goedAntwoord: 1,
    uitleg:
      "Dat heet reactief pantser (ERA). Als een granaat zo'n blok raakt, ontploft het naar buiten en maakt het de granaat kapot voordat hij bij het echte pantser is.",
  },
  {
    vraag:
      "In elke Britse tank, zoals deze Challenger 2, zit iets wat andere tanks bijna nooit hebben. Wat?",
    plaatje: "plaatjes/challenger2.jpg",
    antwoorden: [
      "Een televisie",
      "Een waterkoker om thee te zetten",
      "Een wc",
      "Een koelkast voor ijs",
    ],
    goedAntwoord: 1,
    uitleg:
      "Sinds de Centurion uit 1945 heeft elke Britse tank een 'boiling vessel'. Daarmee zet je thee en warm je eten op zonder dat je de tank uit hoeft.",
  },
  {
    vraag:
      "Dit is een Duitse Leopard 2 die schiet. Hoe snel vliegt zijn granaat ongeveer?",
    plaatje: "plaatjes/leopard2.jpg",
    antwoorden: [
      "Ongeveer 100 km per uur",
      "Ongeveer 340 meter per seconde",
      "Ongeveer 1 meter per seconde",
      "Ongeveer 1700 meter per seconde",
    ],
    goedAntwoord: 3,
    uitleg:
      "Ongeveer 1700 meter per seconde: meer dan 5 keer zo snel als geluid! Door die enorme snelheid gaat hij door heel dik pantser.",
  },
  {
    vraag:
      "Een moderne tank zoals deze M1 Abrams schiet een lange, dunne pijl van heel zwaar metaal. Waarom is die pijl zo dun?",
    plaatje: "plaatjes/abrams.jpg",
    antwoorden: [
      "Zodat hij goedkoper is",
      "Zodat hij beter in de loop past",
      "Zodat alle kracht op een klein puntje komt",
      "Zodat de vijand hem niet ziet",
    ],
    goedAntwoord: 2,
    uitleg:
      "Denk aan een punaise: met een scherpe punt druk je hem zo in hout. Zo werkt de pijl ook: alle kracht op een klein puntje.",
  },
  {
    vraag:
      "Om dit voertuig zit een soort kooi van stalen staven, een stukje van het echte pantser af. Waar is die voor?",
    plaatje: "plaatjes/stryker.jpg",
    antwoorden: [
      "Om spullen aan op te hangen",
      "Tegen kogels van geweren",
      "Om de motor te koelen",
      "Zodat een raket (RPG) de kooi raakt in plaats van het voertuig",
    ],
    goedAntwoord: 3,
    uitleg:
      "Een RPG raket raakt eerst de staven. Daardoor gaat hij kapot of ontploft hij te vroeg. Het echte pantser erachter blijft heel.",
  },
];

// vragen voor de hard mode, van moeilijk naar heel erg moeilijk
// hier staan geen hints meer in de vraag, je moet het echt weten
let hardVragen = [
  {
    vraag:
      "Deze Britse Mark I staat klaar voor de allereerste tankaanval ooit. Op welke dag was dat?",
    plaatje: "plaatjes/flers.jpg",
    antwoorden: [
      "1 juli 1916",
      "15 september 1916",
      "20 november 1917",
      "8 augustus 1918",
    ],
    goedAntwoord: 1,
    uitleg:
      "15 september 1916 bij Flers-Courcelette, tijdens de Slag aan de Somme. 1 juli 1916 was de eerste dag van de Somme (zonder tanks) en 20 november 1917 was Cambrai, de eerste grote tankaanval.",
  },
  {
    vraag:
      "De vering van de Sovjet BT tanks en de T-34 kwam van deze tank. Uit welk land kwam de uitvinder?",
    plaatje: "plaatjes/christie.jpg",
    antwoorden: [
      "Duitsland",
      "Frankrijk",
      "Verenigde Staten",
      "Tsjechoslowakije",
    ],
    goedAntwoord: 2,
    uitleg:
      "Dit is de Christie M1931 van de Amerikaan J. Walter Christie (hij staat bovenop). Het Amerikaanse leger wilde hem niet echt, dus de Sovjets kochten er 2 en bouwden er duizenden tanks op.",
  },
  {
    vraag: "Wat voor motor zit er in een M1 Abrams?",
    plaatje: "plaatjes/abramsvuur.jpg",
    antwoorden: [
      "Een V12 dieselmotor",
      "Een benzinemotor van een vrachtwagen",
      "Twee elektromotoren met een accu",
      "Een gasturbine, een soort straalmotor",
    ],
    goedAntwoord: 3,
    uitleg:
      "De Abrams heeft een AGT1500 gasturbine van 1500 pk. Hij is stil en snel, maar slurpt heel veel brandstof, ook als hij stilstaat.",
  },
  {
    vraag: "Wat is er zo bijzonder aan de toren van de Russische T-14 Armata?",
    plaatje: "plaatjes/t14.jpg",
    antwoorden: [
      "Er zit niemand in, de bemanning zit in de romp",
      "Hij kan helemaal los van de tank rondrijden",
      "Hij is van keramiek gemaakt",
      "Er zitten twee kanonnen in",
    ],
    goedAntwoord: 0,
    uitleg:
      "De toren is onbemand en wordt op afstand bediend. De 3 bemanningsleden zitten voorin de romp in een extra gepantserde 'capsule'.",
  },
  {
    vraag: "Waarom had de Sovjet Object 279 de vorm van een vliegende schotel?",
    plaatje: "plaatjes/object279.jpg",
    antwoorden: [
      "Zodat hij kon drijven",
      "Zodat een atoombom hem niet om zou blazen",
      "Om minder te wegen",
      "Zodat radar hem niet kon zien",
    ],
    goedAntwoord: 1,
    uitleg:
      "Hij was gemaakt voor een atoomoorlog. Door de platte ronde vorm kon de drukgolf hem niet omkiepen. Hij had ook 4 rupsbanden, zodat hij niet vast kon lopen op puin.",
  },
  {
    vraag:
      "Van de 29 Sherman DD tanks die op D-Day bij Omaha Beach het water in gingen, hoeveel kwamen er zwemmend aan op het strand?",
    plaatje: "plaatjes/shermandd.jpg",
    antwoorden: ["2", "11", "19", "27"],
    goedAntwoord: 0,
    uitleg:
      "Maar 2! Ze werden veel te ver van de kust te water gelaten en de golven waren te hoog. 27 tanks zonken. Het doek om de tank moest hem laten drijven.",
  },
  {
    vraag:
      "In juni 1941 bleef bij Raseiniai (Litouwen) 1 Sovjet KV tank op een kruispunt staan. Hoe lang hield hij een hele Duitse pantserdivisie tegen?",
    plaatje: "plaatjes/kv1.jpg",
    antwoorden: ["10 minuten", "1 uur", "Ongeveer een dag", "Een hele week"],
    goedAntwoord: 2,
    uitleg:
      "Ongeveer een dag. De Duitse antitankkanonnen kwamen niet door zijn pantser. Uiteindelijk werd hij met een 88mm kanon en explosieven uitgeschakeld.",
  },
  {
    vraag:
      "Het 38cm wapen van de Sturmtiger was eigenlijk ontworpen voor iets heel anders. Waarvoor?",
    plaatje: "plaatjes/sturmtiger.jpg",
    antwoorden: [
      "Voor de marine, tegen onderzeeërs",
      "Als luchtafweergeschut",
      "Om raketten naar de ruimte te schieten",
      "Om bruggen op te blazen vanaf een trein",
    ],
    goedAntwoord: 0,
    uitleg:
      "Het was een raketwerper van Rheinmetall die bedoeld was voor de Duitse marine, om onderzeeërs aan te vallen. Er zijn maar 18 Sturmtigers gebouwd.",
  },
  {
    vraag:
      "De Maus woog ongeveer 188 ton, te zwaar voor bijna elke brug. Hoe moest hij over een rivier komen?",
    plaatje: "plaatjes/maus2.jpg",
    antwoorden: [
      "Met een speciale veerboot",
      "Hij moest altijd omrijden",
      "Uit elkaar halen en weer in elkaar zetten",
      "Onder water over de bodem rijden",
    ],
    goedAntwoord: 3,
    uitleg:
      "Hij kon tot 8 meter diep over de bodem rijden met een snorkel voor lucht. De stroom voor zijn elektromotoren kwam dan via een kabel van een tweede voertuig op de oever.",
  },
  {
    vraag:
      "Bij Prochorovka was een van de bekendste tankslagen van de Slag om Koersk. Op welke dag was dat?",
    plaatje: "plaatjes/koersk.jpg",
    antwoorden: [
      "22 juni 1941",
      "12 juli 1943",
      "6 juni 1944",
      "16 december 1944",
    ],
    goedAntwoord: 1,
    uitleg:
      "12 juli 1943. De andere data: 22 juni 1941 = Duitsland valt de Sovjet-Unie aan, 6 juni 1944 = D-Day, 16 december 1944 = begin van het Ardennenoffensief.",
  },
  {
    vraag:
      "De Challenger 1 had 'Chobham' pantser, met lagen keramiek erin. Waar komt de naam Chobham vandaan?",
    plaatje: "plaatjes/challenger1.jpg",
    antwoorden: [
      "Van de uitvinder, Sir Arthur Chobham",
      "Van de fabriek die het maakte",
      "Van de plaats van het onderzoekscentrum",
      "Het is een afkorting",
    ],
    goedAntwoord: 2,
    uitleg:
      "Het werd ontwikkeld bij een legeronderzoekscentrum bij Chobham Common in Surrey, Engeland. Hoe het precies in elkaar zit is nog steeds geheim.",
  },
  {
    vraag: "In welk land werd Tiger 131 in 1943 door de Britten buitgemaakt?",
    plaatje: "plaatjes/tiger131.jpg",
    antwoorden: ["Libië", "Italië", "Egypte", "Tunesië"],
    goedAntwoord: 3,
    uitleg:
      "In Tunesië, in april 1943. Een granaat had zijn toren vastgeslagen en de bemanning vluchtte. Nu is hij de enige Tiger I ter wereld die nog rijdt, in het Tank Museum in Bovington.",
  },
  {
    vraag:
      "Dit is Mephisto, de enige Duitse A7V tank uit de Eerste Wereldoorlog die nog bestaat. In welk land staat hij?",
    plaatje: "plaatjes/mephisto.jpg",
    antwoorden: ["Duitsland", "Australië", "Frankrijk", "Engeland"],
    goedAntwoord: 1,
    uitleg:
      "In Australië! Hij bleef in 1918 achter bij Villers-Bretonneux, waar het allereerste gevecht van tank tegen tank was. Australische soldaten haalden hem op en namen hem mee naar huis.",
  },
  {
    vraag:
      "De eerste Tiger II's hadden een ronde 'Porsche' toren, zoals op dit plaatje. Hoeveel zijn er met deze toren gebouwd?",
    plaatje: "plaatjes/tiger2porsche.jpg",
    antwoorden: ["5", "50", "250", "500"],
    goedAntwoord: 1,
    uitleg:
      "50. Daarna kwam de hoekige Henschel toren, want de ronde voorkant van de Porsche toren kon granaten naar beneden laten afketsen, precies op het dunne dak van de romp.",
  },
  {
    vraag:
      "Op 16 mei 1940 schoot een Char B1 bis bij Stonne in z'n eentje 13 Duitse tanks kapot. Hoe heette die tank?",
    plaatje: "plaatjes/charb1.jpg",
    antwoorden: ["Toulal", "Eure", "Verdun", "Jeanne d'Arc"],
    goedAntwoord: 1,
    uitleg:
      "Eure, van kapitein Pierre Billotte. Hij werd ongeveer 140 keer geraakt en niets kwam erdoorheen. De tank op het plaatje heet Toulal en staat nu als monument in Stonne.",
  },
];

// welk scherm je ziet: "start", "vraag", "uitleg", "einde" of "hardEinde"
// draw() kijkt elke keer naar deze variabele om te weten wat hij moet tekenen
// mousePressed() verandert hem als je op een knop klikt
let scherm = "start";

// de lijst met vragen die je nu doet: eerst vragen, daarna eventueel hardVragen
// alle teken functies gebruiken "lijst", zo werkt dezelfde code voor allebei
let lijst = vragen;

// true als je in de hard mode zit
// hiermee weten we of een goed antwoord bij score of bij extraPunten komt
let hardMode = false;

// bij welke vraag je bent (0 is de eerste)
// lijst[huidigeVraag] is dus de vraag die je nu ziet
let huidigeVraag = 0;

// hoeveel je goed hebt
let score = 0;

// hoeveel je goed hebt in de hard mode
let extraPunten = 0;

// op welk antwoord je hebt geklikt (0 t/m 3)
// dit wordt op het uitleg scherm vergeleken met goedAntwoord
let gekozenAntwoord = 0;

// alles staat in variabelen, dan hoef je het maar op 1 plek te veranderen

// vak in het midden voor het plaatje
// x en y zijn de linkerbovenhoek van het vak
let vakX = 130;
let vakY = 130;
let vakBreedte = 640;
let vakHoogte = 300;

// maat van de antwoord knoppen
// de x en y van elke knop komen uit knopX() en knopY()
let knopBreedte = 410;
let knopHoogte = 65;

// grote knop onderaan (start, volgende, opnieuw)
// groteKnopX is de x als er maar 1 knop in het midden staat
let groteKnopX = 350;
let groteKnopY = 620;
let groteKnopBreedte = 200;
let groteKnopHoogte = 50;

// op het eind scherm staan 2 knoppen naast elkaar
// ze hebben dezelfde y en maat als de grote knop, alleen een andere x
let opnieuwKnopX = 220;
let hardModeKnopX = 480;

// plaatjes laden voordat de quiz start
// p5 roept preload() als eerste aan en wacht tot alles geladen is
// pas daarna gaat hij naar setup(), zo is elk plaatje klaar als we het tekenen
function preload() {
  // bij elke vraag het plaatje laden en in het object zelf bewaren als "img"
  // zo heeft elke vraag zijn eigen plaatje bij zich, ook na het husselen
  for (let i = 0; i < vragen.length; i++) {
    vragen[i].img = loadImage(vragen[i].plaatje);
  }
  // hetzelfde voor de hard mode vragen
  for (let i = 0; i < hardVragen.length; i++) {
    hardVragen[i].img = loadImage(hardVragen[i].plaatje);
  }
}

// setup() wordt 1 keer aangeroepen als het programma start
function setup() {
  // het tekenvlak maken: 900 breed en 700 hoog
  createCanvas(900, 700);

  // gewone vragen door elkaar husselen bij het opstarten
  // zo krijg je elke keer een andere volgorde
  husselVragen(vragen);
}

// draw() wordt steeds opnieuw aangeroepen (ongeveer 60 keer per seconde)
// elke keer wordt het hele scherm leeg gemaakt en opnieuw getekend
function draw() {
  // wit maken, anders blijft het vorige plaatje eronder staan
  background(255);

  // goede scherm laten zien
  // elk scherm heeft zijn eigen teken functie
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

// het eerste scherm met de titel en de start knop
function tekenStartScherm() {
  // zwarte tekst zonder rand, gecentreerd rond het punt dat je geeft
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);

  // grote titel, width / 2 is het midden van het scherm
  textSize(56);
  text("Tank Quiz", width / 2, 180);

  textSize(20);
  text(
    "Hoe goed ken jij tanks, van de gewone tot de hele rare?",
    width / 2,
    260,
  );
  // vragen.length is hoeveel vragen er in de array staan
  // zo klopt het getal nog steeds als je vragen toevoegt of weghaalt
  text(
    vragen.length + " vragen, klik op het antwoord dat jij goed denkt",
    width / 2,
    295,
  );
  tekenGroteKnop("Start", groteKnopX);
}

// het scherm met de vraag, het plaatje en de 4 antwoorden
function tekenVraagScherm() {
  // de vraag die we nu doen even in een kortere variabele zetten
  let vraag = lijst[huidigeVraag];

  tekenBovenkant();
  tekenVraag(vraag.vraag);
  tekenPlaatje(vraag.img);

  // alle 4 antwoorden tekenen met een for loop
  // i is 0, 1, 2 en 3, dus A, B, C en D
  for (let i = 0; i < 4; i++) {
    tekenAntwoord(i);
  }
}

// het scherm na je antwoord: goed of fout, het goede antwoord en de uitleg
function tekenUitlegScherm() {
  let vraag = lijst[huidigeVraag];

  // bovenkant, vraag en plaatje blijven gewoon staan
  // alleen de antwoord knoppen worden vervangen door de uitleg
  tekenBovenkant();
  tekenVraag(vraag.vraag);
  tekenPlaatje(vraag.img);

  // tekst begint linksboven bij het punt dat je geeft
  fill(0);
  noStroke();
  textAlign(LEFT, TOP);

  // laten zien of het goed of fout was
  // je antwoord vergelijken met het goede antwoord van deze vraag
  textSize(30);
  if (gekozenAntwoord == vraag.goedAntwoord) {
    text("Goed!", 30, 450);
  } else {
    text("Fout!", 30, 450);
  }

  // goede antwoord en uitleg laten zien
  // vraag.goedAntwoord is een nummer, daarmee pak je de tekst uit de antwoorden array
  textSize(18);
  text("Het goede antwoord: " + vraag.antwoorden[vraag.goedAntwoord], 140, 457);
  // met een breedte en hoogte erbij gaat lange tekst vanzelf naar de volgende regel
  text(vraag.uitleg, 30, 500, 840, 100);

  // bij de laatste vraag staat er iets anders op de knop
  // lijst.length - 1 is de laatste plek, want we beginnen te tellen bij 0
  if (huidigeVraag == lijst.length - 1) {
    tekenGroteKnop("Bekijk score", groteKnopX);
  } else {
    tekenGroteKnop("Volgende", groteKnopX);
  }
}

// het scherm na de gewone vragen met je score
// hier kies je of je opnieuw begint of de hard mode doet
function tekenEindScherm() {
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);

  textSize(50);
  text("Klaar!", width / 2, 220);

  textSize(34);
  text("Je score: " + score + " van de " + vragen.length, width / 2, 300);

  // ander bericht bij een andere score
  // alles goed, minstens de helft goed, of minder dan de helft
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
  text(
    hardVragen.length +
      " vragen die steeds moeilijker worden. Bijna niemand weet ze!",
    width / 2,
    515,
  );

  // 2 knoppen naast elkaar, links opnieuw en rechts hard mode
  tekenGroteKnop("Opnieuw", opnieuwKnopX);
  tekenGroteKnop("Hard mode", hardModeKnopX);
}

// het scherm na de hard mode met allebei je scores
function tekenHardEindScherm() {
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);

  textSize(50);
  text("Hard mode klaar!", width / 2, 200);

  // score van de gewone vragen blijft bewaard, die laten we ook nog zien
  textSize(30);
  text("Gewone vragen: " + score + " van de " + vragen.length, width / 2, 290);
  text(
    "Extra punten: " + extraPunten + " van de " + hardVragen.length,
    width / 2,
    340,
  );

  // ander bericht bij een andere score
  // net als bij het gewone eind scherm, maar dan met extraPunten
  textSize(20);
  if (extraPunten == hardVragen.length) {
    text(
      "Alles goed in de hard mode?! Jij bent een tank legende.",
      width / 2,
      420,
    );
  } else if (extraPunten >= hardVragen.length / 2) {
    text("Wauw, je weet echt heel veel over tanks!", width / 2, 420);
  } else {
    text("Geen schande, deze vragen weet bijna niemand.", width / 2, 420);
  }

  // hier is maar 1 knop, dus die staat in het midden
  tekenGroteKnop("Opnieuw", groteKnopX);
}

// vraagnummer en score bovenaan
function tekenBovenkant() {
  fill(0);
  noStroke();
  textSize(16);

  // links: welke vraag je bent
  // huidigeVraag + 1 omdat we bij 0 beginnen, maar mensen tellen vanaf 1
  textAlign(LEFT, CENTER);
  if (hardMode) {
    text(
      "HARD MODE - vraag " + (huidigeVraag + 1) + " van " + lijst.length,
      30,
      25,
    );
  } else {
    text("Vraag " + (huidigeVraag + 1) + " van " + lijst.length, 30, 25);
  }

  // rechts: je score
  // met RIGHT eindigt de tekst bij x, dus width - 30 is 30 van de rechterkant af
  textAlign(RIGHT, CENTER);
  if (hardMode) {
    text("Score: " + score + "   Extra punten: " + extraPunten, width - 30, 25);
  } else {
    text("Score: " + score, width - 30, 25);
  }
}

// tekent de vraag onder de bovenkant
// vraagTekst is de tekst van de vraag die je meegeeft
function tekenVraag(vraagTekst) {
  fill(0);
  noStroke();
  textAlign(LEFT, TOP);
  textSize(20);
  // 840 breed en 75 hoog, lange vragen gaan vanzelf over 2 of 3 regels
  text(vraagTekst, 30, 50, 840, 75);
}

// tekent het plaatje in het midden van het vak
// img is het plaatje dat in preload() geladen is
function tekenPlaatje(img) {
  // plaatje wordt even hoog als het vak
  // breedte zo uitrekenen dat het plaatje niet uitgerekt wordt
  // bijvoorbeeld: plaatje van 800 x 600 wordt 400 x 300 (alles gedeeld door 2)
  let hoogte = vakHoogte;
  let breedte = (img.width * vakHoogte) / img.height;

  // in het midden van het vak zetten
  // de ruimte die over is (vakBreedte - breedte) verdelen over links en rechts
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
// de muis moet rechts van de linkerkant, links van de rechterkant,
// onder de bovenkant en boven de onderkant zijn
function muisOpKnop(nummer) {
  let x = knopX(nummer);
  let y = knopY(nummer);
  return (
    mouseX > x &&
    mouseX < x + knopBreedte &&
    mouseY > y &&
    mouseY < y + knopHoogte
  );
}

// true als de muis op de grote knop staat die bij x begint
// werkt hetzelfde als muisOpKnop, maar dan met de maat van de grote knop
// x meegeven omdat er op het eind scherm 2 grote knoppen naast elkaar staan
function muisOpGroteKnop(x) {
  return (
    mouseX > x &&
    mouseX < x + groteKnopBreedte &&
    mouseY > groteKnopY &&
    mouseY < groteKnopY + groteKnopHoogte
  );
}

// tekent een antwoord knop (nummer 0 t/m 3)
function tekenAntwoord(nummer) {
  let x = knopX(nummer);
  let y = knopY(nummer);
  // letters[0] is "A", letters[1] is "B", enzovoort
  let letters = ["A", "B", "C", "D"];

  // grijs als de muis erop staat
  // omdat draw() steeds opnieuw tekent, zie je dit meteen als je de muis beweegt
  if (muisOpKnop(nummer)) {
    fill(220);
  } else {
    fill(255);
  }
  // zwarte rand van 2 dik, de 8 aan het eind maakt de hoeken rond
  stroke(0);
  strokeWeight(2);
  rect(x, y, knopBreedte, knopHoogte, 8);

  // letter en antwoord
  // x + 15 zodat de tekst niet tegen de rand aan plakt
  // met breedte en hoogte erbij gaat een lang antwoord naar de volgende regel
  fill(0);
  noStroke();
  textSize(16);
  textAlign(LEFT, CENTER);
  text(
    letters[nummer] + ".  " + lijst[huidigeVraag].antwoorden[nummer],
    x + 15,
    y,
    knopBreedte - 25,
    knopHoogte,
  );
}

// tekent een grote knop onderaan die bij x begint
// knopTekst is wat er op de knop staat, bijvoorbeeld "Start" of "Volgende"
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

  // tekst precies in het midden van de knop
  fill(0);
  noStroke();
  textSize(22);
  textAlign(CENTER, CENTER);
  text(knopTekst, x + groteKnopBreedte / 2, groteKnopY + groteKnopHoogte / 2);
}

// p5 roept mousePressed() 1 keer aan elke keer dat je klikt
// per scherm kijken we op welke knop je klikt en wat er dan moet gebeuren
function mousePressed() {
  if (scherm == "start") {
    // quiz starten
    if (muisOpGroteKnop(groteKnopX)) {
      scherm = "vraag";
    }
  } else if (scherm == "vraag") {
    // kijken op welk antwoord is geklikt
    // alle 4 knoppen langs gaan en kijken of de muis erop staat
    for (let i = 0; i < 4; i++) {
      if (muisOpKnop(i)) {
        // onthouden wat je koos, dat hebben we nodig op het uitleg scherm
        gekozenAntwoord = i;

        // goed antwoord = punt erbij, in de hard mode een extra punt
        if (gekozenAntwoord == lijst[huidigeVraag].goedAntwoord) {
          if (hardMode) {
            extraPunten = extraPunten + 1;
          } else {
            score = score + 1;
          }
        }

        // naar het uitleg scherm
        scherm = "uitleg";
      }
    }
  } else if (scherm == "uitleg") {
    // naar de volgende vraag
    if (muisOpGroteKnop(groteKnopX)) {
      huidigeVraag = huidigeVraag + 1;

      // na de laatste vraag naar het goede eind scherm
      // als huidigeVraag even groot is als lijst.length is er geen vraag meer
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
    // score blijft staan, alleen extraPunten begint weer bij 0
    if (muisOpGroteKnop(hardModeKnopX)) {
      hardMode = true;
      lijst = hardVragen;
      husselVragen(hardVragen);
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
// alle variabelen weer zoals ze aan het begin waren
// en de vragen opnieuw husselen zodat je een nieuwe volgorde krijgt
function opnieuwBeginnen() {
  hardMode = false;
  lijst = vragen;
  husselVragen(vragen);
  huidigeVraag = 0;
  score = 0;
  extraPunten = 0;
  scherm = "start";
}

// array door elkaar husselen (Fisher-Yates shuffle)
// begint achteraan en ruilt elk vakje met een willekeurig vakje ervoor
// zo heeft elke volgorde precies evenveel kans
function husselArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // willekeurig getal van 0 t/m i
    let j = Math.floor(Math.random() * (i + 1));
    // vakje i en vakje j ruilen
    // temp is een tijdelijke plek, anders ben je de waarde van array[i] kwijt
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

// vragen en de antwoorden van elke vraag door elkaar husselen
// de array zelf wordt veranderd, er komt geen nieuwe array terug
function husselVragen(vragenLijst) {
  // volgorde van de vragen husselen
  husselArray(vragenLijst);

  // antwoorden van elke vraag husselen en goedAntwoord aanpassen
  for (let i = 0; i < vragenLijst.length; i++) {
    let v = vragenLijst[i];

    // eerst onthouden wat het goede antwoord is
    // na het husselen klopt het nummer niet meer, de tekst wel
    let goedeTekst = v.antwoorden[v.goedAntwoord];

    husselArray(v.antwoorden);

    // kijken op welke plek het goede antwoord nu staat
    // indexOf geeft het nummer van de plek waar die tekst in de array staat
    v.goedAntwoord = v.antwoorden.indexOf(goedeTekst);
  }
}
