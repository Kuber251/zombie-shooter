var bg,bgImg;
var player, shooterImg, shooter_shooting;
var z1,z2,z3;
var zombiegroup
function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
  z1 = loadImage("zombie/zombie1.png");
  z2 = loadImage("zombie/zombie2.png");
  z3 = loadImage("zombie/zombie3.png");
}

function setup() {

  zombiegroup=new Group()
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(bgImg); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
spwanZombie()
drawSprites();

}
function spwanZombie(){
  background(bgImg);
  var zombie 
  if (frameCount % 60 === 0){
   zombie = createSprite(1200,100)
  zombie.velocityX=-5
  zombie.scale=0.3
  var rand = Math.round(random(1,3));
  zombie.lifetime=200;
  switch(rand){

case 1 :
  zombie.addImage(z1);
  break;

  case 2 :
    zombie.addImage(z2);
    break;

    case 3 :
      zombie.addImage(z3);
      break;
default:break;
}}
zombiegroup.add(zombie);
}

/*function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(400,165,10,40);
    obstacle.velocityX = -6;
    obstacle.velocityX=-(6+score/100);
    
     //generate random obstacles
     var rand = Math.round(random(1,6));
     switch(rand) {
       case 1: obstacle.addImage(obstacle1);
               break;
       case 2: obstacle.addImage(obstacle2);
               break;
       case 3: obstacle.addImage(obstacle3);
               break;
       case 4: obstacle.addImage(obstacle4);
               break;
       case 5: obstacle.addImage(obstacle5);
               break;
       case 6: obstacle.addImage(obstacle6);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.5;
     obstacle.lifetime = 300;
    
    //add each obstacle to the group
     obstaclesGroup.add(obstacle);
  }
 }
 
 function spawnClouds() {
   //write code here to spawn the clouds
   if (frameCount % 60 === 0) {
      cloud = createSprite(600,100,40,10);
     cloud.y = Math.round(random(10,60));
     cloud.addImage(cloudImage);
     cloud.scale = 0.5;
     cloud.velocityX = -3;
     
      //assign lifetime to the variable
     cloud.lifetime = 134;
     
     //adjust the depth
     cloud.depth = trex.depth;
     trex.depth = trex.depth + 1;
     
     //adding cloud to the group
    cloudsGroup.add(cloud);
     }
 }*/
 
 