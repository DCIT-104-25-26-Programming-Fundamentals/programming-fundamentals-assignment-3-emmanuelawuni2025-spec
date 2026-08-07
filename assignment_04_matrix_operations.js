// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');
// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// TASK: Matrix Operations
// =============================================================================

const readlineSync = require('readline-sync');

/**
 * Reads a matrix of size rows x cols from the user.
 * 
 * @param {number} rows - Number of rows.
 * @param {number} cols - Number of columns.
 * @param {string} matrixName - Optional display label for prompt context.
 * @returns {number[][]} The constructed M x N matrix.
 */
function readMatrix(rows, cols, matrixName = '') {
  const label = matrixName ? ` for Matrix ${matrixName}` : '';
  console.log(`\nEnter values${label} (${rows}x${cols}):`);
  
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    let rowValues;
    do {
      const line = readlineSync.question(`Enter row ${i + 1}: `);
      rowValues = line.trim().split(/\s+/).map(Number);
      
      if (rowValues.length !== cols || rowValues.some(isNaN)) {
        console.log(`Invalid input. Please enter exactly ${cols} space-separated numbers.`);
      }
    } while (rowValues.length !== cols || rowValues.some(isNaN));
    
    matrix.push(rowValues);
  }
  return matrix;
}

/**
 * Displays a matrix in a neat, aligned grid format.
 * 
 * @param {number[][]} matrix - The matrix to print.
 * @param {string} label - Optional header label.
 */
function printMatrix(matrix, label = '') {
  if (label) {
    console.log(`\n${label}:`);
  }
  
  for (let i = 0; i < matrix.length; i++) {
    const rowStr = matrix[i].map(val => String(val).padStart(5, ' ')).join(' ');
    console.log(rowStr);
  }
}

/**
 * Computes the transpose of an M x N matrix (resulting in an N x M matrix).
 * 
 * @param {number[][]} matrix - Input M x N matrix.
 * @returns {number[][]} Transposed N x M matrix.
 */
function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const transposed = [];

  for (let j = 0; j < cols; j++) {
    const newRow = [];
    for (let i = 0; i < rows; i++) {
      newRow.push(matrix[i][j]);
    }
    transposed.push(newRow);
  }

  return transposed;
}

/**
 * Adds two M x N matrices element-wise.
 * 
 * @param {number[][]} matrixA - First M x N matrix.
 * @param {number[][]} matrixB - Second M x N matrix.
 * @returns {number[][]} Sum M x N matrix.
 */
function addMatrices(matrixA, matrixB) {
  const rows = matrixA.length;
  const cols = matrixA[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(matrixA[i][j] + matrixB[i][j]);
    }
    result.push(row);
  }

  return result;
}

/**
 * Multiplies an M x N matrix by an N x P matrix (resulting in an M x P matrix).
 * 
 * @param {number[][]} matrixA - M x N matrix.
 * @param {number[][]} matrixB - N x P matrix.
 * @returns {number[][]} Product M x P matrix.
 */
function multiplyMatrices(matrixA, matrixB) {
  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const colsB = matrixB[0].length;
  const result = [];

  for (let i = 0; i < rowsA; i++) {
    const row = [];
    for (let j = 0; j < colsB; j++) {
      let sum = 0;
      for (let k = 0; k < colsA; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      row.push(sum);
    }
    result.push(row);
  }

  return result;
}

/**
 * Main execution function demonstrating all three parts.
 */
function main() {
  console.log('====================================================');
  console.log('PART A — TRANSPOSE A MATRIX');
  console.log('====================================================');
  const rowsA = readlineSync.questionInt('Enter number of rows: ');
  const colsA = readlineSync.questionInt('Enter number of columns: ');

  if (rowsA <= 0 || colsA <= 0) {
    console.log('Error: Dimensions must be positive integers.');
    return;
  }

  const matrixA = readMatrix(rowsA, colsA);
  printMatrix(matrixA, 'Original Matrix');

  const transposed = transposeMatrix(matrixA);
  printMatrix(transposed, 'Transposed Matrix');

  console.log('\n====================================================');
  console.log('PART B — ADD TWO MATRICES');
  console.log('====================================================');
  console.log(`Reading Matrix B of size ${rowsA}x${colsA} (same size as Matrix A)...`);
  const matrixB = readMatrix(rowsA, colsA, 'B');

  const sum = addMatrices(matrixA, matrixB);
  printMatrix(sum, 'Matrix A + Matrix B');

  console.log('\n====================================================');
  console.log('PART C — MULTIPLY TWO MATRICES');
  console.log('====================================================');
  console.log(`To multiply A x C, Matrix C must have ${colsA} rows.`);
  const colsC = readlineSync.questionInt(`Enter number of columns for Matrix C: `);

  if (colsC <= 0) {
    console.log('Error: Number of columns must be a positive integer.');
    return;
  }

  const matrixC = readMatrix(colsA, colsC, 'C');
  printMatrix(matrixC, 'Matrix C');

  const product = multiplyMatrices(matrixA, matrixC);
  printMatrix(product, 'Matrix Product (A x C)');
}

// Execute the program
main();

