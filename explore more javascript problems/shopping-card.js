const shoppingCard = [
    { name: "Shoe", price: 1700 },
    { name: "Shirt", price: 2200 },
    { name: "Pant", price: 3500 },
    { name: "T-Shatr", price: 500 },
];
function totalCost(products) {
    let sum = 0; 
    for (let i = 0; i < products.length; i++){
        const product = products[i];

        sum = sum + product.price;
        // console.log(product);
    }
    return sum;
}
const expance = totalCost(shoppingCard)
console.log(expance)