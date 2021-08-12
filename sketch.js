function setup() {
  createCanvas(400, 400);
}
astronout=createSprite(300,230)
astronout.addAnimation("sleeping",sleep);
astronout.      scale = 0.1;

function draw() {
  background(220);
}
function preload(){

  bg=loadImage("sleep.png")
}