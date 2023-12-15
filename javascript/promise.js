const cart =["shoes", "pants", "kurta"];
//consumer
const promise = createOrder(cart) //it will return orderId.
// console.log(promise);
promise
  .then(function(orderId){
    console.log(orderId);
    // proceedToPayment(orderId);
 })
  .catch(function(err){
    console.log(err.message);
 })
//producer
function createOrder(){
    const pr = new Promise(function(resolve,reject){
        //createOrder
        //validate cart
        //orderId.
        if(!validateCart(cart)){
            const err = new Error ("cart is not valid");
            reject(err)
        }
    //logic to create order.
    const orderId = "12345";
    if(orderId){
        setTimeout(()=>{
         resolve(orderId)
        },5000)
        
    }
    })
    return pr;
}

function validateCart(cart){
    return true;
}

//script tag is not called in html page (index.html)