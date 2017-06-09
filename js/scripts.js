function numCheck(number) {
  var result = ""
  if (isNaN(number)) {
    result = "Please enter a valid number";
  };
  return result;
};







// front end logic //

$(document).ready(function() {
  $("#pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number-string").val());
    console.log(number);
    var check = numCheck(number);
    $("#result").text(check);

  });
});
