
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;

var paperObject
var dustbinimg,paperimg

function setup() {
	createCanvas(900, 400);

	engine = Engine.create();
	world = engine.world;
	
	Engine.run(engine);
  ground1 = new Ground(450,390,900,20)
  paperObject = new Paper(50,50,20)
  line1 = new Dustbin(750,370,100,30)
  line2 = new Dustbin(680,330,40,100)
  line3 = new Dustbin(820,330,40,100)
  
  //dustbinimg = new Dustbin(680,330,40,100)
}


function draw() {
  background(200);

// Engine.update(engine)


  paperObject.display()
  //line2.display()
  //line3.display()
  line1.display()
  ground1.display()
  
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:75,y:-70});
  
  }
  
}

 