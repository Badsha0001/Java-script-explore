function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;

    const tableWood = tableQuantity * perTableWood;

    const bedWood = bedQuantity * perBedWood;
    
    console.log(chairWood, tableWood, bedWood);

    const totalwood = chairWood + tableWood + bedWood;
    return totalwood
}
const totalwood = woodCalculator(10, 2, 1);
console.log(totalwood)