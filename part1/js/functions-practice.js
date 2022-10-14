//STEP 1

function halfNumber(number) {
    var result = number / 2;
    window.console.log("Half of " +number+ " is " +result);
    return result;
}
halfNumber(5);

//STEP 2
function squareNumber(number) {
    var result = number * number;
    window.console.log("The result of squaring the number " +number+ " is " +result);
    return result;
}
squareNumber(5);

//STEP 3
function percentOf(num1, num2) {
    var result = (num1 / num2) * 100;
    window.console.log(num1+ " is " +result+ "% of " +num2);
    return result;
}
percentOf(5, 20);

//STEP 4
function findModulus(num1, num2) {
    var result = num2 % num1;
    window.console.log(result+ " is Modulus of " + num1 + " and " + num2);
    return result;
}
findModulus(4, 10);

//STEP 5
function additionOf(number) {
    var input = window.prompt("Enter " + number + " numbers delimited by commas");
    var inputArray = input.split(",").map(function (item) {
        return parseInt(item, 10);
    });

    var result = inputArray.reduce(function (sum, current) {
        return sum + current;
    });
    window.console.log("Sum of numbers: " + result);
}
additionOf(4);