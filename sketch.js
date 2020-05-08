var canvas;
var gameState=0;
var playerCount;
var database;
var player1;
var form;
var game;

function setup(){
    database=firebase.database();
    canvas=createCanvas(400,400)
    game=new Game();
    game.getState();
    game.start();
}
function draw(){
    
}