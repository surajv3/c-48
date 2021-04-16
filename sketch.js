var bg,bgImg
var batter,batterImg, batterImage
var fielder, fielderImg
var fielder1, fielder2, fielder3, fielder4, fielder5, fielder6, fielder7, fielder8, fielder8, fielder9, fielderGroup
var bowler, bowlerImg
var ball, ballImg
var line4, line6,img4,img6
var score=0
var gameState="scoring"


function preload() {
  bgImg=loadImage("Images/Background.jpg")
  batterImg=loadImage("Images/2.jpg")
  fielderImg=loadImage("Images/cricket_fielder.png")
  bowlerImg=loadImage("Images/cricket-bowler.png")
  ballImg=loadImage("Images/cricket_ball.png")
  batterImage=loadImage("cricketBatter.jpg")
  img4=loadImage("Images/4.png")
  img6=loadImage("Images/6.png")
}

function setup() {
  createCanvas(1200,1200);
  batter = createSprite(610, 1060, 50, 50);
  
  batter.addImage("batter",batterImg)
  
  
  fielder=createSprite(785,843,20,20)
  fielder.scale=0.4
  fielder.addImage("fielderImg",fielderImg)

  
  fielder1=createSprite(502,850,20,20)
  fielder1.scale=0.4
  fielder1.addImage("fielderImg",fielderImg)

  fielder2=createSprite(142,837,20,20)
  fielder2.scale=0.4
  fielder2.addImage("fielderImg",fielderImg)

  fielder3=createSprite(302,1015,20,20)
  fielder3.scale=0.4
  fielder3.addImage("fielderImg",fielderImg)

  fielder4=createSprite(784,1127,20,20)
  fielder4.scale=0.4
  fielder4.addImage("fielderImg",fielderImg)

  fielder5=createSprite(1136,983,20,20)
  fielder5.scale=0.4
  fielder5.addImage("fielderImg",fielderImg)

  fielder6=createSprite(1136,990,20,20)
  fielder6.scale=0.4
  fielder6.addImage("fielderImg",fielderImg)
  
  fielder7=createSprite(1136,826,20,20)
  fielder7.scale=0.4
  fielder7.addImage("fielderImg",fielderImg)

  fielder8=createSprite(954,1130,20,20)
  fielder8.scale=0.4
  fielder8.addImage("fielderImg",fielderImg)

  fielder9=createSprite(50,1161,20,20)
  fielder9.scale=0.4
  fielder9.addImage("fielderImg",fielderImg)

  bowler=createSprite(660,891,20,20)
  bowler.scale=0.3
  bowler.addImage("bowlerImg",bowlerImg)

  ball=createSprite(635,826,20,20)
  ball.scale=0.1
  ball.addImage("ballImg",ballImg)


  fielderGroup = new Group();
  fielderGroup.add(fielder, fielder1, fielder2, fielder3, fielder4, fielder5, fielder6, fielder7, fielder8, fielder8, fielder9,)



  fielder.setCollider("rectangle",0,0,250,250)
  fielder1.setCollider("rectangle",0,0,250,250)
  fielder2.setCollider("rectangle",0,0,250,250)
  fielder3.setCollider("rectangle",0,0,250,250)
  fielder4.setCollider("rectangle",0,0,250,250)
  fielder5.setCollider("rectangle",0,0,250,250)
  fielder6.setCollider("rectangle",0,0,250,250)
  fielder7.setCollider("rectangle",0,0,250,250)
  fielder8.setCollider("rectangle",0,0,250,250)
  fielder9.setCollider("rectangle",0,0,250,250)



  line4=createSprite(300,800,400,1)
  line4.visible=false
  line6=createSprite(700,690,800,1)
  line6.visible=false
}

function draw() {



  background(bgImg);

  stroke("blue")
  fill("black")
  textSize(30)
  text("score "+score, 50, 100)
  text(mouseX+","+mouseY,mouseX,mouseY) 

//spawnFielder()

  if(frameCount%50===0 && ball.x>=620 && ball.x<670&&ball.y>=635&&ball.y<=1133){
    if(gameState!=="launch"){

    
    ball.velocityY=4
    //ball.x=635;
    //ball.y=826;
  if(keyCode===32 && ball.x>=615 && ball.x<690&&ball.y>=1020&&ball.y<=1095){
    
    ball.velocityX=random(4,-4)
    ball.velocityY=random(4,-4)
    batter.changeImage("batter", batterImage)
  }

    }
  }



if (ball.isTouching(fielderGroup)){
  gameState="launch"
  ball.x=635
  ball.y=826
  ball.velocityX=0  
  ball.velocityY=0





}
if(gameState==="scoring"){
  if (ball.isTouching(line4)){
   
    line4.addImage(img4)
    line4.visible=true;
    score=4
  
  }
  
}
if (mousePressedOver(line4)){
  line4.visible=false;
}

if(gameState==="scoring"){
if (ball.isTouching(line6)){

  line6.addImage(img6)
  line6.visible=true;
  score=6
}
}
if (mousePressedOver(line6)){
  line6.visible=false;
}


  drawSprites();
}






