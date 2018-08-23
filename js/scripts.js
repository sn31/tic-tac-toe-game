function Player(mark) {
  this.mark = mark;
}

function Board() {
  this.currentBoard = [[], [], []];
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
var getCoordinate = function (id) {
  return coordinatePair = [id[1], id[3]];
}

Board.prototype.checkWinCondition = function () {
  // Check horizontal solutions
  for (var i = 0; i < 3; i++) {
    var j = 0;
    for (j = 0; i < 3; j++) {
      if (this.currentBoard[i][j] !== Object.keys(players)[currentId]) {
        break;
      }
    }
    if (j === 3) {
      return true;
    }
  }
  // Check vertical solutions
  for (var i = 0; i < 3; i++) {
    var j = 0;
    for (j = 0; i < 3; j++) {
      if (this.currentBoard[j][i] !== Object.keys(players)[currentId]) {
        break;
      }
    }
    if (j === 3) {
      return true;
    }
  }
  // Check for identical diagonal
  var i = 0;
  for (i = 0; i < 3; i++) {
    if (this.currentBoard[i][i] !== Object.keys(players)[currentId]) {
      break;
    }
  }
  if (i === 3) {
    return true;
  }

  for (i = 0; i < 3; i++) {
    if (this.currentBoard[2 - i][i] !== Object.keys(players)[currentId]) {
      break;
    }
  }
  if (i === 3) {
    return true;
  }
  return false;
}

Board.prototype.resetBoard = function () {
  this.currentBoard = [[], [], []];
}
Board.prototype.checkDrawCondition = function () {
  var j = 0;
  for (var i = 0; i < this.currentBoard.length; i++) {
    if (this.currentBoard[i].length === this.currentBoard.length) {
      j++;
    }
  }
  if (j === 3) {
    return true;
  }
  return false;
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
    if (newBoard.checkDrawCondition()) {
      $("#result").append("It's a draw! </br>")
      $(".col-md-4").empty();
      newBoard.resetBoard();
    }
    else if (newBoard.checkWinCondition()) {
      $("#result").append("Player " + Object.keys(players)[currentId] + " won!</br>");
      $(".col-md-4").empty();
      newBoard.resetBoard();
    }
  })

  $("#clearResult").click(function () {
    $("#result").empty();
  })
  // Wrap every letter in a span
  $('.ml16').each(function () {
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });

  anime.timeline({ loop: true })
    .add({
      targets: '.ml16 .letter',
      translateY: [-100, 0],
      easing: "easeOutExpo",
      duration: 1400,
      delay: function (el, i) {
        return 30 * i;
      }
    }).add({
      targets: '.ml16',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
});
