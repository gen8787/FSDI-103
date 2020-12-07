// The user can enter information such as product's name, quantity, price and the program should display the info on the console. Use the prompt to get the required information.
// The system should calculate the final price adding taxes (like in Mexico 16% of taxes).

alert("Welcome to Product Manager. Please add products.")
let again = false;

while (!again) {
    let prodName = prompt("Product Name:"),
    prodQty = Number(prompt("Quantity:")),
    prodPrice = Number(prompt("Price:"));

    let taxRate = .10,
        singleProdTotal = (prodPrice * taxRate) + prodPrice,
        prodTotal = singleProdTotal * prodQty;

    console.log(
        `
        Tax Rate: ${taxRate * 100}%
        
        Product Name: ${prodName}
        Quantity: ${prodQty}
        Price: $${prodPrice}
        Total (one): $${singleProdTotal}
        Total (all): $${prodTotal}
        `
    );

    let again = confirm("Add another product?");

    if (again == true) {
        continue;
    } else {
        break;
    };
}