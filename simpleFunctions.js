"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync")();
// CALCULATING THE AREA OF SQUARE //////////////////////////////////////
var side = Number(prompt("please enter a side of square: "));
var squareArea = function () {
    var area = side * side;
    return area;
};
var result_square = squareArea();
console.log("Square Area: " + result_square);
// CALCULATING THE AREA OF RECTANGLE /////////////////////////////////////////
var length = Number(prompt("please enter a length of square: "));
var width = Number(prompt("please enter a width of square: "));
var rectangleArea = function () {
    var area = length * width;
    return area;
};
var result_rectangle = rectangleArea();
console.log("Square Reactangle: " + result_rectangle);
// CALCULATING THE AREA OF CIRCLE /////////////////////////////////////////
var radius = Number(prompt("please enter a radius of circle: "));
var circleArea = function () {
    var area = Math.PI * (radius * radius);
    return area;
};
var result_circle = circleArea();
console.log("Circle Area: " + result_circle);
