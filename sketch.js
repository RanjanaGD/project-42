var  hr=hour();
text('Current hour:\n' + hr, 5, 50);
var mn=minute();
var sc=second();
var scAngle;



function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  
  angleMode(DEGREES)
  scAngle=map(sc,0,60,0,360)
 
push();
rotate(scAngle)
stroke(255,0,0)
strokeWeight(7)
line(200,100,200,220)
pop();



  drawSprites();
}