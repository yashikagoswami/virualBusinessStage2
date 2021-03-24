const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var canvas, backgroundImg;
var engine,world;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var form2;
var sprite1;

function preload(){
  backgroundImg = loadImage("images/background.jpg");
  boardImg = loadImage("images/board.png");
  logoImg = loadImage("images/logo.png");
  dice1 = loadImage("images/dice1.jpg");
  dice2 = loadImage("images/dice2.jpg");
  dice3 = loadImage("images/dice3.jpg");
  dice4 = loadImage("images/dice4.jpg");
  dice5 = loadImage("images/dice5.jpg");
  dice6 = loadImage("images/dice6.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  engine = Engine.create();
  world = engine.world;
  
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(backgroundImg);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();

    var board = createSprite(displayWidth/2-10,displayHeight/2-60,1,1);
    board.addImage(boardImg);
    board.scale=0.7;

    var logo = createSprite(displayWidth/2-10,displayHeight/2-60,1,1);
    logo.addImage(logoImg);
    logo.scale=0.5;

    form2 = new Form2();
    form2.display();
    //dicePlayer1 = new Dice();
    //dicePlayer1.display();

    //player1dice
       var player1dice = createSprite(displayWidth/2+420,displayHeight/2-50,50,50);
       player1dice.shapeColor="white";
       if (mousePressedOver(player1dice)) {
         var rand = Math.round(random(1,6));
       switch(rand) {
         case 1: player1dice.addImage(dice1);
                 break;
         case 2: player1dice.addImage(dice2);
                 break;
         case 3: player1dice.addImage(dice3);
                 break;
         case 4: player1dice.addImage(dice4);
                 break;
         case 5: player1dice.addImage(dice5);
                 break;
         case 6: player1dice.addImage(dice6);
                 break;
         default: break;
       }
       }
       player1dice.scale=1;

    //player2dice
    var player2dice = createSprite(displayWidth/2-440,displayHeight/2-50,50,50);
    player2dice.addImage(dice1);
    if (mousePressedOver(player2dice)) {
      var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: player2dice.addImage(dice1);
              break;
      case 2: player2dice.addImage(dice2);
              break;
      case 3: player2dice.addImage(dice3);
              break;
      case 4: player2dice.addImage(dice4);
              break;
      case 5: player2dice.addImage(dice5);
              break;
      case 6: player2dice.addImage(dice6);
              break;
      default: break;
    }
    }
    player2dice.scale=1;

    Engine.update(engine);
    drawSprites()
    
  sprite1 = new sprites(displayWidth/2-250,displayHeight/2-300,100,100);
  sprite1.shapeColor="black"
  sprite1.display();

  sprite2 = new sprites(displayWidth/2-130,displayHeight/2-300,100,100);
  sprite2.shapeColor="black"
  sprite2.display();

  sprite3 = new sprites(displayWidth/2-10,displayHeight/2-300,100,100);
  sprite3.shapeColor="black"
  sprite3.display();

  sprite4 = new sprites(displayWidth/2+110,displayHeight/2-300,100,100);
  sprite4.shapeColor="black"
  sprite4.display();

  sprite5 = new sprites(displayWidth/2+230,displayHeight/2-300,100,100);
  sprite5.shapeColor="black"
  sprite5.display();

  sprite6 = new sprites(displayWidth/2+230,displayHeight/2-180,100,100);
  sprite6.shapeColor="black"
  sprite6.display();

  sprite7 = new sprites(displayWidth/2+230,displayHeight/2-60,100,100);
  sprite7.shapeColor="black"
  sprite7.display();

  sprite8 = new sprites(displayWidth/2+230,displayHeight/2+60,100,100);
  sprite8.shapeColor="black"
  sprite8.display();

  sprite9 = new sprites(displayWidth/2+230,displayHeight/2+180,100,100);
  sprite9.shapeColor="black"
  sprite9.display();

  sprite10 = new sprites(displayWidth/2+110,displayHeight/2+180,100,100);
  sprite10.shapeColor="black"
  sprite10.display();

  sprite11 = new sprites(displayWidth/2-10,displayHeight/2+180,100,100);
  sprite11.shapeColor="black"
  sprite11.display();

  sprite12 = new sprites(displayWidth/2-130,displayHeight/2+180,100,100);
  sprite12.shapeColor="black"
  sprite12.display();

  sprite13 = new sprites(displayWidth/2-250,displayHeight/2+180,100,100);
  sprite13.shapeColor="black"
  sprite13.display();

  sprite14 = new sprites(displayWidth/2-250,displayHeight/2+60,100,100);
  sprite14.shapeColor="black"
  sprite14.display();

  sprite15 = new sprites(displayWidth/2-250,displayHeight/2-60,100,100);
  sprite15.shapeColor="black"
  sprite15.display();

  sprite16 = new sprites(displayWidth/2-250,displayHeight/2-180,100,100);
  sprite16.shapeColor="black"
  sprite16.display();
    
  }
  
}