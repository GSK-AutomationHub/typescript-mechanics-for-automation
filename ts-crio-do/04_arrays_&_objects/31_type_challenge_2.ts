/*
Create a Category Map -> 
Type an object where keys are category names and 
values are arrays of products
*/

const categoryProducts = {
  electronics: [
    { id: "1", name: "Phone", price: 699, inStock: true }
  ],
  clothing: [
    { id: "2", name: "T-Shirt", price: 25, inStock: true },
    { id: "3", name: "Jeans", price: 59, inStock: false }
  ]
};

//solution
interface Product{
    id: string;
    name: string;
    price: number;
    isStock: boolean
}

// using typing 
type categoryProducts = Record<string, Product[]>

// Or with an interface:
interface CategoryProducts {
  [category: string]: Product[];
}
