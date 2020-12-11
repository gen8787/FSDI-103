//  M A T H   F U N C T I O N S
function add(num1, num2) {
    return num1 + num2;
}

function subtract() {
    return num1 - num2;
}

function multiply() {
    return num1 * num2;
}

function divide() {
    return num1 / num2;
}


// M A I N
let num1 = prompt("Enter a number."),
    num2 = null;

if (isNaN(num1)) {
    alert("Please enter a valid number!");
    location.reload();
} else {
    num2 = (prompt("Enter another number."));
}

if (isNaN(num2)) {
    alert("Please enter a valid number!");
    location.reload();
}


add(num1, num2);
subtract(num1, num2);
multiply(num1, num2);
divide(num1, num2);