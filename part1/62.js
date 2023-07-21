// arrow function 

const user1 = {
    firstName: "vinayak",
    age: 20,
    about : () =>{
        console.log(this.firstName, this.age);
    }
}

user1.about();