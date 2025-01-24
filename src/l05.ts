let data: Array<number> = [5, 1, 6, 12, 2, 6, 5, 3, 4, 7];

let a: number = 5
for (let i= 0; i < data.length; i += 1) {
        //přičíst dvojnásobek hodnoty na indexu i k hodnotě proměnné a
    a += data[i] * 2;

    console.log("a: number = ", a);
}

a = 5;
for (const cislo of data) {
    a += cislo * 2;

    console.log("a: number = ", a);
}