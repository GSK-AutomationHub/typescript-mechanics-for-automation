
// undefined: variable declared but not assigned
let couponCode: string | undefined;  // Customer might not have a coupon

// null: intentionally empty
let selectedProduct: string | null = null;  // Nothing selected yet

// Practical example
let discountCode: string | null = null;

let isPremiumMember: boolean = true;

if (isPremiumMember) {
  discountCode = "PREMIUM20";
}