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
      if ((rank + file) % 2 == 0) { 
        result += "#";
      }
      else {
        result += " ";
      }
    }
    result += "\n";
  }
  return result;
}
var board = "";
board = chessboard(8);
console.log(board);

/*
  Chapter 3 - Functions
*/

// 3.1 MINIMUM
function min(a, b) {
  return (a <= b ? a : b);
}
console.log(min(1,2));

// 3.2 RECURSION
function isEven(number) {
  if (number == 0)
    return true;
  else if (number == 1)
    return false;
  else if (number < 0)
    return isEven(-number);
  else
    return isEven(number - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-10));

// 3.3 BEAN COUNTING
function countChar(str, char) {
  var count = 0;

  for (var i = 0; i < str.length; i++)
    if (str.charAt(i) == char) 
      count++;

  return count;
}

function countBs(str) {
  return countChar(str, "B");
}

var stringWith5Bs = "ABCabcABCabcABCabcABCabcABC";
var stringWith3cs = "abcABCabcABCabcABC";

var count = countBs(stringWith5Bs);
console.log(stringWith5Bs + " contains " + count + " Bs");

var char = "c";
count = countChar(stringWith3cs, char);
console.log(stringWith3cs + " contains " + count + " " + char + "s");

/* 
  Chapter 4 - Data Structures: Objects and Arrays
*/

// 4.1 THE SUM OF A RANGE
function range(start, end, step) {
  var array = [];

  if (start === end && typeof(start) == "number" && typeof(end) == "number")
    return array;

  step = (typeof(step) === "undefined") ? 1 : step;

  if (step == 0) {
    return array;
  }
  else if (step > 0) {
    for (var i = start; i <= end; i+= step)
      array.push(i);
  }
  else { 
    for (var i = start; i >= end; i+= step)
      array.push(i);
  }

  return array;
}

function sum(array) {
  var total = 0;

  for (var i = 0; i < array.length; i++)
    total += array[i];

  return total;
}

var array = [];
var total = 0;

array = range(1,10);
total = sum(array);
console.log(array);
console.log(total);

array = range(5,2,-1);
total = sum(array);
console.log(array);
console.log(total);
