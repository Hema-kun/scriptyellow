

function calculateLoanPayment(principal, annualInterest, months){

    try{
        if(principal <=0 || annualInterest < 0 || months <=0){
            throw new Error("Invalid input: values must be positive numbers")
        }

        let monthlyInterestRate = annualInterest/12/100;

        if(monthlyInterestRate === 0){
            return principal / months;
        }

        let numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months);
        let denominator = Math.pow(1 + monthlyInterestRate, months)-1;

        let monthlyPayment = principal * (numerator / denominator);

        return monthlyPayment
    }catch(error){
        console.log(error.message)
        return null
    }
}

export {calculateLoanPayment};