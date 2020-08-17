  class Food{
    constructor(){
    this.foodStock = 0;
    this.lastFed;
    this.image= loadImage("images/Milk.png");
    }
    getFoodStock(){
        return this.foodStock;
    }
    updateFoodStock(foodStock){
        this.foodStock = foodStock;
    }
    deductFood(){
        if(this.foodStock > 0){
         this.foodStock = foodStock-1;
        }
    }
    getFedTime(lastFed){
        this.lastFed = lastFed;
    }
    display(){
        var x=80 , y=100;

        imageMode(CENTER);
        image(this.image, 625,340,90,90);

        if(this.foodStock!=0){
            for(var i=0; i<this.foodStock;i++){
                if(i%10==0){
                    x=80
                    y=y+50;
                }
            image(this.image, x,y,60,60);
            x=x+30;
            }
        }
    }
}