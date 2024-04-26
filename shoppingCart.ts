const prompt = require("prompt-sync")();
export {};

// SHOPPING CART
const shoppingCart = () => {
	const shoppingCart: string[] = [];
	const addItem = () => {
		const item: string | number = prompt("please enter an item: ");
		shoppingCart.push(item as any);
		return shoppingCart; // Return the updated shopping cart
	};
	const removeItem = () => {
		const item: string = prompt("please enter an item to remove: ");
		shoppingCart.splice(Number(item), 1);
		return shoppingCart; // Return the updated shopping cart
	};
	const showCart = () => {
		console.log(shoppingCart);
		return shoppingCart; // Return the shopping cart
	};
	return {
		addItem,
		removeItem,
		showCart,
	};
};

const cart = shoppingCart();

console.log("In cart: " + cart.addItem());
