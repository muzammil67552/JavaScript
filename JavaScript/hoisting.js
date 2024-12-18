

// in hoisting  variable declaration move on top but it is not initialize
console.log(z) // output will be undefined
var z = 20;


// in let and const variable can also move on the top but it can not declare on on the the top because of unaccessible such variable are stored in dead zone
console.log(b); // give you error
const b = 30

// // in const and let variable can move and are hoisted but they can  not accessible for declaration or initialization so such type variable are in te temporal dead zone
console.log(c);   // output will be  an error
let c = 40;



myFunction()                 // execute successfully
function myFunction() {
    var word = "Hello World"
    console.log(word)
}


funcName()                   // execute successfully
function funcName () {
    let username = "Muzammil"
    console.log(username)
}

funcName()                   // execute successfully
function funcName () {
    const username = "Ahmed"
    console.log(username)
}