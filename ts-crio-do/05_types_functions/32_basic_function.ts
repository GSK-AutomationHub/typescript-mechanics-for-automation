// Basic Function Types
// Add types to parameters and return values:

function calculateSubTotal(price: number, quantity: number): number{
    const subtotal: number = price * quantity
    return subtotal;
}

const result = calculateSubTotal(29.99, 5)
console.log(`the Subtotal is ${result}`)

// calculateSubtotal("29.99", 3);  // ❌ Error: string not assignable to number