// Understand the problem: 
// Utilize bisection search to figure out how much we need to save per month
// if we wanted to buy the house in 3 years(36 months)
// the annual rate and semi_annual_raise is just the same as ps1b.js
// Your semi­annual raise is .07 (7%)
// Your investments have an annual return of 0.04 (4%)
// The down payment is 0.25 (25%) of the cost of the house
// The cost of the house that you are saving for is $1M.

// Planning: 
// Now we should calculate the dividend and new current_savings, new annual_salary for only 36 months 
// and this should be run inside a loop from (1 up to 10000), this range would be the portion_saved
// percentage that we want to search for, which means we need outer and inner loops for this. 

// Pseudocode
// Prompt user for starting annual salary
// Initialize total_cost to 1 million
// Initialize down_payment to 250K 
// Initialize semi_annual_raise to 0.07
// Initialize annual_rate to 0.04
// Initialize months to 36
// initialize portion_saved to 1
// Compute starting monthly salary using annual salary
// initialize current_savings with value 0

// While portion_saved <= 10000
//     Reset savings conditions as below
//     Declare dividend
//     Make a copy of current_savings 
//     Make a copy of annual_salary
//     Make a copy of monthly_salary
//     ForLoop from 1 upto and including months
// IF months modulo 6 === 0: increase copied annual salary by semi_annual_raise percentage
// Compute dividend of this month with copied current_savings
// Increase copied current savings with dividend plus (copied monthly salary * portion_saved)
// Increment steps
// Increment portion_saved
// IF current_savings >= down_payment
//     break out of the searching loop
// Print to screen the portion_saved (the amount user should save to get a house in 36 months)


let annual_salary = parseFloat(prompt("Enter your starting annual salary: "));
const total_cost = 1000000
const semi_annual_raise = 0.07
const down_payment = total_cost * 0.25;
const annual_rate = 0.04;

let portion_saved = 1;
let steps = 0;
while (portion_saved <= 10000) {
    let current_savings = 0;
    let annual_salary_copied = annual_salary; // this is to compute in the 36 months loop but we don't want to change the ori annual salary
    let monthly_salary = annual_salary_copied / 12;
    let dividend = 0
    for (let month = 1; month <= 36; month++) {
        if (month % 6 === 0 && month !== 0) {
            annual_salary_copied = annual_salary_copied * (1 + semi_annual_raise);
            monthly_salary = annual_salary_copied / 12;
        }
        dividend = current_savings * annual_rate / 12;
        current_savings = current_savings + dividend + (monthly_salary * (portion_saved / 10000));
    }
    steps++; // increment step for searching
    portion_saved++;
    if (current_savings >= down_payment) {
        console.log(`Current Savings: ${current_savings}`);
        break;
    }
}


if (portion_saved >= 1){
    console.log("It is not possible to pay the down payment in three years.");
}
else {
    console.log(`Best savings rate: ${portion_saved / 10000}`);
    console.log(`Steps for searching: ${steps}`);

}


