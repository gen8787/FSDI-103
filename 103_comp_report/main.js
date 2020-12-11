// F U N C T I O N S   (E X T R A   C H A L L E N G E)
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const refresh = () => location.reload();


// M A I N
let num1 = Number(prompt("Enter a number.")),
    num2 = null;

if (!isNaN(num1)) {
    num2 = Number(prompt("Enter another number."));

    if (!isNaN(num2)) {
        document.getElementById("add").innerHTML = (`${num1} + ${num2} = ${add(num1, num2)}`);
        document.getElementById("subtract").innerHTML = (`${num1} - ${num2} = ${subtract(num1, num2)}`);
        document.getElementById("multiply").innerHTML = (`${num1} * ${num2} = ${multiply(num1, num2)}`);
        document.getElementById("divide").innerHTML = (`${num1} / ${num2} = ${divide(num1, num2)}`);
    } else {
        alert("Please enter a valid number!");
        refresh();
    };

} else {
    alert("Please enter a valid number!");
    refresh();
};