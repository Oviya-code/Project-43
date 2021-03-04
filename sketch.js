const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



var hr = hour();
var mn = minute();
var sc = second();



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  scAngle = map(sc,0,60,0,360);

  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  translate(0,0);

  drawSprites();
}