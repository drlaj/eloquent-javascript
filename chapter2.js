/* 
  Eloquent Javascript
  Chapter 2 - Program Structure
*/

function triangle1(n) {
  var line = "",
      i = 1;

  for (i; i <= n; i++) { 
    line += "#";
    console.log(line);
  }
}

triangle1(7);
