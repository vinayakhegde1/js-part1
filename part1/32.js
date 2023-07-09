// spread opreator
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const newArr = [... arr1, arr2];
console.log(newArr);

// spread opreator in objects

const obj1 ={
    key1 :"value1",
    key2 : "value2"
};
const obj2 ={
    key3 :"value3",
    key4 : "value4"
};

const newobj = {...obj1, ...obj2, key69:"value69"};
console.log(newobj);
