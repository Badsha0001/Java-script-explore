const phones = [
    { brand: "samsung", camera: 50, ram: 6, storage: "64gb", price: 32000 },
    { brand: "oppo", camera: 50, ram: 6, storage: "64gb", price: 26000 },
    { brand: "realme", camera: 50, ram: 6, storage: "64gb", price: 18000 },
    { brand: "readmi", camera: 50, ram: 6, storage: "64gb", price: 42000 },
    { brand: "nokia", camera: 50, ram: 6, storage: "64gb", price: 37000 },
    { brand: "iPhone", camera: 50, ram: 6, storage: "64gb", price: 82000 },
];

function chipestPhone(phones) {
    let chipest = phones[0];
    for (let i = 0; i < phones.length; i++){
        const phone = phones[i];
        // console.log(phone);
        if (phone.price < chipest.price) {
            chipest = phone;
        }
    }
    return chipest;
};
const mySelaction = chipestPhone(phones);
console.log(mySelaction)


const phones2 = [
    { brand: "samsung", camera: 64, ram: 6, storage: "64gb", price: 32000 },
    { brand: "oppo", camera: 48, ram: 6, storage: "64gb", price: 26000 },
    { brand: "realme", camera: 24, ram: 6, storage: "64gb", price: 18000 },
    { brand: "readmi", camera: 50, ram: 6, storage: "64gb", price: 42000 },
    { brand: "nokia", camera: 108, ram: 6, storage: "64gb", price: 37000 },
    { brand: "iPhone", camera: 32, ram: 6, storage: "64gb", price: 82000 },
];

function chipestPhone2(phones2) {
    let biggest = phones2[0];
    for (let i = 0; i < phones2.length; i++){
        const phone2 = phones2[i];
        // console.log(phone2);
        if (phone2.camera > biggest.camera) { 
            biggest = phone2;
        }
    }
    return biggest;
};
const mySelaction2 = chipestPhone2(phones2);
console.log(mySelaction2)
