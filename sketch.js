const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerBase,computer;

function preload(){
  backgroundImg = loadImage("./assets/nightforest.gif");
}


function setup() {
  canvas = createCanvas(700, 500);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   computerBase = new ComputerBase(100,350,90,90);
   computer = new Computer(600,300,40,60);
   playerBase = new PlayerBase(600,355,90,90);
   player = new Player(105,300,40,60);

 }

function draw() {

  background(51);
  image(backgroundImg,0,0,width,height);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  computerBase.display();
  computer.display();
  player.display();
  playerBase.display();

   //display Player and computerplayer


}
