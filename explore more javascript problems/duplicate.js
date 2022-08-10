const names = ['abul', 'babul', 'kabul', 'dabul', 'babul', 'sabul', 'habul', 'abul', 'babul', 'kabul', 'kobul', 'dabul', 'sobdul', 'sobdul'];

function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++){
        element = names[i];
        if (unique.includes(element) === false) {
            unique.push(element);
        }

    }
    return unique;
}
const uniqueName = removeDuplicate(names);
console.log(uniqueName);