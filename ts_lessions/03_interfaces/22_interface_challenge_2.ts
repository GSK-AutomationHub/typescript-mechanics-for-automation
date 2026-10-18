
/*
Challenge 2: Extend the Product - Create a ClothingProduct that extends Product with:
  size: string
  color: string
  material: string

*/


// Base product
interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    inStock: boolean;
}

// Clothing Product

interface ClothingProduct extends Product {
    size: string;
    color: string;
    material: string;
}

const tshirt: ClothingProduct = {
    id: "SKU-100",
    name: "Cotton T-Shirt",
    price: 24.99,
    category: "clothing",
    inStock: true,
    size: "M",
    color: "Navy Blue",
    material: "100% Cotton"
    
};