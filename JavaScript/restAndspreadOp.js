// // rest operator in array
// const [a,b, ...rest] = [10,20,30,40,50,60,70,80,90,100]
// console.log(a);
// console.log(b);
// console.log(rest);
// // again example
// const arr = [1,2,3,4,5,6,7,8,9,10]
// const [x,y, ...rest1] = arr
// console.log(x);
// console.log(y);
// console.log(rest1)

// //again example
// const arr1 = [1,2,3,4,5,6,7,8,9,10]
// const [p,q, ...rest2] = arr
// console.log(p);
// console.log(q);
// console.log(rest2);

// // again example
// const arr2 = [1,2,3,4,5,6,7,8,9,10]
// const [r,s, ...rest3] = arr2
// console.log(r);
// console.log(s);
// console.log(arr2)

// //again example

// const arr4 = [10,20,30,40,50,60,70]
// const [o,w,e, ...rest4] = arr4
// function Sum(o,w,e){
//     return o+w+e
// }
// console.log(Sum(o,w,e,))
// console.log(o,w,e, ...rest4);

// // destructuring objects
// const myinto = {name:"Muzammil", rollno:"2333443"}
// const {name, rollno} = myinto
// console.log(myinto);

// // again example


// const object = {name1:"Muzammil", NIC:"4924246", address:"Karachi Pakistan", Phone:"031552551"}
// const {name1, NIC, address, Phone}=
//  object
//  console.log(object);
 

// Rest Destructuring

const NewData = [
   {
    name : "Moaiz",
    father: "Fathers",
    Rent: "helling",
    Salary:"555855"
   },
   {
    name : "Moaiz",
    father: "Fathers",
    Rent: "helling",
    Salary:"555855"
   },
   {
    name : "Moaiz",
    father: "Fathers",
    Rent: "helling",
    Salary:"555855"
   }

]
const NewData1  =  [{
    name:"Khalid",
    father:"khalidFather",
}  ,
{
    name:"Khalid",
    father:"khalidFather",
}

]
const rest = [2, 5, 4, 5, 80, 41, 52, 85, 8];
console.log(NewData, ...NewData1, ...rest);

