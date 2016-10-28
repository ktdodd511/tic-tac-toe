// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  console.log('js file is connected');


  box1 = $('#box1');

  box1.click(function() {
    alert("it works!");
  });

$('#reset').click(function() {
  location.reload();
});

