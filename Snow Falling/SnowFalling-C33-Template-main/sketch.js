const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var bg_img
var snow
var snow_img
var snow = []
var maxSnow = 100


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
	world = engine.world;
  snow = new Snow(200,20,10,10)

  
}
function preload(){
  bg_img = loadImage("snow3.jpg")
  snow_img = loadImage("snow5.webp")


}

function draw() {
  background(bg_img);  
  drawSprites();

  for(var i = 0; i<maxSnow; i++){
    snow.push(createNew (Snow(random(0,500),random(0,500))))
  }
  for(var i = 0; i<maxSnow;i++){
    snow[i].display();
    snow[i].update();

  }

 
  snow.display();
}