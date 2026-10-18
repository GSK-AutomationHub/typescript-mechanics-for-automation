// Tuples - Tuples are fixed-length arrays where each position has a specific type. 
// Great for returning multiple related values.

// [productId, quantity, price]
let cartItem: [string, number, number] = ["SKU-12345", 2, 29.99];

// Access by index
let id = cartItem[0];        // string
let qty = cartItem[1];       // number
let unitPrice = cartItem[2]; // number

// Product with name and price
let product: [string, number] = ["Wireless Mouse", 24.99];

// Coordinate for store location
let storeLocation: [number, number] = [37.7749, -122.4194];