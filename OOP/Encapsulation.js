let basePay = 100
let salary = 20000
let tax = 1000

function getWage(basePay, salary, tax){
    return basePay + salary - tax
}

let empolyee = {
    basePay : 100,
    salary : 20000,
    tax: 1000,
    getWage :function(){
        return this.basePay + this.salary - this.tax
    }
}
console.log(empolyee.getWage())


function accountBalance(initialBalance){
    let balance = initialBalance

    return {
        deposit(amount) {
            balance += amount
        },
        getBalance(amount){
            balance -= amount
        },
        totalBalance(){
            return balance
        }
    }
}

let balance = accountBalance(1000)
balance.deposit(2000)
balance.getBalance(50)

console.log(balance.totalBalance())
