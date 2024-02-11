const name = "kunal"
const repocount = 5

//console.log( name + repocount + "value"); //outdated 

console.log(`hello my name is ${name} and my repo 
count is ${repocount}`) // use this 

//string interpolation = insereting string or value into an exisitng string
//injectiong variable into the placehoders (${_})

const GameName = new String('kunal')

console.log (typeof "GameName") // op is string 

console.log(GameName[0]); // key value pair acces // op is k 
// console.log(GameName.__proto__);


console.log(GameName.length); // prints length// op is 5 
console.log(GameName.toUpperCase()); // IN UPPER CASE // OP IS KUNAL
console.log(GameName.charAt(2)); //to find which char at what no //  op is n
console.log(GameName.indexOf('a')) // to find asked cahr at what postion // op is 3

const onestring = GameName.substring(0, 4) // use to divide string // op is kuna
console.log(onestring);

const twostring = GameName.slice( 0,4) // negative values can be used// op is kuna
console.log(twostring);

const threestring = "  kunal   "
console.log(threestring)
console.log(threestring.trim()) // trim removes the spaces from starting and end

const fourstring = "kunal saini 20"
console.log(fourstring) 
console.log(fourstring.replace('20','soon to be 21')) // replaces the searched to a new word 

console.log(fourstring.includes("kunal")) //finds the searched word is aavailable or not
console.log(fourstring.includes("hello"))

