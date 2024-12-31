

// var a = 5
// number()
// Number2()
// console.log(a);

// function number() {
//     var a = 10;
//     console.log(a)
// }

// function Number2 (){
//     var a = 20;
//     console.log(a);
    
// }


// function addToNumber(a, b){
//      return `${a+b}`

// }
// console.log(addToNumber(5,5))

// function multiTownumber(a,b) {
//     return `${a*b}`
// }

// console.log(multiTownumber(3,2))


// function divideToNum (number1, number2) {
//     return number1/number2
// }
// console.log(divideToNum(10,2));


// function isPositive (num) {
//     if (num === true) {
//         console.log("Instead of Mt True It Is False")
//     }
//     return num > 0
// }
// console.log(isPositive(-2))


// function funcName () {
//     for(let i=1; i<=100; i++)
//         console.log(i)
// }
// funcName()

// function getAverage(num1, num2) {
//     console.log ("The Average Value Are :", (num1 + num2)/2)
// }
// getAverage(50,5)


// // sum of three value in a function
// function SumAllVal (a,b,c) {
//     console.log("The Sum Of All These Value Are : ", a+b+c);
// }
// SumAllVal(2,3,3)

// // Full name in Function

// function GetFullName (firstN, LastN) {
//     let FullName = firstN+ " " + LastN
//     console.log(FullName)
// }
// GetFullName("Muhammad", "Muzammil")

// // function

// var a = 5;
// function GetFullName (firstN, LastN) {
//     let FullName = firstN+ " " + LastN
//     console.log(FullName)
// }
// GetFullName("Muhammad", "Muzammil")
// console.log(a)

// // more function

// function number () {
//     var a = 10;
//     console.log(a)
// }
// number()


// // Function_Practice

// // assigning function in variable 
// var a = function () {
//     console.log("My name is function");
// }
// a(); 

// const Name = function () {         // i will call variable name not a function name in that case
//     console.log("Muzammil"); 
//     console.log("Name Is Muzammil"); 
// } 
// Name();

// // passing perameter as an aurgument

// function addNumbers(a, b) {
//    return a + b;
// }
// console.log(addNumbers(2, 3));

// arrow function

function NormalFunction(a,b) {
    console.log(arguments);
    return (a+b)
}
console.log(NormalFunction(20,20));

//Arrow function
const arrow  = (...val) => console.log(val);
arrow(40,20)
    


