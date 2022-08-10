const shoppingCard = [
    { name: "Shoe", price: 1700, quantity: 5 },
    { name: "Shirt", price: 2200, quantity: 5 },
    { name: "Pant", price: 3500, quantity: 5 },
    { name: "T-Shatr", price: 500, quantity: 5 },
];
function totalCost(products) {
    let sum = 0; 
    for (let i = 0; i < products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        // sum = sum + product.price;
       sum = sum + productTotal;
        // console.log(sum);
        // console.log(productTotal);
    }
    return sum;
}
const expance = totalCost(shoppingCard);
console.log("Total expance today", expance);