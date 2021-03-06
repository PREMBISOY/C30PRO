const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//var polygon;

var block1,block2,block3,block4,block5,block6,block7,block8,block9;

function setup(){
    var canvas = createCanvas(1200,1000);
    engine = Engine.create();
    world = engine.world;
//level 1
//fill(0,255,0)
block1 = new Box(330,235,30,40);
block2 = new Box(360,235,30,40);
block3 = new Box(390,235,30,40);
block4 = new Box(420,235,30,40);
 block5 = new Box(450,235,30,40);
//level 2
//fill(0,0,255);
block6 = new Box(360,195,30,40);
block7 = new Box(390,195,30,40);
block8 = new Box(420,195,30,40);
//top
//fill(255,0,0);
block9 = new Box(390,155,30,40);
//zameen
ground = new Ground(600,995,1200,10);
stage = new Ground(390,265,170,5);
hexagon = new Polygon(100,400,15,15);
}


function draw(){
    background('indigo');
    Engine.update(engine);
 
    block1.display(fill(0,255,0));
    block2.display(fill(0,255,0));
    block3.display(fill(0,255,0));
    block4.display(fill(0,255,0));
    block5.display(fill(0,255,0));
    
    block6.display(fill(0,0,255));
    block7.display(fill(0,0,255));
    block8.display(fill(0,0,255));

    block9.display(fill(255,0,0));

    ground.display();
    stage.display();
    hexagon.display();
           

//mouseDragged();
//keyPressed();
    drawSprites();
}

 function mouseDragged(){
     Matter.Body.setPosition(hexagon.polygon, {x: mouseX , y: mouseY});
 }
 
 

function keyPressed(){

    if(keyCode===32){
    hexagon.rope.attach(hexagon.polygon)
    //Matter.Body.setPosition(hexagon.polygon, {x: 100 , y: 400});

    }
    }

    function mouseReleased(){
        hexagon.rope.fly();
    }
