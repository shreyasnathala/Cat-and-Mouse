var bg
var cat,catAnimation
function preload() {
    //load the images here
    bg=loadImage("images/garden.png")
    catAnimation=loadAnimation("images/cat1.png","images/cat2.png","images/cat3.png","images/cat4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(500,600,20,20);
    cat.addAnimation("cat",catAnimation)
    cat.scale = 0.4

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
