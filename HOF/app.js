/// HOF :




function smaller(){
    console.log("i am smaller");
}

function bigger(fn){
    console.log("i am bigger")

    fn();
}



bigger(smaller);

// -----------------------------------

function outer(){
    console.log("i am outer");

    function inner(){
        console.log("i am inner ");
    }

    return inner;
}

outer();



