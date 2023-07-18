//methods 
//function inside object is called a method


 function personInfo(){
        console.log(`person name is ${this.firstName} & ${this.age} is 20`);
    }

const person1 = {
    firstName: "vinayak",
    age : 20 ,
    about :personInfo
} 
const person2 = {
    firstName: "amit",
    age : 19 ,
    about :personInfo
} 
const person3 = {
    firstName: "harsh",
    age : 18 ,
    about :personInfo
} 
person2.about();
person1.about();
person3.about();