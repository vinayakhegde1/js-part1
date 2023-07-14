// every method 
const numbers= [2,4,6,8,10];


const ans = numbers.every((number)=>number%2===0);
console.log(ans);


//every method returns true because all the elements in the array is even number
//if one element is odd in the array then it returns false



//exp2
const userCart = [
    {productId : 1, productName: "Mobile" , price: 12000},
    {productId : 2, productName: "Laptop" , price: 22000}, 
    {productId : 3, productName: "TV" , price: 32000}, 
]

const product = userCart.every((cartItem)=> cartItem.price < 45000)
console.log(product);