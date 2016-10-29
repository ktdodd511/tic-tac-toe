// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  console.log('js file is connected, woo!');


//if there's it's an odd number, it's x's turn. even number, it's o's turn.
// while (count is > 10) 
// run function game 



$('#reset').click(function() {
  location.reload();
});


function ticTacToe() {

  //all of the boxes
  var $boxes = $("box");

  var player1 = 'X';
  var player2 = 'O';


  for (var count = 0; count > 10; count++) {
    if (count % 2 === 0) {
      boxes.click(function() {
      console.log("I clicked something " + count);
      boxes.text('X');
    });
      boxes.addClass('theX');

    } else {
      boxes.click(function() {
      console.log("I clicked something else " + count);
      boxes.text('O');
    });
      boxes.addClass('theO');
    }
  }

}

ticTacToe();















});
