// Readonly Properties - Some properties shouldn't change after creation.

interface Order {
  readonly orderId: string;      // Can't change after creation
  readonly createdAt: Date;      // Can't change after creation
  items: CartItem[];             // Can be modified
  status: string;                // Can be modified
}

const order: Order = {
  orderId: "ORD-12345",
  createdAt: new Date(),
  items: [],
  status: "pending"
};

order.status = "shipped";     // ✅ OK
order.orderId = "ORD-99999";  // ❌ Error: Cannot assign to 'orderId' because it is read-only