// ostatní specifická pravidla

//ternární operátor
let u: number = 5;
let v: number = 3;
let w: number = u > v ? u : v; //u > v ? u : v
console.log(`w = ${u} > ${v} ? ${u} : ${v} = `, w); //5

function isButtonPressed(button: number): boolean {
    return button === 1; //tohle nemá smysl, ale pro ukázku ternárního operátoru to zde musíme vytvořit
}

//klasické if-else
if (isButtonPressed(1)) {
    console.log(`result = `, 'Stisknuto');
} else {   
    console.log(`result = `, 'Nestisknuto');
}

//náhrada ternárním operátorem
console.log(`result = `, isButtonPressed(1) ? "Stisknuto" : "Nestisknuto"); //Stisknuto

//inkrementace a dekrementace
let a: number = 5;
a++; //není to stejné jako a = a + 1 nebo a += 1
++a; //není to stejné jako a = a + 1 nebo a += 1
console.log(`a++ = `, a++); //7
console.log(`++a = `, ++a); //9
//decrementace
console.log(`a-- = `, a--); //9
//lze použít ve výrazech
console.log(`a = `, a); //8
let x: number = 5 * 2 + a++; //5 * 2 + 8
console.log(`x = 5 * 2 + a++ = `, x); //18
console.log(`a = `, a); //9

//přetypování
let text: string = '05';
//explicitní přetypování
let l1: number = Number(text); //5
//implicitní přetypování
let l2: number = +text; //5
let l3: number = parseInt(text, 10); //5

//implicitní přetypování (přetypování na string)
let text1: string = l1.toString(); //"5"
let text2: string = l1.toFixed(); //"5"
let text3: string = l1 + ""; //"5"