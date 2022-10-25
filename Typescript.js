var mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
function findNameOfTallestMountain(mountains) {
    var tallest = mountains[0];
    mountains.forEach(function (mountain) {
        if (mountain.height > tallest.height) {
            tallest = mountain;
        }
    });
    return tallest.name;
}
var tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);
var Products = [
    { name: "Apple", price: 1.25 },
    { name: "Banana", price: 0.25 },
    { name: "Pear", price: 2.25 },
    { name: "Grape", price: 3.25 },
];
function calcAverageProductPrice(product) {
    return product.reduce(function (s, p) { return s + p.price; }, 0) / product.length;
}
var average = calcAverageProductPrice(Products);
console.log(average);
var inventory = [
    { product: { name: "motor", price: 10.00 }, quantity: 10 },
    { product: { name: "sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 }
];
function calcInventoryValue(inventory) {
    return inventory.reduce(function (s, i) { return s + i.product.price * i.quantity; }, 0);
}
var value = calcInventoryValue(inventory);
console.log(value);
//# sourceMappingURL=Typescript.js.map