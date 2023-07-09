// BigInt

let myno = BigInt(12);
let Myno = 123n;
console.log(myno);
console.log(Number.MAX_SAFE_INTEGER);
console.log(myno+ Myno);


//TypeError: Cannot mix BigInt and other types, 
//use explicit conversions

//we use big int if the value exceed the max safe integer