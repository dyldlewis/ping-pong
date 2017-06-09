// back end logic //

function counter(num) {
  var result = []
  if (isNaN(num)) {
    alert("Please enter a valid number");
  } else {
      for (i = 1; i <= num; i += 1) {
        if (i % 15 === 0) {
        result.push("pingpong")
      } else if (i % 3 == 0) {
        result.push("ping")
      } else if (i % 5 === 0) {
        result.push("pong")
      } else {
        result.push(i)
        }
      };
    };
  console.log(result)
  return result;
};

var displayArray = function(result) {
  $("#result").empty();
  result.forEach(function(index) {
    $("#result").append("<li>" + index + "</li>")
  });
  return;
};

// front end logic //

$(document).ready(function() {
  $("#pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number-string").val());
    console.log(number);
    // var check = counter(number);
    // $("#result").text(check);
    displayArray(counter(number))
  });
});
