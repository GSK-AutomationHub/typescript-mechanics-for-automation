
// Optional Properties - Not every product has every field. Use ? for optional properties.

interface Product {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
  description?: string;      // Optional
  discountPercent?: number;  // Optional
  imageUrl?: string;         // Optional
}

// Valid - optional fields can be omitted
const basicProduct: Product = {
  id: "SKU-001",
  name: "USB Cable",
  price: 9.99,
  inStock: true
};

// Also valid - with optional fields
const featuredProduct: Product = {
  id: "SKU-002",
  name: "4K Monitor",
  price: 399.99,
  inStock: true,
  description: "Ultra-wide 32 inch display",
  discountPercent: 15,
  imageUrl: "/images/monitor.jpg"
};
