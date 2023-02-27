var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var backgroundSprite
var backgroundSpriteImg

var gameState = 'play'

var groundSprite
var groundSpriteImg
var ground2
var ground2_1
var ground2_2 
var ground2_3
var ground3
var groundBridgeImg

var door 
var doorImage

var player
var playerImg

var tyres
var tyres_2
var tyresImg

var rocks
var rocksImg

var bricks
var bricksImg
var bricks_2

var debris
var debris_2
var debrisImg



function preload(){
backgroundSpriteImg = loadImage('assets/brickWall.jpg')
groundSpriteImg = loadImage('assets/grassImg.png')
groundBridgeImg = loadImage('assets/bridgeImg.png')
doorImage = loadImage('assets/DoorImg.png')
playerImg = loadImage('assets/AlienPlayer.png')
tyresImg = loadImage('assets/tyreObstacle.png')
debrisImg = loadImage('assets/debris.webp')
rocksImg = loadImage ('assets/rockObstacle.png')
//not loading/working

bricksImg = loadImage('assets/brickObstacle.png')



}

function setup(){

//background image
createCanvas(1500,800)

backgroundSprite = createSprite(750,400,1500,800)
backgroundSprite.addImage(backgroundSpriteImg)

groundSprite = createSprite(750,780,1500,30)
groundSprite.shapeColor='black'
//groundSprite.addImage(groundSpriteImg)

ground2_1 = createSprite(1000,470,900,30)
ground2_1.shapeColor='black'
//ground2_1.addImage(groundBridgeImg)

ground3 = createSprite(500,212,900,30)
ground3.shapeColor='black'
//ground3.addImage(groundBridgeImg)

door = createSprite(150,120,50,50)
door.addImage(doorImage)
door.scale = 0.11

player = createSprite(1300,700,50,50)
player.addImage(playerImg)
player.scale = 0.2

tyres = createSprite(1000,735,50,50)
tyres.addImage(tyresImg)
tyres.scale = 0.3

tyres_2 = createSprite(500,735,50,50)
tyres_2.addImage(tyresImg)
tyres_2.scale = 0.3

bricks = createSprite(760,450,50,50)
bricks.addImage(bricksImg)
bricks.scale = 0.28

bricks_2 = createSprite(440,190,50,50)
bricks_2.addImage(bricksImg)
bricks_2.scale = 0.28

debris = createSprite(200,678,300,500)
debris.addImage(debrisImg)
debris.scale = 0.7

debris_2 = createSprite(1300,370,300,500)
debris_2.addImage(debrisImg)
debris_2.scale = 0.7

debris.debug = true 
debris.setCollider('rectangle',0,0,350,300)

debris_2.debug = true
debris_2.setCollider('rectangle',0,0,350,300)


}

function draw() {
  
  background("black");

  
  if (gameState == 'play'){
    if (keyDown(UP_ARROW)) {
      player.velocityY = -7
    }
    player.velocityY = player.velocityY+0.35
  
    if (keyDown(RIGHT_ARROW)) {
      player.x = player.x + 5
    }
  
    if (keyDown(LEFT_ARROW)) {
      player.x = player.x - 5
    }
      player.collide(groundSprite)
      player.collide(ground2_1)
      player.collide(ground3)
      player.collide(debris)
      player.collide(debris_2)

      if (player.isTouching(tyres) ||
          player.isTouching(tyres_2)||
          player.isTouching(bricks)||
          player.isTouching(bricks_2)){
            
          gameState = 'end'
      
       
        

      }
  }
  else if (gameState == 'end'){
      swal({
        title: 'Gameover!',
        text: "Oh no!",
        //imageUrl:
       //   "cryingAlien.png",
        //imageSize: "100x100",
        confirmButtonText: "Ok"
      });



   


  }




  


  




  
        
 
        drawSprites();


        text('timer:30',1200,50)
        Fill('white')
        textSize


  
        
        
}