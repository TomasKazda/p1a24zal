//Základní programové konstrukce v TypeScriptu
// Compare this snippet from src/l02.ts:
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
for (let i: number = 0; i < 5; i++) {
    console.log('i =', i);
}

// //4. Cyklus while
let j: number = 0;
while (j < 5) {
    console.log('j =', j);
    j++;
}

// //5. Cyklus do-while
let k: number = 0;
do {
    console.log('k =', k);
    k++;
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

// //9. Lambda funkce
let multiply = (a: number, b: number): number => a * b;
console.log('multiply(2, 3) =', multiply(2, 3));

// //10. Funkce s výchozími hodnotami parametrů
function greet(name: string = 'John'): void {
    console.log('Hello', name);
}
greet();
greet('Anna');

// //11. Funkce s rest parametrem
function sum(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
}
console.log('sum(1, 2, 3) =', sum(1, 2, 3));

// //12. Funkce s parametry typu tuple
function printTuple(tuple: [string, number]): void {
    console.log('Tuple:', tuple);
}
printTuple(['Hello', 5]);

// //13. Funkce s parametry typu object
function printObject(obj: { name: string, age: number }): void {
    console.log('Object:', obj);
}
printObject({ name: 'John', age: 25 });

// //14. Funkce s parametry typu interface
interface PersonInterface {
    name: string;
    age: number;
}
function printPerson(person: PersonInterface): void {
    console.log('Person:', person);
}
printPerson({ name: 'John', age: 25 });

// //15. Funkce s parametry typu union
function printId(id: number | string): void {
    console.log('ID:', id);
}
printId(1);
printId('1');

// //16. Funkce s parametry typu generic
function printArray<T>(array: T[]): void {
    console.log('Array:', array);
}
printArray<number>([1, 2, 3]);
printArray<string>(['a', 'b', 'c']);

// //17. Funkce s parametry typu literal
function printText(text: 'Hello' | 'Hi'): void {
    console.log('Text:', text);
}
printText('Hello');

// //18. Funkce s parametry typu enum
enum Color {
    Red,
    Green,
    Blue
}
function printColor(color: Color): void {
    console.log('Color:', color);
}
printColor(Color.Red);

// //19. Funkce s parametry typu unknown
function printUnknown(unknown: unknown): void {
    console.log('Unknown:', unknown);
}
printUnknown(5);

// //20. Funkce s parametry typu any
function printAny(any: any): void {
    console.log('Any:', any);
}
printAny(5);

// //21. Funkce s parametry typu void
function printVoid(): void {
    console.log('Void');
}
printVoid();

// //22. Funkce s parametry typu never
function throwError(message: string): never {
    throw new Error(message);
}
try {
    throwError('An error occurred');
}
catch (error) {
    console.log(error);
}

// //23. Funkce s parametry typu this
function printThis(this: PersonInterface): void {
    console.log('This:', this);
}
printThis.call({ name: 'John', age: 25 });

// //24. Funkce s parametry typu callback
function fetchData(callback: (data: string) => void): void {
    callback('Data');
}
fetchData(data => console.log('Data:', data));

// //25. Funkce s parametry typu promise
function fetchDataPromise(): Promise<string> {
    return new Promise(resolve => resolve('Data'));
}
fetchDataPromise().then(data => console.log('Data:', data));

// //26. Funkce s parametry typu async/await
async function fetchDataAsync(): Promise<string> {
    return 'Data';
}
fetchDataAsync().then(data => console.log('Data:', data));

// //27. Funkce s parametry typu generator
function* generateSequence(): Generator<number> {
    yield 1;
    yield 2;
    yield 3;
}
let sequence = generateSequence();
console.log('Sequence:', sequence.next().value);

// //28. Funkce s parametry typu decorator
function log(target: any, key: string): void {
    console.log('Method:', key);
}
class Logger {
    @log
    static log(): void {
        console.log('Log');
    }
}
Logger.log();

// //29. Funkce s parametry typu mixin
function withName<T extends { new(...args: any[]): {} }>(constructor: T): T {
    return class extends constructor {
        name = 'John';
    };
}
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
let PersonWithName = withName(Person);
let personWithName = new PersonWithName('Anna');
console.log('Person with name:', personWithName.name);

// //30. Funkce s parametry typu module
import { add as addModule } from './l01';
console.log('addModule(2, 3) =', addModule(2, 3));

// //31. Funkce s parametry typu namespace
namespace Math {
    export function add(a: number, b: number): number {
        return a + b;
    }
}
console.log('Math.add(2, 3) =', Math.add(2, 3));

// //32. Funkce s parametry typu type
type AddType = (a: number, b: number) => number;
let addType: AddType = (a, b) => a + b;
console.log('addType(2, 3) =', addType(2, 3));

// //33. Funkce s parametry typu interface
interface AddInterface {
    (a: number, b: number): number;
}
let addInterface: AddInterface = (a, b) => a + b;
console.log('addInterface(2, 3) =', addInterface(2, 3));

// //34. Funkce s parametry typu class
class AddClass {
    constructor(private a: number, private b: number) { }
    result(): number {
        return this.a + this.b;
    }
}
let addClass = new AddClass(2, 3);
console.log('addClass.result() =', addClass.result());

// //35. Funkce s parametry typu abstract class
abstract class AddAbstract {
    constructor(private a: number, private b: number) { }
    abstract result(): number;
}
class AddConcrete
    extends AddAbstract {
    result(): number {
        return this.a + this.b;
    }
}
let addConcrete = new AddConcrete(2, 3);
console.log('addConcrete.result() =', addConcrete.result());

// //36. Funkce s parametry typu enum
enum Operation {
    Add,
    Subtract,
    Multiply,
    Divide
}
function calculate(operation: Operation, a: number, b: number): number {
    switch (operation) {
        case Operation.Add:
            return a + b;
        case Operation.Subtract:
            return a - b;
        case Operation.Multiply:
            return a * b;
        case Operation.Divide:
            return a / b;
    }
}
console.log('calculate(Operation.Add, 2, 3) =', calculate(Operation.Add, 2, 3));

// //37. Funkce s parametry typu type alias
type AddAlias = (a: number, b: number) => number;
let addAlias: AddAlias = (a, b) => a + b;
console.log('addAlias(2, 3) =', addAlias(2, 3));

// //38. Funkce s parametry typu intersection
type AddIntersection = (a: number, b: number) => number & { result: number };
let addIntersection: AddIntersection = (a, b) => Object.assign(a + b, { result: a + b });
console.log('addIntersection(2, 3) =', addIntersection(2, 3));

// //39. Funkce s parametry typu union
type AddUnion = (a: number, b: number) => number | string;
let addUnion: AddUnion = (a, b) => a + b;
console.log('addUnion(2, 3) =', addUnion(2, 3));

// //40. Funkce s parametry typu tuple
type AddTuple = (a: [number, number]) => number;
let addTuple: AddTuple = ([a, b]) => a + b;
console.log('addTuple([2, 3]) =', addTuple([2, 3]));

// //41. Funkce s parametry typu optional
type AddOptional = (a: number, b?: number) => number;
let addOptional: AddOptional = (a, b = 0) => a + b;
console.log('addOptional(2) =', addOptional(2));

// //42. Funkce s parametry typu nullable
type AddNullable = (a: number, b: number | null) => number;
let addNullable: AddNullable = (a, b) => a + (b ?? 0);
console.log('addNullable(2, null) =', addNullable(2, null));

// //43. Funkce s parametry typu default
type AddDefault = (a: number, b: number = 0) => number;
let addDefault: AddDefault = (a, b) => a + b;
console.log('addDefault(2) =', addDefault(2));

// //44. Funkce s parametry typu rest
type AddRest = (...numbers: number[]) => number;
let addRest: AddRest = (...numbers) => numbers.reduce((a, b) => a + b, 0);
console.log('addRest(1, 2, 3) =', addRest(1, 2, 3));

// //45. Funkce s parametry typu readonly
type AddReadonly = (a: readonly number[], b: readonly number[]) => number;
let addReadonly: AddReadonly = (a, b) => a.concat(b).reduce((a, b) => a + b, 0);
console.log('addReadonly([1, 2], [3, 4]) =', addReadonly([1, 2], [3, 4]));

// //46. Funkce s parametry typu partial
type AddPartial = (a: Partial<PersonType>, b: Partial<PersonType>) => Partial<PersonType>;
let addPartial: AddPartial = (a, b) => Object.assign(a, b);
console.log('addPartial({ name: "John" }, { age: 25 }) =', addPartial({ name: 'John' }, { age: 25 }));

// //47. Funkce s parametry typu required
type AddRequired = (a: Required<PersonType>, b: Required<PersonType>) => Required<PersonType>;
let addRequired: AddRequired = (a, b) => Object.assign(a, b);
console.log('addRequired({ name: "John", age: 25 }, { name: "Anna", age: 30 }) =', addRequired({ name: 'John', age: 25 }, { name: 'Anna', age: 30 }));

// //48. Funkce s parametry typu readonlyArray
type AddReadonlyArray = (a: ReadonlyArray<number>, b: ReadonlyArray<number>) => ReadonlyArray<number>;
let addReadonlyArray: AddReadonlyArray = (a, b) => a.concat(b);
console.log('addReadonlyArray([1, 2], [3, 4]) =', addReadonlyArray([1, 2], [3, 4]));
