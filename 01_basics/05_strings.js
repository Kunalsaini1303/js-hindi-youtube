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

const twostring = GameName.slice(0, 4) // negative values can be used// op is kuna
console.log(twostring);