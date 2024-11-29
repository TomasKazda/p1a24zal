# Poznámky z hodin ZAL P1A 2024/2025

## Prerikvizity

1) nainstalovaná  [aplikace git](https://git-scm.com/downloads/win).
2) nainstalovaný [Visual Studio Code](https://code.visualstudio.com/download)
3) nainstalovaný LTS verzi [Node JS](https://nodejs.org/en/download/prebuilt-installer) včetně Node Package Module (NPM).

## Stažení a příprava

- V průzkumníku vybrat složku s projekty. Klidně Plocha nebo Dokumenty, obvyklé se používá `C:\Users\*VaseLoginName*\source\repos\`
- Spustit příkazový řádek (`PowderShell` nebo `cmd`).
(Ve Windows 11 stačí klinout pravým tlačítkem na složku a vybrat *Otevřít v Terminálu*)
- zkontrolovat, že jsme ve správné složce, nebo zadat `cd "C:\Users\*VaseLoginName*\source\repos\"`
- naklonovat repozitář `git clone https://github.com/TomasKazda/p1a24zal.git`
- Otevřít složku `p1a24zal` ve VS Code. Nejjednodušeji to jde klinutím na složku pravým tlačítkem - `Zobrazit další možnosti` - `Open with Code`
- Ve VS Code vybrat `Terminal` - `New Terminal`
- A do terminálu vložit příkazy:
  - `npm install`
  - `npm run dev`
  - pak stisknout klávesu `O` a `Enter` na klávesnici
 
## Používání

Aktuální výstup programu můžete sledovat ve webovém prohlížeči po otevření **DevTool**, to se dělá klávesou F12 a přepnutím se na záložku **Console**.

Soubory vašeho zájmu jsou ve složce `./src` a jmenují se `l01.ts`, `l02.ts`, atd.

Spouští se kód vždy toho souboru, který je uveden v sekci *import* souboru `main.ts`. Např. `import './l04'`

Soubory můžete libovolně modifikovat a doplňovat, kód se vždy znovu provede po uložení souboru (*ctrl+s*) nebo stisku **F5** v prohlížeči.
