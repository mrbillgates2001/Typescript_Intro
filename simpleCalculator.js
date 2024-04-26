"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync")();
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
