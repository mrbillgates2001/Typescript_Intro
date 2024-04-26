const prompt = require("prompt-sync")();
export {};

// SIMPLE CALCULATOR ///////////////////////////

// Get references to elements
const num1Input: HTMLInputElement = document.getElementById(
	"num1"
) as HTMLInputElement;
const num2Input: HTMLInputElement = document.getElementById(
	"num2"
) as HTMLInputElement;
const addBtn: HTMLButtonElement = document.getElementById(
	"add"
) as HTMLButtonElement;
const subBtn: HTMLButtonElement = document.getElementById(
	"sub"
) as HTMLButtonElement;
const mulBtn: HTMLButtonElement = document.getElementById(
	"mul"
) as HTMLButtonElement;
const divBtn: HTMLButtonElement = document.getElementById(
	"div"
) as HTMLButtonElement;
const resultP: HTMLParagraphElement = document.getElementById(
	"result"
) as HTMLParagraphElement;
const clearBtn: HTMLButtonElement = document.getElementById(
	"clear"
) as HTMLButtonElement;

// Add event listeners for each operation button
addBtn.addEventListener("click", () => {
	const result = parseFloat(num1Input.value) + parseFloat(num2Input.value);
	resultP.textContent = `Result: ${result}`;
});

subBtn.addEventListener("click", () => {
	const result = parseFloat(num1Input.value) - parseFloat(num2Input.value);
	resultP.textContent = `Result: ${result}`;
});

mulBtn.addEventListener("click", () => {
	const result = parseFloat(num1Input.value) * parseFloat(num2Input.value);
	resultP.textContent = `Result: ${result}`;
});

divBtn.addEventListener("click", () => {
	const result = parseFloat(num1Input.value) / parseFloat(num2Input.value);
	resultP.textContent = `Result: ${result}`;
});

// Clear button functionality
clearBtn.addEventListener("click", () => {
	num1Input.value = "";
	num2Input.value = "";
	resultP.textContent = "";
});
