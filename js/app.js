$(document).ready(function() {
  var n = NaN;
  while (isNaN(n) || n<1) {
    var ns = prompt("Enter a value >= 1:");
    n = parseInt(ns);
  }
  runFizzBuzz(n);
});

function runFizzBuzz(n) {
  for (var i=1; i<=n; i++) {
    var out;
    if (i%3==0 && i%5==0) out = "fizz buzz";
    else if (i%3==0) out = "fizz";
    else if (i%5==0) out = "buzz";
    else out = i;
    $('body').append('<p>'+out+'</p>');
  }
}
