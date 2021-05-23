//namespacing using constant
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13
var ground;
var ball
var rope
var Monster1


function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;
  
  ground=new Ground(width/3,height-20,width,30,true)

  Monster1 = new Monster(800,300,150)

  box1=new Ground(700,200,60,60,false)
  box2=new Ground(520,200,60,60,false)
  box3=new Ground(600,130,60,60,false)
  box4=new Ground(520,130,60,60,false)
  box5=new Ground(width/4,10,60,60,true)
  box6=new Ground(600,70,60,60,false)
  box7=new Ground(600,70,60,60,false)
  box8=new Ground(600,70,60,60,false)
  box9=new Ground(600,70,60,60,false)
  box10=new Ground(520,200,60,60,false)
  box11=new Ground(750,200,60,60,false)
  box12=new Ground(520,200,60,60,false)
  // box13=new Ground(750,200,60,60,false)  
  
  ball=new Ball(width/4,400,150)

  rope=new Rope(box5.body,ball.body) 
}

function draw() {
  background(220,255,255);  

  Engine.update(engine);
 
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  // box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  // box13.display()
  
  ball.display()
  Monster1.display()
  // rope.display()

}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY})
}