// call apply bind 
const Name = {
    firstname: "Vinayak",
    lastname : "Hegde",
}

Name.printFullName();

let printFullName =  function(){
        console.log(this.firstname + " "+ this.lastname);
    }

let name2 = {
    firstname: "Sachin",
    lastname: "Tendulkar",
}

//function borrowing 
Name.printFullName();