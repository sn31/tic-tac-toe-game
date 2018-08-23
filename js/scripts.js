function Player(mark) {
  this.mark = mark;
}

function Board() {
  this.initialBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  this.currentBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
}
var playerX = new Player("X");
var playerO = new Player("O");

var newBoard = new Board();
var currentId = 0;
var switchPlayer = function () {
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
    console.log(event.target.id);
  })
  
});
