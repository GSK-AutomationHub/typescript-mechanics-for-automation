// Arrays - Arrays hold multiple values of the same type.

// Array of product names
let categories: string[] = ["Electronics", "Clothing", "Home"];

let categories2: Array<string> = ["Electronics", "Clothing", "Home"];

// Array of prices
let recentPrices: number[] = [29.99, 49.99, 19.99, 99.99];

// Array of stock statuses
let availability: boolean[] = [true, true, false, true];

// Alternative syntax (same thing)
let productIds: Array<string> = ["SKU-001", "SKU-002", "SKU-003"];


//Working with Arrays
let cartPrices: number[] = [29.99, 49.99, 19.99];

// Add an item
cartPrices.push(9.99);

// Get total
let total = cartPrices.reduce((sum, price) => sum + price, 0);

// Filter expensive items
let expensive = cartPrices.filter(price => price > 20);