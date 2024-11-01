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
    j+=1;//= next(j); //tento fragment kódu je jen pro ukázku
}

// //5. Cyklus do-while
// vždy probíhá minimálně 1× a vícekrát
let k: number = 0;
do {
    console.log('k =', k);
    k+=1;
} while (k < 5);


// //6. Cyklus for-in
// iteruje přes vlastnosti objektu - proto složené závorky
let person: PersonType = { name: 'John', age: 25 };
for (let key in person) {
    console.log('key =', key);
}

// //7. Cyklus for-of
// iteruje přes prvky pole - proto hranaté závorky
let numbers: number[] = [1, 2, 3];
for (let number of numbers) {
    console.log('number =', number);
}

// //8. Funkce
//funkce add má 2 parametry a a b oba jsou typu number
//funkce vrací string
//pokud nejsou zadány parametry, použijí se defaultní hodnoty 1 a 0
function add(a: number = 1, b: number = 0): string {
    console.log('a + b =', a + b);
    return (a + b).toFixed(2);
}
console.log('add(2, 3) =', add(2, 3));

//funkceAdd je proměnná, která odkazuje na funkci add
//datový typ odpovídá signatuře funkce add a je (a: number,b:number) => string
let funkceAdd:(a: number,b:number) => string = add;

//funkceAdd(2,3) je volání funkce add s parametry 2 a 3
//výsledek je 5 a je převeden na string a uložen do proměnné kodAdd2
let kodAdd2: string = funkceAdd(2,3);

//add() je také volání funkce add - i když zde nejsou žádné parametry
let kodAdd: string = add();

console.log('kodAdd =', kodAdd);
console.log('kodAdd2 =', kodAdd2);