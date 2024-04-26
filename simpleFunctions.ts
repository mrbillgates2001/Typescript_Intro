const prompt = require("prompt-sync")();
export {};

// CALCULATING THE AREA OF SQUARE //////////////////////////////////////

let side: string | number = Number(prompt("please enter a side of square: "));
const squareArea = () => {
	const area: number = side * side;
	return area;
};

const result_square: number = squareArea();
console.log("Square Area: " + result_square);

// CALCULATING THE AREA OF RECTANGLE /////////////////////////////////////////

let length: string | number = Number(
	prompt("please enter a length of square: ")
);
let width: string | number = Number(prompt("please enter a width of square: "));
const rectangleArea = () => {
	const area: number = length * width;
	return area;
};

const result_rectangle: number = rectangleArea();
console.log("Square Reactangle: " + result_rectangle);

// CALCULATING THE AREA OF CIRCLE /////////////////////////////////////////

let radius: string | number = Number(
	prompt("please enter a radius of circle: ")
);
const circleArea = () => {
	const area: number = Math.PI * (radius * radius);
	return area;
};

const result_circle: number = circleArea();
console.log("Circle Area: " + result_circle);
