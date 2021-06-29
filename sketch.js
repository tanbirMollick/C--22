const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ground_options={
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,200,20,ground_options);
 
  World.add(world,ground);
  console.log(ground.position.x);
  var ball_options={
    restitution:1.0
  }
  ball=Bodies.circle(200,50,20,ball_options)
  World.add(world,ball)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y)
}