let arr = [10,20,30,40,50];

// forEach = it is a method, and it is a HOF.
// forEach accepts a callback fn - callback fn has two args : item,index. forEach does not return anything.

// let retVal = arr.forEach(function(item,index){
//                console.log(item , index);
// } )

// console.log(retVal);

// map - it is a method - HOF
// accepts the callback fn - callback fn has two args(item,index)
// It returns a new array as same length as the original array.

let arrr = [20,30,40,50];

let val = arrr.map(function(item,index){
     return item+item
})

console.log(val);