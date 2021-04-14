const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img, tetris;
function preload(){
  polygon_img=loadImage("Images/polygon.png");
  tetris=loadImage("Images/bg.jpg")
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();

  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);


  
  s1=new Slingshot(this.polygon,{x:100,y:200})
 
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,250,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //level one
  b1 = new Block(610,175,30,40);
  console.log(b1);
  b2 = new Block(640,175,30,40);
  b3 = new Block(670,175,30,40);
  b4 = new Block(700,175,30,40);
  b5 = new Block(730,175,30,40);
  b6 = new Block(760,175,30,40);
  b7 = new Block(790,175,30,40);
  //level two
  b8 = new Block(640,135,30,40);
  b9 = new Block(670,135,30,40);
  b10 = new Block(700,135,30,40);
  b11 = new Block(730,135,30,40);
  b12 = new Block(760,135,30,40);
  //level three
  b13 = new Block(670,95,30,40);
  b14 = new Block(700,95,30,40);
  b15 = new Block(730,95,30,40);
  //top
  b16 = new Block(700,55,30,40);

  
  

}
function draw() {
  background(tetris); 
 
  textSize(20);
  fill("l56\ightyellow");
  ground.display();
  stand1.display();
  stand2.display();
  //polygon.display();
  s1.display();

  
  
  strokeWeight(2);
  stroke(15);
  //tower1
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("Khaki");
  block16.display();
  //tower2
  fill("skyblue");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  fill("pink");
 
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  fill("turquoise");
  b13.display();
  b14.display();
  b15.display();
  fill("Khaki");
  b16.display();

  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
}


function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  s1.fly();
}
function keyPressed(){
  if(keyCode === 32){
      s1.attach(this.polygon);
  }
}