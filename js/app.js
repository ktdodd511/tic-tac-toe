// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  console.log('js file is connected, woo!');




$('#reset').click(function() {
  location.reload();
});




  //all of the boxes
  var $boxes = $(".box");

  var player1 = 'X';
  var player2 = 'O';

  count = 0;
    
  function turn() {
    if (count % 2 === 0) {
      xTurn();
      count +1;
      
    } else {
      oTurn();
      count +1;
      
    }

  }

  function xTurn() {

    $boxes.click (function() {
    console.log("I clicked something " + count);
    $(this).text(player1);
    $boxes.addClass('theX');
    
  });
}
  
  function oTurn() {

    $boxes.click(function() {
    console.log("I clicked something else " + count);
    $boxes.text(player2);
    $boxes.addClass('theO');
    
  });

}

      
    
  

});



