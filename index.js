function myFunction() {
    var x = Number.MAX_SAFE_INTEGER + 1, text;
  
    x = document.getElementById("numb").value;

    if (isNaN(x) || x < 1) {
      text = "Input not valid";
      } else if 
      (x % 15 == 0) {
      text = "FizzBuzz";
        } else if 
      (x % 5 == 0) {
      text = "Buzz";
        } else if 
          (x % 3 == 0) {
      text = "Fizz";
    } else {
      text = "Try Again";
    }
    document.getElementById("demo").innerHTML = text;
  }