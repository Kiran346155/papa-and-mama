var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
 
}

function setup() {
  createCanvas(1366,700);
   translate(0,-player.spt.y+height-150); 
  
  carGroup1 = new Group();
  logGroup1 = new Group();
  player = new player(width/2,height-25);

}

function draw() {
  background("skyblue");
  for(var i=0;1<6;i++){
  var bottomgrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
 if(i%2===0){
  var road = createSprite(683,height-150-(i*400)-grassHeight,width,300)
   road.shapecolour="black"
 }
  bottomgrass1.shapecolour = "grey" ;
}

  for(var i = 0; i <40; i++ ){
   cars = new car(2);
   carGroup1.add(cars.spt);
  }




drawSprites();
}

function keypressed(){
if(keyCode == UP_ARROW){
  player.move(0,-2);
} else if(keyCode == DOWN_ARROW){
  player.move(0,2);
} else if(keyCode == LEFT_ARROW){
  player.move(-2,0);
} else if(keyCode == RIGHT_ARROW){
  player.move(2,0);
}
}