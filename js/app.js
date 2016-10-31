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
  var $box1 = $('#box1');
  var $box2 = $('#box2');
  var $box3 = $('#box3');
  var $box4 = $('#box4');
  var $box5 = $('#box5');
  var $box6 = $('#box6');
  var $box7 = $('#box7');
  var $box8 = $('#box8');
  var $box9 = $('#box9');


    if ($box1.text() === $box2.text() && $box2.text() === $box3.text() || $box1.text() === $box4.text() && $box4.text() === $box7.text()
      || $box2.text() === $box5.text() && $box5.text() === $box8.text() || $box3.text() === $box6.text() && $box6.text() === $box9.text()
      || $box1.text() === $box5.text() && $box5.text() === $box9.text() || $box3.text() === $box5.text() && $box5.text() === $box7.text()) {
      return true;
    
   } else {
      return false;
    }
  

}



function isBoxEmpty() {
  var emptyBoxes = false;
    for (var i=0; i<$boxes.length; i++){
      if ($boxes.eq(i).text() === ""){
        emptyBoxes = true;
      }
    }
    return emptyBoxes;
  }



      if (determineWinner()) {
        alert(player + " won!");
        resetGame();
      } else if (isBoxEmpty()) {
        turn();
      } else {
        alert("No winner!");
        resetGame();
      }
    




  $('#reset').click (function() {
    location.reload();
  });


    $boxes.click (function() {
    console.log('player just went');
    if ($(this).text() === '') {
      $(this).text(player);
      $boxes.addClass(player);
      turn();
    }
    
  });








  });


  






