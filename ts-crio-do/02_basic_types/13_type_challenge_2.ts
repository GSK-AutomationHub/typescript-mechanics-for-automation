// Add types to these variables
let itemName = "Bluetooth Speaker";
let unitPrice = 39.99;
let quantity = 2;
let isGiftWrapped = false;
let total = unitPrice * quantity;

// Solution -> TypeScript infers these correctly, but explicit types:
let itemName: string = "Bluetooth Speaker";
let unitPrice: number = 39.99;
let quantity: number = 2;
let isGiftWrapped: boolean = false;
let total: number = unitPrice * quantity;