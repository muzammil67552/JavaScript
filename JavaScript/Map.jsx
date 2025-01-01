// const ArrayObject = [2, 5, 10, 15, 20, 25, 30];
// const arrMap = ArrayObject.map((num) => num * 10);
// console.log(arrMap);
// // again practice

// const anotherArray = [1, 2, 3, 4, 5];
// const newarr = anotherArray.map((num) => num / 2);
// console.log(newarr);

// //new Method

// function AnotherArray() {
//   const modifiedArray = anotherArray.map((val) => val * 2);
//   console.log(modifiedArray);
// }
// AnotherArray();

// // once more

// const mynew = [2, 2, 2, 2, 2, 2, 2];
// const new1 = mynew.map((e) => e * 3);
// console.log(new1);

// // filter
// const FilerteArray = [10,20,30,40,50,60]
// const filterfunc = FilerteArray.filter((val) => val >30)
// console.log(filterfunc)


// // filter in array of an object

// const Obj = [
//   {name: "Muzammil", age: 20},
//   {name: "Ahmed", age: 22},
//   {name: "Bilal", age: 19},
//   {name: "Ahmed", age: 24},
//   {name: "Akram", age: 30}
// ];
// const FilterObj = Obj.filter((val) => val.age > 20);
// console.log(FilterObj);
// queueMicrotask


// // Map Function Method
// const remote = [2,1,5,6,4,7,7]
// const Maparr  = remote.map((val) => val)
// console.log(Maparr);

// // Filter Function 
// const array = [2,5,6,7,8,9,12,15]
// const arrayFilter = array.filter((val) =>val > 7)
// console.log(arrayFilter)



// // in a Function MAp And Filter
// function remote () {
//     const  arr = [2,3,4,5,6,10,12,15]
//     const  arrmap = arr.map((val) => val*2)
//     console.log(arrmap);
    
// }
// remote();

// function array () {
//     const arr = [5,10,15,20,25,30]
//     const arrfilter = arr.filter((val) => val >5)
//     console.log(arrfilter);
    
// }
// array();

// arraymaparrow()


//  New Practice

const Data = [
    [
        { "name": "Muzammil", "contact": "5464564554", "location": "Karachi", "status": "Student" },
        { "name": "Ahmed", "contact": "9876543210", "location": "Lahore", "status": "Student" },
        { "name": "Ali", "contact": "1234567890", "location": "Islamabad", "status": "Student" },
        { "name": "Sara", "contact": "2345678901", "location": "Peshawar", "status": "Student" },
        { "name": "Ayesha", "contact": "3456789012", "location": "Karachi", "status": "Student" },
        { "name": "Hamza", "contact": "4567890123", "location": "Quetta", "status": "Student" },
        { "name": "Fatima", "contact": "5678901234", "location": "Multan", "status": "Student" },
        { "name": "Zain", "contact": "6789012345", "location": "Karachi", "status": "Student" },
        { "name": "Hassan", "contact": "7890123456", "location": "Rawalpindi", "status": "Student" },
        { "name": "Noor", "contact": "8901234567", "location": "Hyderabad", "status": "Student" }
    ]
]
for (let index = 0; index < Data.length; index++) {
     console.log(Data[index][5]);
     
}


