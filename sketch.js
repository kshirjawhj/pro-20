var cat1, cat2 , cat3
var mouse1, mouse2, mouse3
var bg
var tom , jerry

function preload() {
    //load the images here
 cat1 = loadImage("images/cat1.png");
 cat2 = loadAnimation("images/cat2.png", "images/cat3.png");
 cat3 = loadImage("images/cat4.png");

 mouse1 = loadImage("images/mouse1.png");
 mouse2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
 mouse3 = loadImage("images/mouse4.png");

 bg = loadImage("images/garden.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(900,600);
    tom.addAnimation("tomsleeping", cat1);
    tom.scale = 0.25;
    jerry = createSprite(200,600);
    jerry.addAnimation("jerrystanding", mouse1);
    jerry.scale= 0.15;

    CatWalk();

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0;
        tom.addAnimation("tomlastimage", cat3);
        tom.x= 300;
        tom.scale= 0.2;
        tom.changeAnimation("tomlastimage");
        jerry.addAnimation("JERRYLASTIMAGE", mouse3);
        jerry.scale= 0.15; 
        jerry.changeAnimation("JERRYLASTIMAGE");
    }

    drawSprites();
}


function CatWalk(){
    jerry.addAnimation("mouseteasing", mouse2);
    jerry.changeAnimation("mouseteasing");
    jerry.frameDelay = 25;
    tom.velocityX = -5;
    tom.addAnimation("catrunning", cat2);
    tom.changeAnimation("catrunning");
}




