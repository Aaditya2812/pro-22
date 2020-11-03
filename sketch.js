var wall,car;
var speed,weight;


function setup() {
  createCanvas(1500,400);

  speed=random(55,90);
  weight=random(400,1500);
  console.log(speed);
  console.log(weight);

  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  wall=createSprite(1300, 200, 60, height/2);
  
}

function draw() {
  background("black");
  if(wall.x-car.x<car.width/2+wall.width/2) {
    car.velocityX=0;
  }
  deformation();
  drawSprites();
}
function deformation(){
  if(0.5*weight*speed*speed/22500<100){
    car.shapeColor="green";
  }
  if(0.5*weight*speed*speed/22500>100&&
    0.5*weight*speed*speed/22500<180){
    car.shapeColor="yellow";}

    if(0.5*weight*speed*speed/22500>180){
      car.shapeColor="red";
    }
}