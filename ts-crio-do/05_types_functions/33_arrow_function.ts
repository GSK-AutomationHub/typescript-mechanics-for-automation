// Arrow Functions
// Same concept, different syntax:

const calculateSubTotal = (price: number, quantity: number): number => {
    const subtotal: number = price * quantity;
    return subtotal;
}

const result = calculateSubTotal(29.99, 5);
console.log(`the Subtotal is ${result}`);


// Inline type annotation
const calculateTax = (amount: number, rate: number): number => {
  return amount * rate;
};

// Shorter for simple functions
const formatPrice = (price: number): string => `${price.toFixed(2)}`;

console.log(formatPrice(29.99));  // "$29.99"