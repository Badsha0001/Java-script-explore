const country = "Bangladesh";
const age = 52;
const isIndipanden = true;
const student = { id: 121, class: 9, roll: 06, name: "Badsha" };
const friendsAge = [12, 17, 15, 16, 21,];
function number(num1, num2) {
    return num1 + num2;
}

console.log(typeof (country));
console.log(typeof (isIndipanden));
console.log(typeof (age));
console.log(typeof (student));
console.log(Array.isArray(friendsAge));
console.log(typeof (number));
// 
console.log(friendsAge.includes(17));
console.log(friendsAge.includes(20));
// 
const friend = [10, 11, 12, 13, 14, 15, 16];
const newFriend = [17, 18, 19, 20];
const fullFriend = friend.concat(newFriend,friendsAge);
console.log(fullFriend);
