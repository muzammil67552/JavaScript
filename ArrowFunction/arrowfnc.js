// create a variable for use

const user = {
  username: "Muzammil",
  price: "22",
  WelcomeUser: function () {
    return `${this.username}, Please Login To Web`;
  },
};
console.log(user.WelcomeUser());

// Question 1: Object Method
// Create an object person with a property name and a method sayHello that uses the this keyword to refer to the name property and logs "Hello, [name]!".

const person = {
  name: "Shayan",
  syaHello: function () {
    return `${this.name}, Hello`;
  },
};
console.log(person.syaHello());

// Question 1: Object with Multiple Methods
// Create an object student with the properties name and rollNumber. Add two methods:

// displayDetails: Logs "Student Name: [name], Roll Number: [rollNumber]" using this.
// greet: Logs "Hello, [name]! Welcome to the class." using this.

const student = {
  name: "muzammil",
  rollNumber: 12345,

  displayDetails: function () {
    console.log(`Student Name ${this.name} and Roll Number ${this.rollNumber}`);
  },
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};
// student.displayDetails();
// student.greet();

// Question 2: Shopping Cart Object
// Create an object cart with the properties productName, price, and a method productDetails that logs "Product: [productName], Price: $[price]" using this.

const cart = {
  productName: "Soap",
  price: 20,

  productDetails: function () {
    console.log(
      `Product Name Is ${this.productName} and Price are ${this.price}`
    );
  },
};
cart.productDetails();
(cart.productName = "milk"), cart.productDetails();
(cart.productName = "Sugar"), (cart.price = 13);
cart.productDetails();

// Question 3: Nested Object
// Create an object employee with a property name and a nested object details that contains designation and a method showDetails. Use this to log "Employee [name] works as a [designation]".

const employee = {
  name: "amjad",
  details: "Worker at Private Company",

  showDetails: function () {
    console.log(
      `Employee name is ${this.name} and Designation is ${this.details}`
    );
  },
};
employee.showDetails();

function myfunc() {
  console.log(this);
}
myfunc();

// arrow Function
const  name = () => {
    let username = "Muzammil"
    console.log(this)
}
name();