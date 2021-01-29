var car;
var wall;
var speed,weight;
var deformation;
var PLAY=1,END =0;
gameState=PLAY;
function setup() {
  createCanvas(1600,400);

  //creating car
  car=createSprite(50, 200, 50, 50);
 car.shapeColor=255,255,255;
  //creating wall
  wall=createSprite(1500,200,60,height/2);
  //ranging speed and weight
  speed=random(55,90);
  weight=random(400,1500);

  
  
}

function draw() {
  background(0);

  
   
      //assignong speed
      car.velocityX=speed;

      //colliding 
if(wall.x-car.x <= car.width/2+wall.width/2){
  car.velocityX=0;

//deformation formula
deformation=0.5*weight*speed*speed/22500;

  if(deformation<100){

    car.shapeColor=color(0,255,0);
  }

if(deformation>100 && deformation<180){
  car.shapeColor=color(230,230,0);
}

if(deformation>180){
  car.shapeColor=color(255,0,0);
}
}


      
  
 



  drawSprites();
}