console.log("hello");

interface Mountain {
    name: string;
    height: number;
}

let mountains: Mountain[] = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];

function findNameOfTallestMountain(mountains: Mountain[]): string {
    let tallest: Mountain = mountains[0];
    mountains.forEach(mountain => {
        if (mountain.height > tallest.height) {
            tallest = mountain;
        }
    });
    return tallest.name;
}

let tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);