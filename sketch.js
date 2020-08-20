
var thickness,wall;
var speed,weight,bullet;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed=random(55,90);
  thickness=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,200,50,20); 
  bullet.shapeColor=color("white") ;
  wall=createSprite(1200,200,thickness,height/2);
    bullet.velocityX=speed;
  wall.shapeColor=color(80,80,80);
  
}


function draw() {
  background("black");

  // if(wall.x-bullet.x<(wall.width+bullet.width)/2){
  //   bullet.velocityX=0;

  //   var deformation=0.5*weight*speed*speed/22500;

  //   if(deformation>180){
  //     bullet.shapeColor=color(255,0,0);
  //   }
    
  //   if(deformation<100){
  //     bullet.shapeColor=color(0,255,0);
  //   }

  //   if(deformation<180 && deformation>100){
  //     bullet.shapeColor=color(230,230,0);
  //   }}

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
console.log(damage);
    if(damage>10){
   wall.shapeColor=color(255,0,0);

    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }


  
  // rectMode(CENTER);
  //   bullet.collide(wall);
    drawSprites();
}
function hasCollided(Lbullet,Lwall){
  bulletRightEdge=Lbullet.x+Lbullet.width;
  wallLeftEdge=Lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;


}