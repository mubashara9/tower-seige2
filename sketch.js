const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, polygon, stand;


function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
  ground = new Ground(400,height,800,20);
  stand = new Ground(370,250,200,10);
  box1 = new Box(330,235,30,40)
  box2 = new Box(360,235,30,40)
  box3 = new Box(390,235,30,40);
  box4 = new Box(420,235,30,40);
  box5 = new Box(450,235,30,40);

  box6 = new Box(360,195,30,40);
  box7 = new Box(390,195,30,40);
  box8 = new Box(420,195,30,40);

  box9 = new Box(390,155,30,40);
  polygon = new Ball(50,200,20);
  //World.add(world,polygon);

  slingshot = new SlingShot(polygon.body,{x:100,y:200});
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
    
  ground.display();
  stand.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  //ellipseMode(CENTER);
  //ellipse(polygon.body.position.x,polygon.body.position.y,20,20);
  polygon.display();
  slingshot.display();


  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon.body);
  }
}
