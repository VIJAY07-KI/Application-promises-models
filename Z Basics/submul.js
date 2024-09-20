function calculate(a, b, callback) {
    return callback(a, b);
}

// Callback function for multiplication
function multiply(x, y) {
    return x * y;
}

// Callback function for subtraction
function subtract(x, y) {
    return x - y;
}
// Using the calculate function with the multiply callback
let result1 = calculate(8, 3, multiply);
console.log("Multiplication Result: " + result1); // Output: Multiplication Result: 15

// Using the calculate function with the subtract callback
let result2 = calculate(8, 3, subtract);
console.log("Subtraction Result: " + result2); // Output: Subtraction Result: 2