let numberOfChildren = 1,
    partnerName = "Woman",
    geoLoc = "Las Vegas",
    jobTitle = "Guide";

console.log("Your Fortune:\n\nYou will be a " + jobTitle + " in " + geoLoc + " and married to " + partnerName + " with " + numberOfChildren + " kids.");

console.log("\nYour Fortune:");
console.log(`You will be a ${jobTitle} in ${geoLoc} and married to ${partnerName} with ${numberOfChildren} kids.`);

document.write(`You will be a ${jobTitle} in ${geoLoc} and married to ${partnerName} with ${numberOfChildren + 1} kids.`)

let name = "Gary",
    email = "gary@gmail.com",
    password = "passw0rd",
    age = 33,
    country = "USA",
    salary = 2000;

const info = ` Name: ${name}\n Email: ${email}\n Password: ${password}\n Age: ${age}\n Country: ${country}\n Salary: ${salary * 12} annual`

console.log(` Name: ${name}\n Email: ${email}\n Password: ${password}\n Age: ${age}\n Country: ${country}\n Salary: ${salary * 12} annual`);

document.write(info)

const info2 = [name, email, password, age, country, salary]
for (let i = 0; i < info2.length; i ++) {
    console.log(info2[i]);
}

let promptInfo = [];
promptInfo.push(prompt("Enter your name."));
promptInfo.push(prompt("Enter your email."));
promptInfo.push(prompt("Enter your password."));
promptInfo.push(prompt("Enter your age."));
promptInfo.push(prompt("Enter your country."));
promptInfo.push(prompt("Enter your salary."));

for (var i = 0; i < promptInfo.length; i ++) {
    console.log(promptInfo[i]);
}