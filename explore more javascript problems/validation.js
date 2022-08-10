function add(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "error:Enter a valid number"
    }
    return num1 + num2
    // return num1 - num2
    // return num1 * num2
    // return num1 / num2

}
const result = add(5, 5)
console.log(result)