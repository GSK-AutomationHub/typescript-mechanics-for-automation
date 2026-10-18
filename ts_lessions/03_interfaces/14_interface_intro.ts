// Interfaces - defining the shape of complex objects like Products and Orders!
// Interface used to add architecture aspect & uniformity in object shape

interface Product {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
}


// Now TypeScript enforces this shape
const headphones: Product = {
  id: "SKU-001",
  name: "Wireless Headphones",
  price: 79.99,
  inStock: true
};


// ❌ Error: Missing 'inStock' property
const keyboard: Product = {
  id: "SKU-002",
  name: "Mechanical Keyboard",
  price: 149.99
  // Property 'inStock' is missing in type
};

// ❌ Error: 'cost' doesn't exist, did you mean 'price'?
const mouse: Product = {
  id: "SKU-003",
  name: "Gaming Mouse",
  cost: 59.99,  // Wrong property name!, its 'price & not cost
  inStock: true
};