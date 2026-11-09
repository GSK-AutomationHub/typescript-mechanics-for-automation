// Type Aliases for Functions
// Define reusable function types:

// Define the reusable function type
type PriceCalculator = (price: number, quantity: number) => number


// Use it
const calculateTotal: PriceCalculator = (price, quantity) => {
  return price * quantity;
};

//Re-use it
const calculateWithTax: PriceCalculator = (price, quantity) => {
  return price * quantity * 1.1;  // 10% tax
};