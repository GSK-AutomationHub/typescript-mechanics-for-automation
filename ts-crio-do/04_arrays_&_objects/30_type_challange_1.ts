/*
Type Challenge 1: Type the Order History
Create types for an order with multiple items 
*/

// Your types here

const order = {
  orderId: "ORD-12345",
  date: new Date("2024-01-15"),
  items: [
    { productName: "Laptop", price: 999, quantity: 1 },
    { productName: "Mouse", price: 29, quantity: 2 }
  ],
  total: 1057,
  status: "delivered"
};


// solution

interface OrderItem{
    productName: string;
    price: number;
    quantity: number;

}

interface Order  {
    orderId: string;
    date: Date;
    items: OrderItem[];
    total: number;
    status: string;

}