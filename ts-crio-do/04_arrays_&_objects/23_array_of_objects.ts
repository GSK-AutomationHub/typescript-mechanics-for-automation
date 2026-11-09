// Arrays & Objects - typing collections of products and complex data structures!
// Combine what we learned about arrays and interfaces

interface Product {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
}

// Array of products
const catalog: Product[] = [
  { id: "SKU-001", name: "Wireless Mouse", price: 29.99, inStock: true },
  { id: "SKU-002", name: "USB-C Hub", price: 49.99, inStock: true },
  { id: "SKU-003", name: "Webcam HD", price: 79.99, inStock: false }
];

// TypeScript knows each item is a Product

catalog.forEach(product=>{
    console.log(`${product.name}: ${product.price}`)
});

for(let item of catalog){
    console.log(`${item.name}: ${item.price}`)
};