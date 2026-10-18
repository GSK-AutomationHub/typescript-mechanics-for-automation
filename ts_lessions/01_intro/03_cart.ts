// Variable with type
let productName: string = 'MacBook pro';
let productPrice: number = 1499;
let inStock: boolean = true;

// TypeScript can also infer types automatically
let quantity = 5;  // TypeScript knows this is a number

let itemName: string = 'Wireless Headphones';
let itemPrice: number = 79.99;
let itemQuantity: number = 1;

let total: number = itemPrice * itemQuantity;
console.log(`${itemQuantity}x ${itemName} = ${total}`);