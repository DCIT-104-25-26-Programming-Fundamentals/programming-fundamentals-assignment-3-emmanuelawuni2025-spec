// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// TASK: Console-Based Simple Calculator
// =============================================================================

const readlineSync = require('readline-sync');

/**
 * Adds two numbers.
 * 
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} Sum of a and b.
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts second number from first number.
 * 
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} Difference of a and b.
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 * 
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} Product of a and b.
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides first number by second number.
 * 
 * @param {number} a - Dividend.
 * @param {number} b - Divisor.
 * @returns {number|null} Quotient or null if dividing by zero.
 */
function divide(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}

/**
 * Computes remainder of division of first number by second number.
 * 
 * @param {number} a - Dividend.
 * @param {number} b - Divisor.
 * @returns {number|null} Remainder or null if divisor is zero.
 */
function modulus(a, b) {
  if (b === 0) {
    return null;
  }
  return a % b;
}

/**
 * Raises first number to power of second number.
 * 
 * @param {number} base - Base number.
 * @param {number} exponent - Exponent power.
 * @returns {number} Base raised to power of exponent.
 */
function exponentiate(base, exponent) {
  return base ** exponent;
}

/**
 * Displays calculator menu options.
 */
function displayMenu() {
  console.log('\n============================');
  console.log('     SIMPLE CALCULATOR');
  console.log('============================');
  console.log('1. Addition');
  console.log('2. Subtraction');
  console.log('3. Multiplication');
  console.log('4. Division');
  console.log('5. Modulus');
  console.log('6. Exponentiation');
  console.log('7. Quit');
}

/**
 * Formats results cleanly to 2 decimal places when necessary.
 * 
 * @param {number} value - Numerical result.
 * @returns {string} Formatted result string.
 */
function formatResult(value) {
  return Number.isInteger(value) ? value.toString() : value.toFixed(2);
}

/**
 * Main interactive loop driving calculator execution.
 */
function main() {
  let isRunning = true;

  while (isRunning) {
    displayMenu();
    const choice = readlineSync.questionInt('Select an operation (1-7): ');

    if (choice === 7) {
      console.log('Goodbye!');
      isRunning = false;
      continue;
    }

    if (choice < 1 || choice > 7) {
      console.log('Invalid choice! Please select an option between 1 and 7.');
      continue;
    }

    const num1 = readlineSync.questionFloat('Enter first number : ');
    const num2 = readlineSync.questionFloat('Enter second number: ');

    let result;
    let operatorStr;

    switch (choice) {
      case 1:
        result = add(num1, num2);
        operatorStr = '+';
        break;
      case 2:
        result = subtract(num1, num2);
        operatorStr = '-';
        break;
      case 3:
        result = multiply(num1, num2);
        operatorStr = '*';
        break;
      case 4:
        result = divide(num1, num2);
        operatorStr = '/';
        break;
      case 5:
        result = modulus(num1, num2);
        operatorStr = '%';
        break;
      case 6:
        result = exponentiate(num1, num2);
        operatorStr = '**';
        break;
    }

    if (result === null) {
      console.log('Error: Cannot divide by zero.');
    } else {
      console.log(`Result: ${num1} ${operatorStr} ${num2} = ${formatResult(result)}`);
    }
  }
}

// Execute the program
main();


