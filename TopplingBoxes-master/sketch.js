const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var car1, bg;
function preload(){
 bg = loadImage("track.png");
}
function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    engine = Engine.create();
    world = engine.world;
    car1 = new Box(200,200,20,20);
    
    ground = new Ground(0,height,displayWidth,20)
}

function draw(){
    background(bg);
    Engine.update(engine);
    
    car1.display();
    ground.display();
}