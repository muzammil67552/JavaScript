
// // // // // Variables

// // // // // var : Function Scope , can be redeclared or updated It is Hoisted
// // // // // let : Block Scope, csn not re declared in same scope 
// // // // // cont : block scope, can nnot redeclared or not updated

// // // // // example\

// // // // {
// // // //     var myNAme = "Muzammil"
// // // //     var  myNAme = "Muhammad"
// // // //     var myNAme = "Khan"   // i update dit
// // // // }
// // // // console.log(myNAme);
// // // // console.log(myNAme);

// // // // // let 

// // // {
// // //     let myName = "Muzammil";
// // //    // let myName = "Muhammad"; // This will cause an error because let cannot be redeclared in the same scope
// // //     myName = "Khan"; // This is allowed because let can be updated
// // //     console.log(myName); // Output: Khan
    
// // // }

// // {
// //     let name = "is/name"
// //     name = "is not name yes my name is not name " // this will  not give an error bcs in let  variable it can  updated as well 
// //     console.log(name);
    
// // }

// {
//     let newPractice = "Practice"
//     newPractice="yes it is Updated Practice"
//     console.log(newPractice);
    
// }

// {
//     let blocklet = "let Variabble Expample"
//     blocklet = "yes"
//     console.log(blocklet);
    
// }

// const myname = "Muzii"
// const myname = "Muzammil" // these will give error about already taken becs in js variable const variable it can not redeclared or not updatewd 
// console.log(myname);



{let name;
console.log(name);}  // result will be undefined

{let namenull = null;
console.log(namenull);}  // these will give us result null 

