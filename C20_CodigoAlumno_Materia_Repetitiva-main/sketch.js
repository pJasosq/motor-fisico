
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var suelo;
var piso;
var pelota;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  angle = 15;
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };

   pelota = Bodies. circle(300,10,20,ball_options)
   World.add(world,pelota);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  suelo = Bodies.rectangle(300,300,200,20,ground_options);
  World.add(world,suelo);
  piso = Bodies.rectangle(100,100,200,20,ground_options);
  World.add(world,piso);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  Matter.Body.rotate(piso,angle);
  push();
  translate(piso.position.x,piso.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();angle += 0.1
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(pelota.position.x,pelota.position.y,20);
  rect(suelo.position.x,suelo.position.y,200,20);

 
}

