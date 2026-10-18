
// Extending Interfaces -> Build on existing interfaces to avoid repetition.

// Base product
interface Product {
  id: string;
  name: string;
  price: number;
}

// Physical product adds shipping info
interface PhysicalProduct extends Product {
  weight: number;       // in kg
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
}

// Digital product adds download info
interface DigitalProduct extends Product {
  downloadUrl: string;
  fileSizeMB: number;
}

const laptop: PhysicalProduct = {
  id: "SKU-001",
  name: "MacBook Pro",
  price: 1999,
  weight: 1.4,
  dimensions: { width: 31, height: 1.6, depth: 22 }
};

const ebook: DigitalProduct = {
  id: "SKU-002",
  name: "TypeScript Handbook",
  price: 29,
  downloadUrl: "/downloads/ts-handbook.pdf",
  fileSizeMB: 15
  
};
