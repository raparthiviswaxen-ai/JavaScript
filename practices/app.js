// Product list from database/API

// let products = [
//     { name: "Laptop", price: 1000 },
//     { name: "Phone", price: 500 },
//     { name: "Headphones", price: 100 }
// ];

// // Callback Function
// function displayProduct(product) {
//     console.log(
//         `${product.name} - $${product.price}`
//     );
// }

// // Main Function
// function processProducts(productList, callback) {

//     console.log("Available Products:");

//     productList.forEach(callback);

//     return productList.length;
// }

// // Function Call
// let totalProducts = processProducts(products, displayProduct);

// console.log("Total Products:", totalProducts);

// find the cube of an array 
//arr[2,3,6,8,9]

// let arrr = [2,3,6,8,9];

// let ReturnVal = arrr.map(function(item,index){
//     return item ** 3
// })

// console.log(ReturnVal);
// console.log(arrr);



// //Create a new array where every number is doubled.
// let q = [10, 20, 30, 40];

// let ans = q.map(function(item,index){
//     return item*2 
   
// })

// console.log(ans);


let s = [1,2,3,4,5,6,7];
 function rel(s){
    let out = s.map(function(item,index){
        return item * 2
    })
    .filter(function(item,index){
        if(item>10){
            return true
        }
        else {
            return false
        }
    })
    return out;
 }

 console.log(rel(s));