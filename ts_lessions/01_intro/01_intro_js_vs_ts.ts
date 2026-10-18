
// JavaScript -> no data type mentioned for function paramemter, funcion return
// function calculateTotal(price, quantity){
//     return price * quantity
// }


// TypeScript -> data type mention for fn parameter & return
function calculateTotal(price:number, quantity:number):number{
    return price * quantity
}

//calculateTotal("49.99", 2) // error -> as argument of string tye not assignable to param of number type

const productTotal = calculateTotal(49.99, 2);
console.log(productTotal)
