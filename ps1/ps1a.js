// Part A: House Hunting

// Understand the problem: We need to get a house, 25% of down payment is needed to buy the house,
// and our current saving is 0. Thus, the only way we can buy the house is when our current savings 
// is higher than or equal to the down payment.

// Your program should ask the user to enter the following variables:
//     1. The starting annual salary (annual_salary)
//     2. The portion of salary to be saved (portion_saved)
//     3. The cost of your dream home (total_cost)

// Planning: 
    // How do we get user input? By browser prompt.
    // constant that will remain unchanged: total_cost, portion_down_payment, annual salary, monthly salary, 
    // portion_saved, annual_rate

    // variables that will change: dividend_in_month, current_savings
    // dividend is invested using current_savings, so divident will increase as savings increases

    // Now how do we calculate the dividend and savings in loops?
    // For now I assume as the problem mentioned, current_savings and dividend is increased per month,
    // so each iteration of a loop will be a month, we can prove this by incrementing month counter in the loop!

// Pseudocode

// Prompt user for annual salary
// Prompt user for portion of salary to be saved 
// Prompt user for cost of dream home 

// Compute down payment using the total cost
// Compute monthly salary using annual salary
// initialize current_savings with value 0

// Loop when current_savings is lower than the down payment 
// Compute dividend of this month with current_savings
// Increase current savings with dividend plus (salary * portion_saved)

const annual_salary = parseFloat(prompt("Enter your annual salary: "));
const portion_saved = parseFloat(prompt("Enter the percent of your salary to save, as a decimal: "));
const total_cost = parseFloat(prompt("Enter the cost of your dream home: "));
const down_payment = total_cost * 0.25;
const monthly_salary = annual_salary / 12;
const annual_rate = 0.04;

let current_savings = 0;
let dividend;
let months = 0;

while (current_savings < down_payment) {
    dividend = current_savings * annual_rate / 12;
    current_savings = current_savings + dividend + (monthly_salary * portion_saved);
    months++;
}

console.log(annual_salary);
console.log(portion_saved);
console.log(total_cost);
console.log(months);