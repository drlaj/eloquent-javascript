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

// 4.2 REVERSING AN ARRAY
function reverseArray(array) {
  var result = [],
      lastIdx = array.length - 1,
      i;

  for (i = lastIdx; i >= 0; i--)
    result.push(array[i]);

  return result;
}

function reverseArrayInPlace(array) {
  var steps = Math.floor(array.length / 2),
      lastIdx = array.length - 1,
      i,
      tmp;

  for (i = 0; i < steps; i++) {
    tmp = array[i];
    array[i] = array[lastIdx - i];
    array[lastIdx - i] = tmp;
  }
  return array;
}

array = range(1,20);

console.log(array);
result = reverseArray(array);
console.log(result);

console.log(array);
result = reverseArrayInPlace(array);
console.log(result);

// 4.3 A LIST
function arrayToList(array) {
  var list = null,
      lastIdx = array.length - 1;
  
  for (var i = lastIdx; i >= 0; i--)
    list = { value: array[i], rest: list };

  return list;
}

function listToArray(list) {
  var array = [];

  for (var node = list; node != null; node = node.rest) {
    array.push(node.value);
  }

  return array;
}

function prepend(element, list) {
  var result = {};

  result = { value: element, rest: list };

  return result;
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value
  else
    return nth(list.rest, n - 1)
}

// 4.4 DEEP COMPARISON
function deepEqual(obj1, obj2) {
  var obj1Props = 0,
      obj2Props = 0;

  if (obj1 === obj2)
    return true;

  if (obj1 == null || obj2 == null || typeof(obj1) != "object" || typeof(obj2) != "object")
    return false;

  for (var prop in obj1)
    obj1Props += 1;

  for (var prop in obj2) {
    obj2Props += 1;
    if (!(prop in obj1) || !deepEqual(obj1[prop], obj2[prop])) {
      return false;
    }
  }

  return (obj1Props == obj2Props);
}

/*
  Chapter 5 - Higher-order Functions
*/

// 5.1 FLATTENING
var nestedArrays = [[1,2,3],[4,5,6,7],[8,9,10]];
var result = [];
result = nestedArrays.reduce(function(collapsed, current) {
  return collapsed.concat(current);
}, []);

console.log(result);

// 5.2 MOTHER-CHILD AGE DIFFERENCE
var ANCESTRY_FILE = "[\n  " + [
'{"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"}',
'{"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"}',
'{"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"}',
'{"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"}',
'{"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
'{"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null}',
'{"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null}',
'{"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"}',
'{"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"}',
'{"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"}',
'{"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null}',
'{"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"}',
'{"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"}',
'{"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"}',
'{"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null}',
'{"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
'{"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"}',
'{"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"}',
'{"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
'{"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
'{"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null}',
'{"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"}',
'{"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"}',
'{"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"}',
'{"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
'{"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
'{"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"}',
'{"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
'{"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
'{"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
'{"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"}',
'{"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"}',
'{"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
'{"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"}',
'{"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"}',
'{"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
'{"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"}',
'{"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"}',
'{"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}'
].join(",\n  ") + "\n]";

var ancestry = JSON.parse(ANCESTRY_FILE);

function average(array) {
  function sum(a, b) { return a + b; }
  return array.reduce(sum) / array.length;
}

var byName = [];
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var peopleWithMothers = ancestry.filter(function(person) {
  return byName[person.mother] != null;
});

var ageDifferences = peopleWithMothers.map(function(person) {
  return person.born - byName[person.mother].born;
});

var averageAgeDifferences = average(ageDifferences);
console.log(Math.floor(averageAgeDifferences));
