
function firstName(name, callback) {
        console.log(`My name is First function ${name}`)
        callback()
}
function secondName() {                      // we call the second function in first function as in aurgument
    console.log("My name is Second function")
 }

 function thirdName() {
    console.log("My name is Third function")
 }


 firstName("Muzammil", secondName)
 thirdName()

