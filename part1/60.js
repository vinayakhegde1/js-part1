// call apply bind 
const Name = {
    firstname: "Vinayak",
    lastname : "Hegde",
    printFullName: function(){
        console.log(this.firstname + " "+ this.lastname);
    }


}

Name.printFullName();