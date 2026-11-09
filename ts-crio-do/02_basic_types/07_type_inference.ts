
/*
 Type Inference - TypeScript is smart. If you assign a value immediately, it infers the type
 Best Practice:  Let TypeScript infer when it's obvious.  Add explicit types for function parameters 
 and when the type isn't clear.*/


// Explicit types (you write them)
let productId: string = "SKU-12345";
let price: number = 49.99;


// Inferred types (TypeScript figures it out)
let newProductId = "SKU-12345";  // TypeScript knows: string
let newProductPrice = 49.99;     // TypeScript knows: number
let inStock = true;              // TypeScript knows: boolean

