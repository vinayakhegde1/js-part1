// function inside function 

const app = () =>{
    const myFunc = () =>{
        console.log("hello from myFunc")
    }
    const mul = (num1 ,num2) => num1*num2;
    
    console.log("inside app");
}
app();