// Combining with Known Properties

interface Product {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
}

interface ProductMap {
  lastUpdated: Date;                    // Known property
  [productId: string]: Product | Date;  // Dynamic properties
}

// Better approach - use a nested structure:

interface Catalog {
  lastUpdated: Date;
  products: {
    [productId: string]: Product;
  };
}

const catalog: Catalog = {
  lastUpdated: new Date(),
  products: {
    "SKU-001": { id: "SKU-001", name: "Mouse", price: 29.99, inStock: true },
    "SKU-002": { id: "SKU-002", name: "Keyboard", price: 99.99, inStock: true }
  }
};