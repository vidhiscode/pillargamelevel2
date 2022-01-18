var bkg1;
var pillar, pillar1, pillar2, pillar3, pillar4, pillar5, pillar6, pillarImg;
var gem, gemImg;
var dora, doraImg;
var gameState = "play";


function preload() {
bkg1 = loadImage("cave.jpg");
pillarImg = loadImage("pillar.png");
gemImg = loadImage("gem1.png");
doraImg = loadImage("dora.png");
}

function setup() {
    createCanvas(1200,600);
   

   pillar1 = createSprite(200,600,50,50);
   pillar1.addImage("pillar",pillarImg);
   pillar1.scale = 0.5;
  // pillar1.debug = true;
   pillar1.setCollider("rectangle",0,0, 150, pillar1.height -100);

   pillar2 = createSprite(400,500,50,50);
   pillar2.addImage("pillar2",pillarImg);
   pillar2.scale = 0.5;
  // pillar2.debug = true;
   pillar2.setCollider("rectangle",0,0, 150, pillar2.height -100);


   pillar3 = createSprite(600,700,50,50);
   pillar3.addImage("pillar3",pillarImg);
   pillar3.scale = 0.5;
   //pillar3.debug = true;
   pillar3.setCollider("rectangle",0,0, 150, pillar3.height -100);


   pillar4 = createSprite(800,600,50,50);
   pillar4.addImage("pillar4",pillarImg);
   pillar4.scale = 0.5;
  // pillar4.debug = true;
   pillar4.setCollider("rectangle",0,0, 150, pillar4.height -100);


   pillar5 = createSprite(1000,700,50,50);
   pillar5.addImage("pillar5",pillarImg);
   pillar5.scale = 0.5;
  // pillar5.debug = true;
   pillar5.setCollider("rectangle",0,0, 150, pillar5.height -100);


   gemSprite = createSprite(1000,473,50,50);
   gemSprite.addImage(gemImg);
   gemSprite.scale = 0.1;

   dora = createSprite(200,345,50,50);
   dora.addImage(doraImg);
   dora.scale = 0.2;
}

  
function draw() {
background(bkg1);
drawSprites();

if(gameState === "play"){
//arrow keys control dora
if(keyDown("up")){
    dora.velocityY = -3;
    }
    
    if(keyDown("right")){
    dora.x = dora.x +3;
    dora.y = dora.y -3;
    }
    
    
    //colliding
    dora.collide(pillar1);
    dora.collide(pillar2);
    dora.collide(pillar3);
    dora.collide(pillar4);
    dora.collide(pillar5);
    
    
    dora.velocityY = dora.velocityY + 0.1;
    
    //dora respawn if lose
    if(dora.y > 590){
    dora.x = 200;
    dora.y = 345;
    }
    
    //dora retrieve gem
     if(dora.isTouching(gemSprite)){
        gemSprite.destroy();
        gameState = "level2";
     }
    
}
 if(gameState === "level2"){
    dora.x = 200;
    dora.y = 345;

 }




fill("white");
text(mouseX + "," + mouseY, mouseX, mouseY);
}