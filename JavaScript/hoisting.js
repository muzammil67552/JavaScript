

// // in hoisting  variable declaration move on top but it is not initialize
// console.log(z) // output will be undefined
// var z = 20;


// // in let and const variable can also move on the top but it can not declare on on the the top because of unaccessible such variable are stored in dead zone
// console.log(b); // give you error
// const b = 30

// // // in const and let variable can move and are hoisted but they can  not accessible for declaration or initialization so such type variable are in te temporal dead zone
// console.log(c);   // output will be  an error
// let c = 40;



// myFunction()                 // execute successfully
// function myFunction() {
//     var word = "Hello World"
//     console.log(word)
// }


// funcName()                   // execute successfully
// function funcName () {
//     let username = "Muzammil"
//     console.log(username)
// }

// funcName()                   // execute successfully
// function funcName () {
//     const username = "Ahmed"
//     console.log(username)
// }




// Question 1: Hoisting with Function Expressions
// javascript
// Copy code
console.log(sum(5, 10)); // ?

var sum = function (a, b) {
    return a + b;
};

console.log(sum(5, 10)); // ?


// Here are 5 more questions to help you practice hoisting in JavaScript. These will challenge your understanding of variables, functions, and scope.

// Question 1: Hoisting with Function Expressions
// javascript
// Copy code
console.log(sum(5, 10)); // ?

var sum = function (a, b) {
    return a + b;
};

// console.log(sum(5, 10)); // ?
// Question 2: let and const in a Block Scope
// javascript
// Copy code
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

// Question 3: Nested Scopes with var
// javascript
function testVarScope() {
    if (true) {
        var x = 100;
    }
    console.log(x); // ?  100

}

testVarScope();



// Here are 5 more questions to help you practice hoisting in JavaScript. These will challenge your understanding of variables, functions, and scope.

// Question 1: Hoisting with Function Expressions
// javascript
// Copy code
console.log(sum(5, 10)); // ?

var sum = function (a, b) {
    return a + b;
};

// console.log(sum(5, 10)); // ?
// Question 2: let and const in a Block Scope
// javascript
// Copy code
{
    console.log(x); // ?
    let x = 10;
    console.log(x); // ?
}

{
    console.log(y); // ?
    const y = 20;
    console.log(y); // ?
}
// Question 3: Nested Scopes with var
// javascript
// Copy code
function testVarScope() {
    if (true) {
        var x = 100;
    }
    console.log(x); // ?
}

// testVarScope();
// Question 4: Mixing var, let, and const
// javascript
// Copy code
console.log(a); // ?   undefined
var a = 10;

console.log(b); // ?     error bc it can not default access initialized
let b = 20;

console.log(c); // ?     same error it can not initialized by default
const c = 30;


// Question 5: Function Declaration vs Function Expression
// javascript

hoistedFunction(); // ? it will execute succesufully 
function hoistedFunction() {
    console.log("I am a function declaration!");
}

nonHoistedFunction(); // ? it will give us error because in variable function we can not call it in hoisting
var nonHoistedFunction = function () {
    console.log("I am a function expression!");
};

// Question 1: Hoisting with var
// What will be the output of the following code?

// javascript
// Copy code
console.log(a);
var a = 5;
console.log(a);  //their out put will be undefined and  and 5

// Question 2: Hoisting with let and const
// What will be the output of the following code?

// javascript
// Copy code
console.log(t)   // error
let t = 10;
console.log(g)  // error
const g = 20;


// Question 3: Function Declaration vs Function Expression
// What will be the output of the following code?

// javascript
// Copy code
greet();     // easily execute because all function are hoisted except expression function means function n that contains variables
function greet() {
    console.log("Hello, I am a function declaration!");
}

sayHello();     // give us an error because in variable function for hoisting it will note consider the actual function
var sayHello = function () {
    console.log("Hi, I am a function expression!");
};


// Question 4: Temporal Dead Zone
// What will be the output of the following code?

// javascript
// Copy code
{
    console.log(x);
    let x = 15;
}

// Question 5: Re-declaration of Variables
// Will the following code work? Why or why not?

// javascript
// Copy code
var r = 10;
var u = 20;

let y = 15;
let p = 25;

// Question 6: Scope with var, let, and const
// What will be the output of the following code?

// javascript
// Copy code
function scopeTest() {
    if (true) {
        var a = 1;
        let b = 2;
        const c = 3;
    }
    console.log(a);   
    console.log(b);  // for let variable we can not console it inside the global scope
    console.log(c);  // for const variable we can not print it inside the global scope
}
scopeTest();

// Question 7: Hoisting in Nested Functions
// What will be the output of the following code?

// javascript
// Copy code
function outer() {
    console.log(inner());    // the output for these code will be inner function
    function inner() {
        return "Inner function!";
    }
}
outer();


// Question 8: Function Expression in a Block Scope
// What will be the output of the following code?

// javascript
// Copy code
{
    console.log(foo);            // during execution the interpreter in hoisting specially for var variable during execution it declared but can not initialized  so the output will be undefined for these
    var foo = "I am accessible";
}
{
    console.log(bar);           // definitly  it  will give an error us error for let and const variable in hoisting it can not acceseed or can not declared and thier value remain in Temperal Dead Xone untill Thier Pure Execution
    let bar = "I am not hoisted";
}

// Question 9: Arrow Function Hoisting
// What will be the output of the following code?

// javascript
// Copy code
greet();       //error
const greet = () => {
    console.log("Hello!");
};

// Question 10: Variable Hoisting with Reassignment
// What will be the output of the following code?

// javascript
// Copy code
console.log(d);
var d = 50;
d = 100;
console.log(d);





// Hoisting

console.log(a);
var a = "Muzammil"      // it is hoisted variable becuase of global var

// console.log(b);
// const b = "Muhammad"    // in hoisting we can not print befor its initialize in Const

// console.log(c);
// let c = "Khan"          // in hoisting the variable let can not be accessed befor thier initializing


function FuncName () {
    console.log("Hi There");
    
}
FuncName();




