// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements. \\

const friendAge = [15, 14, 17, 19, 21, 16, 20, 18, 22];
const partial = friendAge.splice(2, 5, 55, 66, 77, 88, 99);
console.log(partial);
console.log(friendAge);