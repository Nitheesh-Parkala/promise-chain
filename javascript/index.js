const cart =["shoes", "pants", "kurta"];
//consumer
createOrder(cart) //it will return orderId.
  .then(function(orderId){
    console.log(orderId);
  return orderId;
 })
   .catch(function(err){
    console.log(err.message);
 })
 .then(function(orderId){
  return  proceedToPayment(orderId)
 })
 .then(function(PaymentInfo){
    console.log(PaymentInfo);
 })
  .catch(function(err){
    console.log(err.message);
 })
 .then(function(orderId){
 console.log("No matter what happens, I will definitely called. ")
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
function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        // reject(err)  validation not made here.
        // const PaymentInfo = "Payment Successful";
        resolve("Payment Successful")
    })
}
function validateCart(cart){
    return false;
}