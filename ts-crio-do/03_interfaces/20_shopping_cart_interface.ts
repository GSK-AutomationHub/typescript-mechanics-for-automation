interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  imageUrl?: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface Cart {
  items: CartItem[];
  couponCode?: string;
}

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
  address: Address
}

interface Order {
  readonly orderId: string;
  readonly createdAt: Date;
  customer: Customer;
  items: CartItem[];
  shippingAddress: Address;
  status: "pending" | "paid" | "shipped" | "delivered";
  total: number;
}