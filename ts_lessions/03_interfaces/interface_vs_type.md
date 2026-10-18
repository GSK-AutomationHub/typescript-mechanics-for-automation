Interface vs Type Key Differences
Feature	Interface	Type Alias
Extend/Inherit	extends	& intersection
Merge declarations	Yes	No
Union types	No	Yes
Primitives	No	Yes

Rule of thumb: Use interface for objects, type for unions and primitives.

// Interface for objects
interface CartItem {
  product: Product;
  quantity: number;
}

// Type for unions (covered next lesson)
type PaymentMethod = "card" | "upi" | "cod";

// Type for computed types
type ProductWithQty = Product & { quantity: number };