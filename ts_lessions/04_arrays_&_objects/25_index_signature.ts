// Index Signatures -> Sometimes you don't know property names ahead of time 
// - like a product inventory by SKU:

// Stock levels by product ID
interface Inventory {
  [productId: string]: number;  // Any string key -> number value
}

const stock: Inventory = {
  "SKU-001": 50,
  "SKU-002": 125,
  "SKU-003": 0,
  "SKU-004": 30
};

// Access dynamically
const sku = "SKU-002";
console.log(`Stock for ${sku}: ${stock[sku]}`);  // 125

// Add new entries
stock["SKU-005"] = 75;


