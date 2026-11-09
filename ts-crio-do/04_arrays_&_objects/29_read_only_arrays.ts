
// Readonly Arrays  --> Prevent accidental mutations

// Immutable product list
const featuredProducts: readonly Product[] = [
  { id: "SKU-001", name: "Best Seller", price: 99.99, inStock: true }
];

featuredProducts.push({ /* ... */ });  // ❌ Error: Property 'push' does not exist on type 'readonly Product[]'


// Alternative syntax
const categories: ReadonlyArray<string> = ["Electronics", "Clothing", "Home"];

categories[0] = "Tech";  // ❌ Error: Index signature in type 'readonly string[]' only permits reading