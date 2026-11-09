
// This code has type errors. Can you spot them?
let productName: number = "Laptop";           // ❌
let price: string = 999;                       // ❌
let inStock: number = true;                    // ❌
let tags: string = ["electronics", "sale"];    // ❌

// Solved
let productName: string = "Laptop";                 // ✅
let price: number = 999;                            // ✅
let inStock: boolean = true;                        // ✅
let tags: string[] = ["electronics", "sale"];       // ✅
let tags1: Array<string> = ["electronics", "sale"]; // ✅