//Základní programové konstrukce v TypeScriptu

// dynamické typování
type PersonType = {
    name: string;
    age: number;
}

// //1. Podmínka if
let condition: boolean = true;
if (condition) {
    console.log('Condition is true');
} else {
    console.log('Condition is false');
}

// //2. Podmínka switch
let day: number = 2;
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    default:
        console.log('Unknown day');
}

// //3. Cyklus for
//for (init; condition; increment) { ... }
for (let i: number = 0; i < 6; i+=2) {
    console.log('i =', i);
}

// //4. Cyklus while
// může probíhat 0 a vícekrát
// používáme tam, kde neznáme předem počet opakování
let j: number = 0;
while (j < 5) {
    console.log('j =', j);
    j+=1;
}

// //5. Cyklus do-while
// vždy probíhá minimálně 1× a vícekrát
let k: number = 0;
do {
    console.log('k =', k);
    k+=1;
} while (k < 5);


// //6. Cyklus for-in
let person: PersonType = { name: 'John', age: 25 };
for (let key in person) {
    console.log('key =', key);
}

// //7. Cyklus for-of
let numbers: number[] = [1, 2, 3];
for (let number of numbers) {
    console.log('number =', number);
}

// //8. Funkce
function add(a: number, b: number): number {
    return a + b;
}
console.log('add(2, 3) =', add(2, 3));
