let abc = "33";
console.log(typeof(abc));
console.log(abc);

abc = Number(abc);

console.log(typeof(abc));
console.log(abc);

console.log("---------");

abc="sruti33"
console.log(typeof(abc));
console.log(abc);

abc = Number(abc);

console.log(typeof(abc));
console.log(abc);
/*

string
33
number
33
---------
string
sruti33
number
NaN

*/

// true=1
// false=0

console.log(Boolean("")); //false

console.log("------------------------");

abc=256;
let a="hi" , b="6";

console.log(true , +true , +"" , +abc, +a, +b); // true 1 0 256 NaN 6