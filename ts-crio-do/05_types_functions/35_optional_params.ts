// Optional Parameters
// Use ? for parameters that might not be provided:

function createProduct(name: string,price: number,description?: string): Product {
  return {
    id: generateId(),
    name,
    price,
    description,  // Will be undefined if not provided
    inStock: true
  };
}

// Both valid:
createProduct("Mouse", 29.99);
createProduct("Keyboard", 99.99, "Mechanical RGB keyboard");