// onject inside Array
// very useful in real world application

const users = [
    {userId:1,firstName: 'vinayak', gender: 'male'},
    {userId:2,firstName: 'harshit', gender: 'male'},
    {userId:3,firstName: 'mohit', gender: 'male'},
]
for(let user of users){
    console.log(user.firstName);
}

