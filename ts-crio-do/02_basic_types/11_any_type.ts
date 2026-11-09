
// any -> The any Type (Use Sparingly!), any disables type checking. 
// Avoid it when possible. ❌ Bad - loses all type safety

let product1: any = { name: "Phone", price: 999 };
product1 = "oops, now I'm a string";  // No error!

// ✅ Better - we'll learn proper typing next lesson
let product2 = { name: "Phone", price: 999 };