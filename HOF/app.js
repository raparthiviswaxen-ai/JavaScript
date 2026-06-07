/// HOF :
// CallBack Function:
// when a fn is passed as an argument in another fn then it(smaller) is called as callback fn.
// whenever a fn is passed as an argument in another fn then the accepting fn will be Higher Order Function.
function smaller(){ //callback fn
    console.log("i am smaller");
}

function bigger(fn){ //HOF
    console.log("i am bigger")

    fn();
}

bigger(smaller);



// -----------------------------------
// Whenever you return a fn(inner) from another fn(outer) then that accepting fn(outer) will become Higher Order Function.

function outer(){ //HOF
    console.log("i am outer");

    function inner(){
        console.log("i am inner ");
    }

    return inner;
}

outer();



