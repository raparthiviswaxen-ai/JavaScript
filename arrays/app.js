//arrays
// a single variable used to store multiple values/items together.
// ordered collection/list of multiple values stored in one variable.
///
// these are destructive methods:

// | Method        | Use         |
// | ------------- | ----------- |
// | `.push()`     | add item    |
// | `.pop()`      | remove last |
// | `.includes()` | check item  |
// | `.length`     | total items |
// |  .unshift()     adds from begining 
// |  .shift()       removes value from begining 


let arr = [10,20,30,40,50];

arr.pop();
arr.push(100);
arr.unshift(99,29,36);
arr.shift();


console.log(arr);

console.log(arr.length);