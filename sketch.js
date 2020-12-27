var database;
var foods=20;

function preload()
{
  dog1=loadImage("images/dogImg.png");
  dog2=loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
  
  createCanvas(800, 600);

  dog=createSprite(500,490,50,50);
  dog.addImage(dog1);
  dog.scale = 0.3;



  //

}


function draw() {  
background("green");

drawSprites();

var food =database.ref('food');
food.on("value",(data)=>{
  food=data.val();
}) 

  textSize(22);
textFont("Arial");
stroke("red")
text("Food remaning: "+ foods,150,300)

textSize(22);
textFont("Arial");
stroke("red")
text("Press up arrow to drago milk ",250,50);

if (keyCode === 38) {
  foods--;
//writeStock();
dog.addImage(dog2)
  
  }
  //if (keyWentUp = UP_ARROW){
    //foods=19
    //}
}


function writeStock(x){
  if(x<=0){
  x=0;
  }else{
    x=x-1
  }
database.ref('/').update({
  food:x
})
}
