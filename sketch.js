const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
 var boy;
 var groundObject;
 var tree;
 var mango;
 var laun;
 var stone;
function preload()
{
 boyImage=loadImage("boy.png");	
}

function setup() {
	createCanvas(1000, 729);


	engine = Engine.create();
	world = engine.world;

	tree=new Tree(775,729);
	tree.scale=0.43;

	groundObject=new Ground(width/2,720,width,20);

	boy=createSprite(185,647,10,50);
	boy.addImage(boyImage);
	boy.scale=0.12;

	stone=new Stone(117,573,20,20);

	mango1=new Mango(800,180,20);
	mango2=new Mango(910,290,20);
	mango3=new Mango(850,370,20);
	mango4=new Mango(630,310,20);
	mango5=new Mango(700,380,20);

   laun = new Launcher(stone.body,{x:140,y:600});
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  textSize(25);
  text("Press Space to get a second Chance to Play!!",100 ,70);
  
  drawSprites();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);


  tree.display();
  groundObject.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
laun.display();
  

  
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
    laun.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	  if(distance<=lmango.r+lstone.r){
		  Matter.Body.setStatic(lmango.body,false);
	  }
   }

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:473})
		laun.attach(stone.body);
	}
}