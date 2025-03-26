function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

export { add, subtract, multiply, divide };

var num1 = 5;
var num2 = 10;

console.log(add(num1, num2)); // 15
console.log(subtract(num1, num2)); // -5
console.log(multiply(num1, num2)); // 50
console.log(divide(num1, num2)); // 0.5
console.log(divide(num1, 0)); // Error: Cannot divide by zero
console.log(muy bien);
console.log("hola");