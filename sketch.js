
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage, s;
var FoodGroup, obstacleGroup;
var score


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup(){
  createCanvas(400,400);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX  = -4; 
  ground.x = ground.width/2;
  console.log(ground.x);
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background(255);
  
  if(ground.x < 0){
     ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
    
  food();
  obstacles();
  
  drawSprites();
}



function food(){
  if(frameCount % 80 == 0){
    s = Math.round(random(120,200));
    banana = createSprite(150,s,20,20);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -1;
    banana.lifetime = 100;
  FoodGroup.add(banana);
  }
  
}

function obstacles(){
  if(frameCount % 300 == 0){
    obstacle = createSprite(150,310,20,20);
    obstacle.velocityX = -2;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  }
}



