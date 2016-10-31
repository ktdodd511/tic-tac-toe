// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  console.log('js file is connected, woo!');




  //all of the boxes
  var $boxes = $(".box");

  var player = 'X';

  function turn() {
    if (player === 'X') {
      player = 'O';
    } else {
      player = 'X';
    }
}

function resetGame() {
  $boxes.removeClass('X');
  $boxes.removeClass('O');
  $boxes.text('');
} 
    

  
function determineWinner() {
  var box1 = $('#box1');
  var box2 = $('#box2');
  var box3 = $('#box3');
  var box4 = $('#box4');
  var box5 = $('#box5');
  var box6 = $('#box6');
  var box7 = $('#box7');
  var box8 = $('#box8');
  var box9 = $('#box9');

  if (box1 === box2 && box2 === box3 || box1 === box4 && box4 === box7
    || box2 === box5 && box5 === box8 || box3 === box6 && box6 === box9
    || box1 === box5 && box5 === box9 || box3 === box5 && box5 === box7) {
    alert(player + " has won!");
    resetGame();
  }
 else {
    turn();
  }

}




  $('#reset').click (function() {
    location.reload();
  });

    $boxes.click (function() {
    console.log('player just went');
    $(this).text(player);
    $boxes.addClass(player);
    determineWinner();
    
  });



  

});



