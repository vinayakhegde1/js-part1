// Sets (it is iterable)
//stores
// only unique Elements can be stored in set 
// no duplicates allowed 
// no index based access 
// sets also have its own methods 
// order is not guarantee 

const numbers = new Set([1,2,3]);
console.log(numbers);
console.log(numbers[2]);

// we can also add elements 
const Name  = new Set();
Name.add('vinayak');
console.log(Name);

// delete()	Removes an element from a Set 
const Numbers = new Set([1,2,3]);
Numbers.delete(1);
console.log(Numbers);

// has() Returns true if a value exists 
const letters = new Set(["a","b","c"]);
letters.has("a");
console.log(letters);

// clear()	Removes all elements from a Set

const Letters = new Set(["a","b","c"]);
Letters.clear();
console.log(Letters);