// // promise in java script
// //synchronous
// console.log("Sentence one")
// console.log("Sentence two")
// console.log("Sentence three")
// // Asynchronous

// console.log("Sentence one")
// setTimeout(() =>{
//     console.log("Sentence two")
// },2000)

// console.log("Sentence three")

// // to solve this Asynchronous Function We USe Promise

const promise = new Promise(function (resolve, reject) {
   const condition = false;
   if (condition) {
     resolve("Your promise is resolved")

   }  else {
     reject("Your proposal is rejected")
   }
})

promise
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  });
