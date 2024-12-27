// practice this keyword in javascript
// this keyword refer to the object that is executing the current function
// example
const myObject = {
    name:"Muzammil",
    age: 23,
    city:"Karachi",
    country:"Pakistan",
    Function() {
        console.log(`${this.name}, IS the Name Of My`)
    }
}
myObject.Function()    // this will give output of an object name
function myfunction (){
    console.log(this);

}
myfunction()  // this will give output of window object

// example  of these keyword

const MyObjectName ={
    name:"Muhammad",
    age:23,
    city:"Karachi",
    country:"Pakistan",
    Function() {
        console.log(`my name is ${this.name}, and my age are ${this.age}, and My location are ${this.city,this.country}`)
    }
}
MyObjectName.Function()

// example of this Keyword

function myfunction() {
    console.log(this)
}
myfunction() // this will give me output as window object because this keyword refer the object that is executing the current function

function myfunction () {
    console.log(this) // these will give an output of window object because this keyword refer the object that is executing the current Function either you call it fro out side of the scope or not

}
myfunction() 

// exampple of this keyword

const mySecondObject = {
     name:"Majid",
     agr:"39",
     city:"Multan",
     country:"Pakistan",
        Function(){
            console.log(`${this.name}`)
            
        } 
}

mySecondObject.Function() // 


