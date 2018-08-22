function Player(mark) {
  this.mark = mark;
}

function Board() {
  this.row =[1,2,3];
  this.col =[1,2,3];
}

function Game() {
  this.playerX = playerX;
  this.playerO = playerO;
  this.currentPlayer = currentPlayer;
  this.moves = 1;
}
var playerX = new Player("X");
var playerO = new Player("O");

var currentId = 0;
var switchPlayer = function(){
  if (currentId === 1) {
    currentId = 0;
  }
  else {
  currentId = 1;
  }
}
var players = {
  "X": playerX,
  "O": playerO
}
$(document).ready(function(){

  switch(Object.keys(players)[currentId]) {
    case "X" :
    $(".col-md-4").click(function(event) {
      $("#" + event.target.id).text("X");
    });

    break;
    case "O" :
    $(".col-md-4").click(function(event) {
      $("#" + event.target.id).text("O");
    });

    break;
  }
});
