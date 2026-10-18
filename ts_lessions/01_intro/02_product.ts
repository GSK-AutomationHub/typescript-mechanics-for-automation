
interface Product{
    name: string;
    price: number;
}

const iPhone: Product = {
    name:'iPhone 15',
    price: 1000
};

console.log(`${iPhone.name} costs ${iPhone.price}`)