
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	BobDiameter=40;

	//Create the Bodies Here.
	bob1=new Bob(100,580,40);
	bob2=new Bob(160,585,40);
	bob3=new Bob(210,600,40);
	bob3=new Bob(260,600,40);
	bob4=new Bob(310,600,40);
	bob5=new Bob(360,600,40);

	roof=new Roof(350,100,500,50);

	rope1=new Rope(bob1.body,roof.body,-BobDiameter*2,0)
	rope2=new Rope(bob2.body,roof.body,-BobDiameter*1,0);
	rope3=new Rope(bob3.body,roof.body,0,0);
	rope4=new Rope(bob4.body,roof.body,BobDiameter*1,0);
	rope5=new Rope(bob5.body,roof.body,BobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("lightblue");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
	}
}



