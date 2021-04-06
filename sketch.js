
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var rod,ball,ground;
var rod1, rod2;
var ball;
var slingShot;
var polygon_img;

function preload(){



}

function setup(){
engine = Engine.create;
world = engine.world;

createCanvas(900,400)
ground = new ground()
rod1 = new Rod(380,300,270,10)
rod2 = new Rod(700,200,200,10)

// part 1
// first level
ball1 = new ball(280,275,30,40);
ball2 = new ball(310,275,30,40);
ball3 = new ball(340,275,30,40);
ball4 = new ball(370,275,30,40);
ball5 = new ball(400,275,30,40);
ball6 = new ball(430,275,30,40);
ball7 = new ball(460,275,30,40);
ball8 = new ball(490,275,30,40);
// second level
ball9 = new ball(310,235,30,40);
ball10 = new ball(340,235,30,40);
ball11 = new ball(370,235,30,40);
ball12 = new ball(400,235,30,40);
ball13 = new ball(430,235,30,40);
ball14 = new ball(460,235,30,40);
// third level
ball15 = new ball(340,195,30,40);
ball16 = new ball(370,195,30,40);
ball17 = new ball(400,195,30,40);
ball18 = new ball(430,195,30,40);
// fourth level
ball19 = new ball(370,155,30,40);
ball20 = new ball(400,155,30,40);
// fifth level
ball21 = new ball(385,155,30,40);
// part 2
// first level
ball22 = new ball(640,175,30,40);
ball23 = new ball(670,175,30,40);
ball24 = new ball(700,175,30,40);
ball25 = new ball(730,175,30,40);
ball26 = new ball(760,175,30,40);
// second level
ball27 = new ball(670,135,30,40)
ball28 = new ball(700,135,30,40)
ball29 = new ball(730,135,30,40)
// third level
ball30 = new ball(700,95,30,40)

// ball with sling
ball = Bodies.circle(50,200,20)
World.add(world,ball)

slingShot = new slingShot(this.ball,{x:200,y:200})

}

function draw(){
background('white')
Engine.update(engine)

strokeWeight(2);
stroke(15);

rod1.display();
rod2.display();

stroke(15)
fill('black')
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
ball6.display();
ball7.display();
ball8.display();
stroke(15)
fill('orange')
ball9.display();
ball10.display();
ball11.display();
ball12.display();
ball13.display();
ball14.display();






}





















