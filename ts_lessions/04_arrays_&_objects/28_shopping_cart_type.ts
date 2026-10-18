
// Typing the Shopping Cart  --> Let's build a complete cart type

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl?: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface Cart {
  items: CartItem[];
  couponCode: string | null;
}

const cart: Cart = {
    items: [
        {  
            product: {id: "SKU-001", name: "Wireless Earbuds", price: 79.99},
            quantity: 2
        },
        {  
            product: {id: "SKU-002", name: "Phone Case", price: 19.99},
            quantity: 1
        }

    ],
    couponCode: 'SAVE10'
};

const subtotal = cart.items.reduce((sum, item)=> sum + item.product.price,0);
console.log(`Subtotal: ${subtotal.toFixed(2)}`);