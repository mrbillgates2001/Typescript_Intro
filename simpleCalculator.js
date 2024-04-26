"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync")();
///// AGAR UI ISHLAMASA, PASDAGI CODE NI TERMINALDA ISHLATIB KO'RING /////////
// SIMPLE CALCULATOR ///////////////////////////
// Get references to elements
var num1Input = document.getElementById("num1");
var num2Input = document.getElementById("num2");
var addBtn = document.getElementById("add");
var subBtn = document.getElementById("sub");
var mulBtn = document.getElementById("mul");
var divBtn = document.getElementById("div");
var resultP = document.getElementById("result");
var clearBtn = document.getElementById("clear");
// Add event listeners for each operation button
addBtn.addEventListener("click", function () {
    var result = parseFloat(num1Input.value) + parseFloat(num2Input.value);
    resultP.textContent = "Result: ".concat(result);
});
subBtn.addEventListener("click", function () {
    var result = parseFloat(num1Input.value) - parseFloat(num2Input.value);
    resultP.textContent = "Result: ".concat(result);
});
mulBtn.addEventListener("click", function () {
    var result = parseFloat(num1Input.value) * parseFloat(num2Input.value);
    resultP.textContent = "Result: ".concat(result);
});
divBtn.addEventListener("click", function () {
    var result = parseFloat(num1Input.value) / parseFloat(num2Input.value);
    resultP.textContent = "Result: ".concat(result);
});
// Clear button functionality
clearBtn.addEventListener("click", function () {
    num1Input.value = "";
    num2Input.value = "";
    resultP.textContent = "";
});
///// IF UI IS NOT WORKING< USE TERMINAL TO CHECK MY FUNCTIONS /////////
// SIMPLE CALCULATOR ///////////////////////////
var num1 = prompt("Please enter a number");
var num2 = prompt("Please enter another number");
var operation = prompt("Please enter a operation (+, -, *,  /): ");
var result = 0;
switch (operation) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    default:
        result = 0;
        break;
}
console.log(result);
