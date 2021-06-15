var trex, trex_running;
var ground, groundImage,invisibleGround1,invisibleGround2;


 
function preload(){
  trex_running = loadAnimation ("trex_running1.png","trex_running2.png")
  groundImage=loadImage("ground.png");
 
  
}

function setup(){
  createCanvas(400,400);
  ground=createSprite(200,200);
  ground.addImage("ground",groundImage);
  ground.velocityY=5;
  ground.y=ground.height/30;
  trex=createSprite(300,335);
  trex.addAnimation("trex",trex_running);
  trex.scale = 0.05;  
  invisibleGround1 = createSprite (60,0,25,800)
  invisibleGround1.visible = false;
  invisibleGround2 = createSprite (340,0,25,800)
  invisibleGround2.visible = false;  
  
   

}

function draw() {

  background("black");
  

if (ground.y > 400){
  ground.y = height/10
}




trex.collide(invisibleGround1);
trex.collide(invisibleGround2);

drawSprites();





}
 




