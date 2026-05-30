/// Functions in javascript
/// functions are heart of the JavaScript
/// write a function that return "welcome to FSD "///

/// Function helps to reuse the code again and again by calling it 
/// nature of function is to return something ///
// function need to be called by full code like "abc()" not like console.log(abc)

function abc(){
    console.log("Welcome to FSD ");
}

abc()

function a(){
    console.log("whenever we go with the function we can recall it even without retyping the same thing ");

}

a()

/// parameterized function :

function parameter(a,b){
    return (a + b);
}

console.log(parameter(10,20));

// default prameterized functions :
// here the parameter has a default (like b=10) value and the given value will be functions with the default value as below.

function def_para(a , b=10){
    return a * b;

}


console.log(def_para(10));


// default parameterized function with overriding :
// the default values here are overridden by the given vaules.

function def_para2(a=10, b=9){
    return a * b;
}

console.log(def_para2(2,4));