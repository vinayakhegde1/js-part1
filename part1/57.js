// optional chaining 

const user = {
    firstName : "Vinayak",
    address : {flatnumber: "445"}
}

console.log(user?.firstName);
console.log(user?.address?.flatnumber);