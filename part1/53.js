// fill method 
// value ,start, end 
// fill method is used to fill the array with a given static value
//it can be used to fill the entire array or a part of array

const myArray = [1,2,3,4,5,6,7,8];
myArray.fill(0,2,5);
console.log(myArray);

//splice method
// start , delete , insert 
//splice method is used to modify the content of an array
// by inserting an element or by deleting an element
const myarray = ['item1', 'item2', 'item3'];

//delete
myarray.splice(1, 1);
console.log(myarray);

//insert
myarray.splice(1, 0, 'inserted item');
console.log(myarray);