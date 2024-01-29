//  console.log("2">1); //op true 
//  console.log("02">1); //op true 


console.log(null>0); // op false 
console.log(null == 0); // fasle 
console.log(null>=0); // true 
/*
 the reason is that an equality check == and comparision ><>=<= work differently
 comparision converts null to a number treating it as 0 thats why null(3) is true 
 and null(1) >is false */


console.log("2" === 2); // strict check checks the data type also 




