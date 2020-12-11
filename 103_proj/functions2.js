function countTo100() {
    for (var i = 1; i <= 100; i ++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
// countTo100();


var numbers = [1, 2, 3, 4, 5];
// console.table(numbers);

for (var i = 0; i < numbers.length; i ++) {
    console.log(numbers[i]);
}
console.log("---------");

var names = ["A", "B", "C", "D"];
for (char of names) {
    console.log(char);
}
console.log("---------");

for (char in names) {
    console.log(names[char]);
}
console.log("---------");
