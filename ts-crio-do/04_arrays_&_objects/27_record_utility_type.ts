
// The Record Utility Type -> A cleaner way to type objects with dynamic keys

// Record<KeyType, ValueType>
type Inventory = Record<string, number>;

const stock: Inventory = {
  "SKU-001": 50,
  "SKU-002": 125
};

// Prices by product ID
type PriceList = Record<string, number>;

const prices: PriceList = {
  "SKU-001": 29.99,
  "SKU-002": 49.99
};

interface Product {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
}

// Product lookup by ID
type ProductLookup = Record<string, Product>;

const products: ProductLookup = {
  "SKU-001": { id: "SKU-001", name: "Mouse", price: 29.99, inStock: true }
};

