import { calculateLoanPayment } from "./calculateLoanPayment.js";

let principal = 10000;          // Loan amount: $10,000
let annualRate = 5;             // 5% interest per year
let termMonths = 36;            // 36 months loan term

let payment = calculateLoanPayment(principal, annualRate, termMonths);

if(payment !== null){
    console.log(`Monthly payment : ${payment.toFixed(1)}`)
}