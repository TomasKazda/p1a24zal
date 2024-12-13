type RandIntType = (min: number, max: number) => number;

const randint: RandIntType = (min: number, max: number): number => {
    return min + Math.round(Math.random() * (max - min));
}

console.log(randint(1, 2));

let a: number = 0;

a = Number(prompt("Enter a number: ", "0"));

if (Number.isNaN(a))
{    
    console.log("You entered a non-number");
}
console.log(a);