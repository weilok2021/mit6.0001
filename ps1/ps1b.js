// Part B: Saving, with a raise

// Understand the problem: Compare to ps1a, a semi annual raise to the salary needs to be consider
    // in this problem

// Your program should ask the user to enter the following variables:
//     1. The starting annual salary (annual_salary)
//     2. The portion of salary to be saved (portion_saved)
//     3. The cost of your dream home (total_cost)
//     4. The semi­annual salary raise (semi_annual_raise)

// Planning: 
    // How do we get user input? By browser prompt.
    // constant that will remain unchanged: total_cost, portion_down_payment, portion_saved
    // , annual rate, semi annual raise

    // variables that will change: dividend_in_month, current_savings, annual salary , monthly salary
    // dividend is invested using current_savings, so divident will increase as savings increases

    // Now how do we calculate the dividend and savings in loops?
    // For now I assume as the problem mentioned, current_savings and dividend is increased per month,
    // so each iteration of a loop will be a month, we can prove this by incrementing month counter in the loop!

// Pseudocode

// Prompt user for starting annual salary
// Prompt user for portion of salary to be saved 
// Prompt user for cost of dream home 
// Prompt user for the semi_annual_raise 
// Compute down payment using the total cost
// Compute starting monthly salary using annual salary
// initialize current_savings with value 0
// Loop when current_savings is lower than the down payment 
// IF months modulo 6 === 0: increase current annual salary by semi_annual_raise percentage
// Compute dividend of this month with current_savings
// Increase current savings with dividend plus (monthly salary * portion_saved)

let annual_salary = parseFloat(prompt("Enter your starting annual salary: "));
const portion_saved = parseFloat(prompt("Enter the percent of your salary to save, as a decimal: "));
const total_cost = parseFloat(prompt("Enter the cost of your dream home: "));
const semi_annual_raise = parseFloat(prompt("Enter the semiannual raise, as a decimal: "));
const down_payment = total_cost * 0.25;
const annual_rate = 0.04;

let monthly_salary = annual_salary / 12;
let current_savings = 0;
let dividend;
let months = 0;

while (current_savings < down_payment) {
    // After the 6​th​ month, increase your salary by that percentage
    // this requirement is satisfied as this if block will be run at months === 7, months === 13, etc..
    if (months % 6 === 0 && months !== 0) {
        annual_salary = annual_salary * (1 + semi_annual_raise);
        monthly_salary = annual_salary / 12;
    }

    dividend = current_savings * annual_rate / 12;
    current_savings = current_savings + dividend + (monthly_salary * portion_saved);
    months++;
}

console.log(annual_salary);
console.log(portion_saved);
console.log(total_cost);
console.log(semi_annual_raise);
console.log(months);