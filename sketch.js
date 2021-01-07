const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var offf, qwerty;
var box1, box2;
var ground1;

function setup() {
  createCanvas(800,800);
  
  offf = Engine.create();
  qwerty = offf.world;
  box1 = new box(200,400,30, 30);
  box2 = new box(220,200,30, 55);
  
  ground1 = new ground(400,750, 800, 15);

}

function draw() {
  background(0);
  Engine.update(offf);
  box1.display();
  box2.display();
  ground1.display();
  
}
