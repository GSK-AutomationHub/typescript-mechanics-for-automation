// Array Methods with Types -> TypeScript tracks types through array operations

interface Product {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
}

const products: Product[] = [
  { id: "SKU-001", name: "Keyboard", price: 99.99, inStock: true },
  { id: "SKU-002", name: "Mouse", price: 29.99, inStock: true },
  { id: "SKU-003", name: "Monitor", price: 299.99, inStock: false }
];

// filter() returns Product[] -> TypeScript knows: inStockProducts is Product[]
const inStockProducts = products.filter(product => product.inStock);
console.log('Available Products', inStockProducts)

// map() returns the mapped type -> TypeScript knows: names is string[], price is number[]
const productNames = products.map(product => product.name);
const productPrices = products.map(product => product.price);

console.log('Product Names', productNames)
console.log('Product Prices', productPrices)

// find() returns Product | undefined (might not find it!)
// TypeScript knows: keyboard is Product | undefined
const keyboard = products.find(p => p.name === "Keyboard");
if (keyboard) {
  console.log(keyboard.price);  // Safe to access after check
}

// reduce() - type the accumulator -> Initial value tells TS the return type is number
const totalValue = products.reduce((sum, product) => sum + product.price, 0);

