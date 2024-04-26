"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync")();
// SHOPPING CART
var shoppingCart = function () {
    var shoppingCart = [];
    var addItem = function () {
        var item = prompt("please enter an item: ");
        shoppingCart.push(item);
        return shoppingCart; // Return the updated shopping cart
    };
    var removeItem = function () {
        var item = prompt("please enter an item to remove: ");
        shoppingCart.splice(Number(item), 1);
        return shoppingCart; // Return the updated shopping cart
    };
    var showCart = function () {
        console.log(shoppingCart);
        return shoppingCart; // Return the shopping cart
    };
    return {
        addItem: addItem,
        removeItem: removeItem,
        showCart: showCart,
    };
};
var cart = shoppingCart();
console.log("In cart: " + cart.addItem());
