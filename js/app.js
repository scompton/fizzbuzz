$(document).ready(function() {
  for (var i=1; i<101; i++) {
    var out;
    if (i%3==0 && i%5==0) out = "fizz buzz";
    else if (i%3==0) out = "fizz";
    else if (i%5==0) out = "buzz";
    else out = i;
    $('body').append('<p>'+out+'</p>');
  }
});
