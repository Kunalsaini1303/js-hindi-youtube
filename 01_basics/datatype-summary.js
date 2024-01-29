//primitive    7 types
// string, number, boolean, null, undefined, symbol, bigint

const username ="kunal"
console.log(typeof username ) //string

const score = 100
console.log(typeof score); // number 


const scorevalue = 100.3
console.log(typeof scorevalue); // number 

const isloggedin = false 
console.log(typeof isloggedin); // boolean 


const outsidetemp = null
console.log(typeof outsidetemp) // null 


let useremail;
console.log(useremail) // undefined


const id = Symbol ("123")
const anotherid = Symbol ("123")
console.log(  id===anotherid); // false

const bignumber = 98745687456213548795n
console.log(typeof bignumber); //BigInt








//refrence or non reference
//array, objects, functions