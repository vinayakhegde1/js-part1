// if else condition
let age = 17;

if(age>=18){
    console.log("User can play ddlc");
}else{
    console.log("User can play Mario");
}
// example2
let num = 14;

if(num%2==0){
    console.log("even");
}else{
    console.log("odd");
}

//example 3
let num2= 15;

if(num2%2==0){
    console.log("even");
}else{
    console.log("odd");
}

// Check if input variable is a number or not

let validnumber = 20;

if(isNaN(validnumber)){
    console.log(`${validnumber} is not a number`);

}else{
    console.log(`${validnumber} is a valid number`);
}

// Find the largest of two number

function findLargest(num1,num3){

    if(num1 > num3){
        console.log(`${num1} is the largest number`);
    }

    else if(num3 > num1){
        console.log(`${num3} is the largest number`)
    }
    else{
    console.log("both are equal");
}
}
