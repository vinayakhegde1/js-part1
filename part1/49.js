// reduce method 

const numbers = [1,3,4,5,6,7];

const sum = numbers.reduce((accumulator , currentValue)=>{
    return accumulator + currentValue;
});

console.log(sum);

//understanding
// accumulator , currentValue  , return
// 1                3               4
// 4                4               8
//8                 5               13
//13                6               19
//19                7               26

//exp2

const userCart = [
    {productId : 1, productName: "Mobile" , price: 12000},
    {productId : 2, productName: "Laptop" , price: 22000}, 
    {productId : 3, productName: "TV" , price: 32000}, 
]

const totalAmount = userCart.reduce((totalPrice , CurrentProduct)=>{
        return totalPrice + CurrentProduct.price 
}, 0);

console.log(totalAmount);