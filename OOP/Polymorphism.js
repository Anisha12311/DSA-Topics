const  Paypal = {
    pay(amount) {
        console.log(`Pay ${amount} via UPI`)
    }
}

const CRED = {
    pay(amount) {
        console.log(`Pay ${amount} via CRED card`)
    }
}

function PaymentMethod(method){
    method.pay(1000)
}

PaymentMethod(Paypal)
