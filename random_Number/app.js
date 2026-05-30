// random numbers generating with Math.random() method:

// 6 digits otp:

function otp(){
    return(Math.floor(Math.random()*900000 + 100000));
}
console.log(otp());

// 4 digit number:

// 1000 - 9999 => 8999 + 1 => 9000
console.log(Math.floor(Math.random()*9000 + 1000 ));





