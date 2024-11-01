//Základní datové typy v TypeScriptu (https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

let a: number = 5;
let b: string = 'Hello';
let c: boolean = true;
let d: any = 'Any type';
const e: number[] = [1, 2, 3];
const f: Array<number> = [1, 2, 3];
let g: [string, number] = ['Hello', 5];
const h: object = { name: 'John', age: 25 }; //object type is not recommended
let i: null = null;
let j: undefined = undefined;

type PersonType = {
    name: string;
    age: number;
}
const person: PersonType = { name: 'John', age: 25 };
const people: Array<PersonType> = [{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }];

console.log("a: number = ", a);
console.log("b: string = ", b);
console.log("c: boolean = ", c);
console.log("d: any = ", d);
console.log("e: number[] = ", e);
console.log("f: Array<number> = ", f);
console.log("g: [string, number] = ", g);
console.log("h: object = ", h);
console.log("i: null = ", i);
console.log("j: undefined = ", j);
console.log("person: PersonType = ", person);
console.log("people: Array<PersonType> = ", people);