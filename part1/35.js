// nested destructuring

const users = [
    {userId:1,firstName: 'vinayak', gender: 'male'},
    {userId:2,firstName: 'harshit', gender: 'male'},
    {userId:3,firstName: 'mohit', gender: 'male'},
]

const [{firstName: user1firstName, userId} , , {gender}] = users;
console.log(user1firstName);
console.log(gender);
console.log(userId);
