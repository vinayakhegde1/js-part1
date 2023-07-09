// lexical scope 
// lexical scope is a fundamental concept in programming that determines 
// the accessibility of variables and functions within a program 
const myvar = "value1";             


const myApp = () =>{
    

    const myFunc= () => {
        // const myvar = "value69";
        console.log("inside myFunc" , myvar);
    }

    console.log(myvar);
    myFunc();
}

myApp();


