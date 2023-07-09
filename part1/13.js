// and or operator

let firstName = "vinayak";
let age = 20;

// if(firstName[0] === "v"){
//     console.log("your name starts with v");
// }

//now using with and or operator

// if(firstName[0] === "v" && age>18){
//     console.log("Name starts with v and age is above 18");
// }
// in && both condition should be true if one is false then the entire statement is false


if(firstName[0] === "v" || age>18){
    console.log("inside if");
}else{
    console.log("inside else");
}

// in || one of the condition must be true