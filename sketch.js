const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var gameState = "onSling";
var bg = "bg1.png";


var score = 0;

function preload() {

    bg = loadImage("bg1.png");
}


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 505, 300, 170);

    box1 = new Box(700,550,80,80);
    box2 = new Box(920,550,80,80);
    zom1 = new Zombie(810, 555);
    log1 = new Log(810,500,300, PI/2);

    box3 = new Box(700,450,80,80);
    box4 = new Box(920,450,80,80);
    zom2 = new Zombie(810, 460);

    log3 =  new Log(810,400,300, PI/2);

    box5 = new Box(810,355,80,80);
    log4 = new Log(760,300,150, PI/7);
    log5 = new Log(870,300,150, -PI/7);

    peashooter = new Plant(200,250);
    

    slingshot = new Slingshot(peashooter.body,{x:200, y:250});
    
  
}

function draw(){

   
        background(bg);
        
        textSize(35);
        fill("white");
        text("SCORE  -  " + score, width-300, 50);
        textSize(30);
        textStyle(BOLD);
        text("Launch Peashooter to kill Zombies!! Click space to reattach!",10,40);
         
        if(score >= 1000) {
            textSize(30);
            fill("white");
            textStyle(BOLD);
            text("YOU WON! The zombies should think twice before trying to eat your brain.",10,70);
        }
    
    Engine.update(engine);


    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    zom1.display();
    zom1.score();
    log1.display();

    box3.display();
    box4.display();
    zom2.display();
    zom2.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    peashooter.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState !=="launched"){
        Matter.Body.setPosition(peashooter.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && gameState === "launched"){
        peashooter.trajectory = [];

        Matter.Body.setPosition(peashooter.body, {x: 200 , y: 250});      
        Matter.Body.setAngle(peashooter.body, 0);
       
       gameState = "onSling";
       

       slingshot.attach(peashooter.body);
    }


  
}
