var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var pink,blue,red,green;

var pinkBGrp,blueBgrp,greenBGrp,redBGrp,arrowGrp;

var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(500, 500);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0;
  
  pinkBGrp = new Group();
  redBGrp = new Group();
  greenBGrp = new Group();
  blueBGrp = new Group();
  arrowGrp = new Group();
  
  camera.position.x = 250;
  camera.position.y = 250;
}

function draw() {
  background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY

  
    // to create arrows
  if(keyDown("space")){
    
    createArrow();
    
    
  }
  
  
  
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }  
    
  
  
if(arrowGrp.isTouching(redBGrp)){
  
  redBGrp.destroyEach();
  arrowGrp.destroyEach();
  score = score+3;
  
}

  if(arrowGrp.isTouching(blueBGrp)){
    
    arrowGrp.destroyEach();
    blueBGrp.destroyEach();
    score = score+2;
    
  }
  
  if(arrowGrp.isTouching(pinkBGrp)){
    
    pinkBGrp.destroyEach();
    arrowGrp.destroyEach();
    score = score+1;
    
  }  
  
  if(arrowGrp.isTouching(greenBGrp)){
    
    
    greenBGrp.destroyEach();
    arrowGrp.destroyEach();
    score = score+2;
  }
  
  drawSprites();
  text("Score: "+ score, 400,50);
}


function redBalloon() {
  red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redBGrp.add(red);
}

function blueBalloon() {
  blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueBGrp.add(blue);
}

function greenBalloon() {
   green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenBGrp.add(green);
}

function pinkBalloon() {
  pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pinkBGrp.add(pink);
}


function createArrow(){
  
  arrow = createSprite(bow.x,bow.y,10,10);
  
  arrow.addImage(arrowImage);
  
  arrow.scale = 0.17;
  
  arrow.velocityX = -4;
  
  
  arrowGrp.add(arrow);
}