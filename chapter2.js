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

// 2.3 CHESSBOARD
function chessboard(n) {
  var result = "";

  for (var rank = 1; rank <= n; rank++) {
    for (var file = 1; file <= n; file++) {
      if (rank % 2 == 0) {
        if (file % 2 == 0) {
          result += "#";
        }
        else {
          result += " ";
        }
      }
      else {
        if (file % 2 == 0) {
          result += " ";
        }
        else {
          result += "#";
        }
      }
    }
    result += "\n";
  }
  return result;
}
var board = "";
board = chessboard(8);
console.log(board);

