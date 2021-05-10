var bg,tom,t1,t2,t3,jerry,j1,j2,j3;

function preload() {
bg=loadImage("images/garden.png");
t1=loadAnimation("images/cat1.png");
t2=loadAnimation("images/cat2.png","images/cat3.png")
t3=loadAnimation("images/cat4.png");
j1=loadAnimation("images/mouse1.png");
j2=loadAnimation("images/mouse2.png","images/mouse3.png");
j3=loadAnimation("images/mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    tom=createSprite(900,700);
    tom.addAnimation("standing",t1);
    tom.scale=0.2;
    jerry=createSprite(100,700);
    jerry.addAnimation("cheesejerry",j1);
    jerry.scale=0.15;
  tom.addAnimation("lastimage",t3);
  tom.addAnimation("running",t2);
  jerry.addAnimation("lastImagejerry",j3);
  jerry.addAnimation("teasing",j2);
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x-jerry.x<tom.width/2+jerry.width/2){
        tom.velocityX=0;

        tom.changeAnimation("lastimage",t3)
        tom.scale=0.2
        jerry.changeAnimation("lastimagejerry",j3)
        jerry.scale=0.15;
        
        
    }

    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    tom.velocityX=-5;

    tom.changeAnimation("running",t2);
    
    jerry.changeAnimation("teasing",j2);
    
}
  


}
