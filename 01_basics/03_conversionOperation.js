let score = "33"

console.log(typeof score );
console.log(typeof(score)); //written as method in brkts

let valueinnumber= Number  (score)
console.log(typeof valueinnumber);
console.log(valueinnumber); 

// "33" => 33
// "33abc" => NaN (not a number)
// true => 1; false => 0

let isloggedin = "kunal"

let booleanisloggedin = Boolean (isloggedin)
console.log(booleanisloggedin);

// 1 converted to true in boolean 
// 0 converted to false in boolean 
// " " empty string converted in false
// "kunal" converted in true 

let somenumber = 33
let stringnumber = String (somenumber)
console.log(stringnumber);
console.log(typeof (stringnumber));

/**** oprations ****/

let value = 3
let negvalue = -value
console.log(negvalue);

/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);
*/

let str1 = "kunal"
let str2 = " saini"
 
let str3 = str1+str2
console.log(str3);

/*

console.log("1"+2); //op will be 12
console.log(1+"2"); //op will be 12
console.log("1"+2+2); // op will be 122
console.log("1"+(2+2)); // op will be 14
console.log(1+2+"2"); // op will be 32
console.log(1+2+"2"+(2+2)); //op will be 324

*/



/*
console.log(+true) // op is 1
console.log(+""); // op is 0
*/

/*
let gamecounter = 100
gamecounter++;
console.log(gamecounter); 

mdn js incremental oprator 
*/

/*
let a = 10
b = a++
console.log(a,b); //op is 11 10 returns the value before incrementing.

let x = 10
y = ++x
console.log(x,y); //op is 11 11 returns the value after incrementing.
*/






