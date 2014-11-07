/* 
  Eloquent Javascript
  Chapter 2 - Program Structure
*/

// 2.1 LOOPING A TRIANGLE

function triangle1(n) {
  var line = "",
      i = 1;

  for (i; i <= n; i++) { 
    line += "#";
    console.log(line);
  }
}
triangle1(7);

function triangle2(n) {
  var line = "#";

  for (line; line.length <= n; line += "#") {
    console.log(line);
  }
}
triangle2(7);

// 2.2 FIZZBUZZ

function fizzBuzz(n) {
  var i = 1;

  for (i; i <= n; i++) {
    var output = "";
    if (i % 3 == 0) {
      output += "Fizz";
    }
    if (i % 5 == 0) {
      output += "Buzz";
    }
    console.log(output || i);
  }
}
fizzBuzz(100);
