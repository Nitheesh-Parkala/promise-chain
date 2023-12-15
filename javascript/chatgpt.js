const cart = ["shoes", "pants", "kurta"];

// consumer
createOrder(cart)
    .then(function (orderId) {
        console.log("Order ID:", orderId);
        return orderId;
    })
    .catch(function (err) {
        console.log("Error:", err.message);
        // Throwing an error here to skip the subsequent .then blocks
        throw err;
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log("Payment Info:", paymentInfo);
        return showOrderSummary();
    })
    .then(function (orderSummary) {
        console.log("Order Summary:", orderSummary);
        return updateWallet();
    })
    .then(function (walletUpdateInfo) {
        console.log("Wallet Update Info:", walletUpdateInfo);
    })
    .catch(function (err) {
        console.log("Error:", err.message);
    })
    .then(function () {
        console.log("No matter what happens, I will definitely be called.");
    });

// producer
function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        // validate cart
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }

        // logic to create order.
        const orderId = "12345";
        if (orderId) {
            setTimeout(function () {
                resolve(orderId);
            }, 5000);
        }
    });
    return pr;
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        // reject(err)  validation not made here.
        resolve("Payment Successful");
    });
}

function validateCart(cart) {
    return cart.length > 0;
}

function showOrderSummary() {
    return new Promise(function (resolve) {
        // Logic to fetch and display order summary
        const orderSummary = "Order Summary: ...";
        resolve(orderSummary);
    });
}

function updateWallet() {
    return new Promise(function (resolve) {
        // Logic to update the wallet
        const walletUpdateInfo = "Wallet updated successfully.";
        resolve(walletUpdateInfo);
    });
}

// createOrder(cart)
//     .then(function (orderId) {
//         console.log("Order ID:", orderId);
//         // Returning orderId implicitly resolves with orderId, but doesn't chain further
//     })
//     .then(function () {
//         // This block will still be executed, but it doesn't receive any value from the previous .then
//         console.log("This block is executed, but doesn't receive any value from the previous .then");
//     });
