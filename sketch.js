const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var Ground,Ground2;

var bridge,con,spare,stone_ocean;



function setup() {
  createCanvas(1858, 977);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  Ground = new Grown(width/20,height - 10,700,800);
  Ground2 = new Grown(width/1.09,height - 10,700,800,10,10);

  bridge = new Bridge(25,{x: 420,y:530});
  spare = Bodies.circle(Ground2.body.position.x - 330,Ground2.body.position.y - 420,20,{isStatic: true});
  con = new Join(bridge,spare);

  console.log(width + "," + height);

}

function draw() {
  background(51);
  Engine.update(engine);

  Ground.display();
  Ground2.display();

  bridge.show();

  for(var i = 0;i < 9;i++){
    showBall(stone_ocean)
  }

}

function showBall(cball){
  cball = new Stone(9);
  cball.display();
}

