let score
function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(220);
score = (89)
if (score >= 90){
  fill("green")
  text("Uitstekend!" ,50 ,50)
}

else if (score >= 70 && score <= 89){
fill("yellow")
text("Goed Gedaan" , 50 , 50)

}
else if (score >= 50 && score <= 69){
fill("orange")
text("Voldoende" , 50 , 50)

}

else if (score < 50 ){
fill("red")
text("Onvoldoende" , 50 , 50)

}

}