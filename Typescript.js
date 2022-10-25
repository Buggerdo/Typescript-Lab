console.log("hello");
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
//# sourceMappingURL=Typescript.js.map