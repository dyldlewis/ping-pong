function numCheck(number) {
  var result = ""
  if (isNaN(number)) {
    result = "Please enter a valid number";
  };
  return result;
};

function counter(num) {
  result = []
  for (i = 1; i <= num; i += 1) {
    result += i;
  };
  console.log(result)
  return result;
};





// front end logic //

$(document).ready(function() {
  $("#pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number-string").val());
    console.log(number);
    var check = counter(number);
    $("#result").text(check);

  });
});
