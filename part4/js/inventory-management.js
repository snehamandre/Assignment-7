/*eslint-env browser*/

var inventory = [
    [4824, "Shirt", 10, 15.99],
    [6343, "Jeans", 22, 39.99],
    [3223, "Socks", 36, 9.99],
    [2233, "Hat", 12, 14.99],
    [9382, "Jacket", 5, 49.99],
];

function view() {
    inventory.forEach(function(item){
        console.log(item[0] + " " + item[1] + "(" + item[2] + ") $" + item[3]);
    });
}

function update() {
    var found = false;
    var sku = parseInt(window.prompt('Enter a sku  number'));
    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i][0] === sku) {
            var quantity_choice = window.prompt("Enter a new stock quantity");
            var quantity = Number(quantity_choice);
            if(!isNaN(quantity) && quantity!= null){
                inventory[i][2] = quantity;
                console.log( "Product "+inventory[i][1] + " was updated with quantity " + inventory[i][2]);
                found = true;
            } else {
                window.alert("Enter a valid quantity");
            }
            break;
        }  
    }
    if(!found) {
        window.alert("Product not found");
    }
}

function run() {
    console.log("\nProduct Inventory Management System\n\n");

    while (true) {
        var command = window.prompt("Enter a Command view/update/exit");
        if (command === "view") {
            view(inventory);
        } else if (command === "update") {
            update(inventory);
        } else if (command === "exit") {
            break;
        } else {
            window.alert("Please enter a valid command");
        }
    }
    console.log("Terminated");
}
run();