const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world;
var object,ball
function setup(){
    var canvas=createCanvas(800,400)
    engine=Engine.create();
    world=engine.world;
    var object_options={
     isStatic:true
    }
object=Bodies.rectangle(400,400,800,50,object_options);
World.add(world,object)
var ball_options={
restitution:1.0,
friction:0.1
}
ball=Bodies.circle(200,100,20,ball_options)
World.add(world,ball)
console.log("katyayani")
console.log(object);

}
function draw(){
background(0);
Engine.update(engine);
rectMode(CENTER);
fill("blue")
rect(object.position.x,object.position.y,800,50);
ellipseMode(RADIUS);
fill("red")
ellipse(ball.position.x,ball.position.y,20,20)
}