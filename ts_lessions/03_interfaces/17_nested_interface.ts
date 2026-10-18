
// Nested Interfaces -> Real data is nested. Interfaces can reference other interfaces.

interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface Customer {
  id: string;
  email: string;
  name: string;
  shippingAddress: Address;   // Nested interface
  billingAddress?: Address;   // Optional nested interface
}


const customer: Customer = {
  id: "CUST-001",
  email: "sarah@example.com",
  name: "Sarah Johnson",
  shippingAddress: {
    street: "123 Main St",
    city: "San Francisco",
    state: "CA",
    zipCode: "94102",
    country: "USA"
  }
  // billingAddress omitted - will use shipping address
};