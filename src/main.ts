import './style.css'

//Letos není cílem tvořit webovou aplikaci, ale spíše se zaměřit na TypeScript a jeho možnosti
//Proto budeme veškeré vstupy a výstupy zobrazovat v konzoli (console.log)
//Konzoli otevřete klávesovou zkratkou F12 (DevTools)
//Můžete použít funkci console.clear() pro smazání konzole

//vytvoření nového projektu pomocí Vite a NodeJS:
//1. nainstalujte NodeJS z https://nodejs.org/
//2. vytvořte nový projekt pomocí příkazu "npm init vite@latest"
//3. přejděte do složky projektu pomocí "cd <název složky>"
//4. nainstalujte závislosti pomocí "npm install"
//5. spusťte projekt pomocí "npm run dev"


//Základní datové typy
let a: number = 5;
let b: string = 'Hello';
let c: boolean = true;
let d: any = 'Any type';
let e: number[] = [1, 2, 3];
let f: Array<number> = [1, 2, 3];
let g: [string, number] = ['Hello', 5];
let h: object = { name: 'John', age: 25 };
let i: null = null;
let j: undefined = undefined;
