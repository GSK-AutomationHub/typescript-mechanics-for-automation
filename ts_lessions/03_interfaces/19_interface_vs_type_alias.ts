
// Interface vs Type Alias -> Both can define object shapes. Here's when to use each:

// Interface - preferred for objects
interface Product {
  name: string;
  price: number;
}

// Type alias - same result
type ProductType = {
  name: string;
  price: number;
};