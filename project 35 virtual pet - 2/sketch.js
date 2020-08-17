 //Create variables here
var dog;
var dogImg, happyDogImg;
var database, foodS, foodStock;
var backgroundImg;
var lastFed, fedTime;
var foodObj;

function preload(){
  //load images here
  getBg();
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(850, 400);
 
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  foodObj = new Food();
  form = new Form();
  dog = createSprite(700,280,150,150);
  dog.addImage(dogImg);
  dog.scale = 0.3;
  
  feed = createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
  }


function draw() {  
    if(backgroundImg)
    background(backgroundImg);
    foodObj.display();
    fedTime=database.ref('FeedTime');
    fedTime.on("value",function(data){
    lastFed=data.val();
  });
 
  fill(255,255,254);
  textSize(20);
  if(lastFed>=12){
    text("Last Fed : "+ lastFed%12 + " pm", 350,30);
  }
  else if(lastFed==0){
     text("Last Fed : 12 am",350,30);
  }
  else{
     text("Last Fed : "+ lastFed + " am", 350,30);
  }

  drawSprites();  
}


//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}

 //function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}
 

//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDogImg);
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  });  
}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  });
  dog.addImage(dogImg);
}

async function getBg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    if(hour>=06 && hour<=13){
        bg="images/hello3.png";
    }
    else if(hour>=13 && hour<=18){
        bg="images/hello2.png"
    }
    else{
        bg="images/bg.png";
    }
    backgroundImg = loadImage(bg);
}


