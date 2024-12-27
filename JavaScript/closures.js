// // closures in java/script

// function outer() {
//     var outerVar ='I am The Outer Variable Function';

//     function inner () {
//         console.log(outerVar)
//     }
//     inner();
// }
// outer();

//again 

function outerfunc() {
    let outer = "I am the Outer Variables";
 
    function innerfunc() {
        let innervar = 'i am the inner Function';
        console.log(innervar);
        
    }
    innerfunc();
    function twoinner () {
        let twoinnervar = "i am two inner variable";
        console.log(twoinnervar);
        
    }
    5 twoinner();

    function threeinner() {
        let threeinnervar = 'i am t  hree inner variables';
        console.log(threeinnervar);
        }
        threeinner();
        innerfunc();
        twoinner();
    

}
outerfunc();