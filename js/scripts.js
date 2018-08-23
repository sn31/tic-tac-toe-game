function Player(mark) {
  this.mark = mark;
}

function Board() {
  this.initialBoard = [[], [], []]
  this.currentBoard = [[], [], []]
}
var playerX = new Player("X");
var playerO = new Player("O");
var newBoard = new Board();
var players = {
  "X": playerX,
  "O": playerO
}
var currentId = 0;
var switchPlayer = function () {
  if (currentId === 1) {
    currentId = 0;
  }
  else {
    currentId = 1;
  }
}
var getCoordinate = function(id) {
  return coordinatePair = [id[1],id[3]];
}
$(document).ready(function () {
  $(".col-md-4").click(function (event) {
    switchPlayer();
    switch (Object.keys(players)[currentId]) {
      case "X": 
          $("#" + event.target.id).text("X");
        break;
      case "O":
          $("#" + event.target.id).text("O");
        break;
    }
    var coordinatePair = getCoordinate(event.target.id);
    
    newBoard.currentBoard[coordinatePair[0]][coordinatePair[1]] = $("#" + event.target.id).text();
    console.log(newBoard.currentBoard[coordinatePair[0]][coordinatePair[1]]);
    console.log(newBoard.currentBoard);
  })
  
});
