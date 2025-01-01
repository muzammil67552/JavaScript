// async await practice

function PromiseFunction(){
    let KuchPromise = new Promise((resolve, reject) =>{
        resolve ("'https://fakestoreapi.com/products/1")
    })
    KuchPromise.then((val) =>{
        try {
            fetch("'https://fakestoreapi.com/products/1")
            
        } catch (error) {
            console.error(error);
            
        }
    })
    
}
PromiseFunction();
