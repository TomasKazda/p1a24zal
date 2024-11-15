//výrazy a operátory

//operátory spojené s čísly = typ number
let a: number = 5;
let b: number = 3;
let c: number = a + b;
console.log(`c = ${a} + ${b} = `, c);

//odčítání znak - (spojovník)
//násobení znak * (hvězdička) nikoliv ×
//dělení znak / (lomítko)
//modulo znak % (procento) = zbytek po dělení
let d: number = a % b; //5 % 3 
console.log(`d = ${a} % ${b} = `, d); //jedna zbytek 2
//mocnina znak ** (dvojité hvězdičky)
let e: number = a ** b; // 5 na 3
console.log(`e = ${a} na ${b} = `, e); //125
//mocnica znak Math.pow()
let f: number = Math.pow(a, b); //5 na 3
console.log(`f = Math.pow(${a}, ${b}) = `, f); //125

//kombinování přiřazení a aritmetických operátorů
console.log(`a = `, a); //5
a += b; //a = a + b
console.log(`a += ${b} = `, a); //8
a -= b; //a = a - b
console.log(`a -= ${b} = `, a); //5
a *= b; //a = a * b
console.log(`a *= ${b} = `, a); //15
a /= b; //a = a / b
console.log(`a /= ${b} = `, a); //5
a **= b; //a = a ** b
console.log(`a **= ${b} = `, a); //125
a %= b; //a = a % b
console.log(`a %= ${b} = `, a); //2

a += 2; //a = a + 2
a += 1; //a = a + 1
a++; //a = a + 1 není to stejné jako a += 1
++a; //a = a + 1 není to stejné jako a += 1


//druhá odmocnina znak Math.sqrt()
let g: number = Math.sqrt(25); //odmocnina z 25
console.log(`g = Math.sqrt(25) = `, g); //5

//n-tá odmocnina znak Math.pow()
let nn: number = 3;
let h: number = Math.pow(27, 1/nn); //n-tá odmocnina z 25
console.log(`h = Math.pow(27, 1/${nn}) = `, h); //2.924017738212866

//absolutní hodnota znak Math.abs()
let i: number = -5;
let j: number = Math.abs(i); //absolutní hodnota -5
console.log(`j = Math.abs(${i}) = `, j); //5

//zvláštní případy
//znak rovná se = (operátor přiřazení zprava doleva)
b = 3; //b = 3
console.log(`a = `, a); //5
a = b; //a = 3
console.log(`a = `, a); //3
// 3 = a; //chyba
//SyntaxError: Invalid left-hand side in assignment

//relační operátory

//znak dvě rovná se == (porovnává dvě hodnoty na základě podobnosti bez ohledu na jenich typ)
let text: string = '5';
let l: number = 5;
let k: boolean = l == text; //5 == "5"
console.log(`k = ${l} == "${text}" = `, k); //true

//znak tři rovná se === (porovnává dvě hodnoty) 
let m: boolean = l === text; //5 === "5"
console.log(`m = ${l} === "${text}" = `, m); //false

//znak nerovná se != (porovnává dvě hodnoty na základě podobnosti bez ohledu na jenich typ)
let n: boolean = l != text; //5 != "5"

//znak hodnotově nerovná se !== (porovnává dvě hodnoty)
let o: boolean = l !== text; //5 !== "5"

//znak větší než > (porovnává dvě hodnoty)
//znak větší než nebo rovno >= (porovnává dvě hodnoty)
//znak menší než < (porovnává dvě hodnoty)
//znak menší než nebo rovno <= (porovnává dvě hodnoty)

//logické operátory
//boolovské hodnoty = typ boolean: True/False

//znak (a zárověň) && (logický součin)
let p: boolean = true;
let q: boolean = false;	
let r: boolean = p && q; //true && false
console.log(`r = ${p} && ${q} = `, r); //false

//znak (logické nebo) || (logický součet)
let s: boolean = p || q; //true && false
console.log(`s = ${p} || ${q} = `, s); //true

//znak (logický negace) ! (logický negace)
let t: boolean = !p; //!true
console.log(`t = !${p} = `, t); //false