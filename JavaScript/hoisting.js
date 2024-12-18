

// // // in hoisting  variable declaration move on top but it is not initialize
// // console.log(z) // output will be undefined
// // var z = 20;


// // // in let and const variable can also move on the top but it can not declare on on the the top because of unaccessible such variable are stored in dead zone
// // console.log(b); // give you error
// // const b = 30

// // // // in const and let variable can move and are hoisted but they can  not accessible for declaration or initialization so such type variable are in te temporal dead zone
// // console.log(c);   // output will be  an error
// // let c = 40;



// // myFunction()                 // execute successfully
// // function myFunction() {
// //     var word = "Hello World"
// //     console.log(word)
// // }


// // funcName()                   // execute successfully
// // function funcName () {
// //     let username = "Muzammil"
// //     console.log(username)
// // }

// // funcName()                   // execute successfully
// // function funcName () {
// //     const username = "Ahmed"
// //     console.log(username)
// // }




// // Question 1: Hoisting with Function Expressions
// // javascript
// // Copy code
// console.log(sum(5, 10)); // ?

// var sum = function (a, b) {
//     return a + b;
// };

// console.log(sum(5, 10)); // ?


// Here are 5 more questions to help you practice hoisting in JavaScript. These will challenge your understanding of variables, functions, and scope.

// Question 1: Hoisting with Function Expressions
// javascript
// Copy code
// console.log(sum(5, 10)); // ?

// var sum = function (a, b) {
//     return a + b;
// };

// // console.log(sum(5, 10)); // ?
// // Question 2: let and const in a Block Scope
// // javascript
// // Copy code
{
    console.log(x); // ?   error
    let x = 10;
    console.log(x); // ? print 10
}

{
    console.log(y); // ?    error
    const y = 20;
    console.log(y); // ?     print 20
}