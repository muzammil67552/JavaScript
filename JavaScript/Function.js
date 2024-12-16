    function funcName(num1, num2) {     
        console.log(num1+num2);//assign value
    }
    funcName(10, 10)
            // aurgument


            function user(addToCart) {
            
            return  `${addToCart} plz add some prod`           
            }
            console.log(user("muzamil"));
            


    function PopUp(ShowPOPUP) {
        return `${ShowPOPUP} just just logiun `
    }
    console.log("Muzamil"+ PopUp("please"))

    // Question 1: Multiplication Function
    // Create a function called multiply that takes two numbers as arguments, multiplies them, and logs the result to the console. Call the function with the numbers 5 and 3.

    function multiply(num1, num2) {
        console.log(num1*num2);
        
    }
    multiply(5,3)

//     Question 2: Greeting Message
// Write a function called greetUser that takes a user's name as an argument and returns a message like "Hello, [name]! Welcome!". Call the function with your name and log the returned message to the console.

function greetUser(user) {
    return `${user}`
}
console.log("Hello" +greetUser("Muzammil"+"!Welcom"));


// Question 4: Calculate Area
// Write a function called calculateArea that takes two parameters: length and width. It should return the area of a rectangle. Call the function with length = 10 and width = 5 and log the result.

function calculateArea(length, width) {
    return `${length*width}`
}
console.log("the area are :"+ calculateArea(10, 5));

// Question 5: Favorite Color
// Create a function called favoriteColor that takes a color as an argument and returns "Your favorite color is [color]." Call the function with the color "blue" and log the returned value to the console.

function favoriteColor(favcolor){
    return `${favcolor} is your fav color`
}
console.log(favoriteColor("blue"));
