var name = "Mike";
var htmlCode = `<b>Hello, ${name}</b>`

document.getElementById("msg").innerHTML=htmlCode;


function dateFormatter() {
    date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

console.log(dateFormatter());

date2 = new Date();
date2.getDate();
date2.getMonth();
date2.getFullYear();
date2.getDay();

date3 = new Date().toDateString() // Thu Dec 10 2020
date4 = new Date().toString() // Thu Dec 10 2020 18:10:23 GMT-0800 (PST)
date5 = new Date().toLocaleDateString() // 12/10/2020
date5 = new Date().getUTCDay() // 5
console.log(date5);