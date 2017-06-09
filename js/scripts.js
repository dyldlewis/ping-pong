$(document).ready(function() {
  $("#pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number-string").val());
    console.log(number)
  });
});
