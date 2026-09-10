function setup() {
  createCanvas(1650, 800);
}

function draw() {
  background(220);

  // naam
  fill("black");
  strokeWeight(0);
  textSize(16);
  text("hoi mijn naam is miles", 50, 35);

  // vlag van nederland
  fill("red");
  rect(50, 50, 100, 30);
  fill("white");
  rect(50, 80, 100, 30);
  fill("blue");
  rect(50, 110, 100, 30);

  // schaakbord
  strokeWeight(1);
  fill("black");
  rect(300, 300, 50, 50);
  fill("white");
  rect(350, 300, 50, 50);
  fill("black");
  rect(400, 300, 50, 50);
  fill("white");
  rect(300, 350, 50, 50);
  fill("black");
  rect(350, 350, 50, 50);
  fill("white");
  rect(400, 350, 50, 50);
  fill("black");
  rect(300, 400, 50, 50);
  fill("white");
  rect(350, 400, 50, 50);
  fill("black");
  rect(400, 400, 50, 50);

  // transparant huisje
  strokeWeight(5)
  noFill(1) 
  color("black")
  square(600, 600, 100)
  line(600, 600, 650, 550)
  line(700, 600, 650, 550)

  // stoplicht
  strokeWeight(0);
  fill(100);
  rect(900, 300, 100, 300);
  fill(0, 255, 0);
  circle(950, 550, 80);
  fill("orange");
  circle(950, 450, 80);
  fill("red");
  circle(950, 350, 80);
  fill(100);
  rect(925, 600, 50, 400);

  // dobbelsteen
  fill("white");
  strokeWeight(1);
  square(600, 300, 100, 20);
  strokeWeight(0);
  fill("black");
  circle(650, 350, 35);

  //mario
  let palette = {
    0: [0, 0, 0, 0],         
    1: [184, 30, 0],         
    2: [110, 70, 0],        
    3: [248, 160, 0],        
    4: [0, 0, 0]          
  };

  let spriteMap = [
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 2, 2, 2, 3, 3, 4, 3, 0, 0],
    [0, 0, 2, 3, 2, 3, 3, 3, 2, 3, 3, 3],
    [0, 0, 2, 3, 2, 2, 3, 3, 3, 2, 3, 3],
    [0, 0, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2],
    [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0],
    [0, 0, 0, 1, 1, 2, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1],
    [0, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1],
    [0, 3, 3, 1, 2, 3, 2, 2, 3, 1, 3, 3],
    [0, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3],
    [0, 3, 3, 2, 2, 2, 2, 2, 2, 2, 3, 3],
    [0, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0],
    [0, 0, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2],
    [0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2]
  ];
  let pixelSize = 10;
  let marioX = 700;   
  let marioY = 200;   

  strokeWeight(0); 
  for (let row = 0; row < spriteMap.length; row++) {
    for (let col = 0; col < spriteMap[row].length; col++) {
      let kleurCode = spriteMap[row][col];
      fill(palette[kleurCode]);
      square(marioX + (col * pixelSize), marioY + (row * pixelSize), pixelSize);
    }
  }

  //steve
  let stevePalette = {
    1: [75, 48, 30],
    2: [197, 138, 108],
    3: [117, 72, 52],
    4: [255, 255, 255],
    5: [60, 68, 170]
  };

  let steveMap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1],
    [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 4, 4, 5, 5, 2, 2, 2, 2, 5, 5, 4, 4, 2, 2],
    [2, 2, 4, 4, 5, 5, 2, 2, 2, 2, 5, 5, 4, 4, 2, 2],
    [2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2],
    [2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2],
    [2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
  ];

  let steveSize = 10;
  let steveX = 1100;
  let steveY = 300;
//hallo
  for (let row = 0; row < steveMap.length; row++) {
    for (let col = 0; col < steveMap[row].length; col++) {
      let code = steveMap[row][col];
      fill(stevePalette[code]);
      square(steveX + (col * steveSize), steveY + (row * steveSize), steveSize);
    }
}
}