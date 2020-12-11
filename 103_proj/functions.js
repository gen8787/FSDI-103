// function declaration
function hello() {
    console.log("Hello Console."); // Hello Console
};
hello();

// function expression
const sum = function(a, b) {
    console.log(a+b);
};
sum(1, 3); // 4

// Arrow Functions =>
const sum2 = (a, b) => a+b;
console.log(sum2(10,5)); // 15

let traveling = function(destination) {
    return `You are traveling to ${destination}!`
};
let travel;
travel = traveling("Paris");
travel = traveling("London");
console.log(travel); // London

let travel2 = dest => `Traveling to ${dest}!!!`
console.log(travel2("Mexico")); // Mexico

// IIFE
(function(topic) {
    console.log("Automatically loading..." + topic); // Success
})("SUCCESS!");

let theNumber = Number(prompt("Pick a number"));
console.log(Number.isNaN(theNumber));
if (!Number.isNaN(theNumber)) {
    console.log(`Your Number is the square root of ${theNumber * theNumber}`);
} else {
    console.log("That's not a number!");
};

let theNumber2 = Number(prompt("Pick a number"));
console.log(Number.isNaN(theNumber2));
if (isNaN(theNumber2)) {
    console.log("That's not a number!");
} else {
    console.log(`Your Number is the square root of ${theNumber2 * theNumber2}`);
};

const loggedIn = true;
if(loggedIn) {
    document.write("Logged in!")
} else {
    document.write("Log in?")
};

let num = Number(prompt("Enter a number"));

if (num < 10) {
    console.log("Small number");
} else if (num < 100) {
    console.log("Medium number");
} else {
    console.log("Large number");
};

//
var userName = "Mike";
var password = "124569";

var user = prompt("Enter Username:"), pass = prompt("Enter password:");

if (user == userName && pass == password) {
    document.write(`welcome, ${user}`)
} else {
    document.write("invalid credentials")
};

function larger() {
    num1 = Number(prompt("Enter a number:"));
    num2 = Number(prompt("Enter another number:"));

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Not a number!");
    } else if (num1 == num2){
        console.log("Same number!");
    } else if (num1 > num2) {
        console.log(`${num1} is the greater number.`);
    } else {
        console.log(`${num2} is the greater number.`);
    }
}

larger();

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

let num = 0;
console.time("Begin");
while (num <= 10) {
    console.log(num);
    num ++;
}
console.timeEnd("Begin");

let yourName;

do {
    yourName = prompt("Name???");
} while(!yourName);
console.log(yourName);

let numba = 0;
do{
    console.log(numba);
    numba ++;
} while (numba < 20);


for(i = 0; i < 10; i ++) {
    console.log(i);
}

for (var i = 1; i < 6; i ++) {
    console.log(" * ".repeat(i));
}