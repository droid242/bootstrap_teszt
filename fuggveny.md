# Függvények

### Függvények használata
Ahhoz, hogy használni tudj egy függvényt, legalább két lépésre van szükség:

* __Declaration:__ megadom a függvény nevét és leírom a működését.
* __Invocation:__ a kód megfelelő helyén meghívom (elindítom) a függvényt.
* 
### Deklarálás
Függvényt a function kulcszóval hozhatsz létre. Két lehetőséged van:

* `function testFunction() {...}` : ez a függvény deklaráció,
* `let testFunction = function() {...}` : ez a függvény expression (úgy adod meg, mint egy változót).

A két megadási mód között nincs működésbeli különbség. A teljes szintaxis:
```
function name(parameter1, parameter2, ..., parameterX) {
  // a futtatható kód
}
```

### Invocation - függvény meghívása
Az invocation, azaz a függvény meghívása azt jelenti, hogy elindítod a függvényt, az pedig végrehajtja a feladatát. Ezt a függvény neve után tett zárójelekkel teheted meg. Ezt hívják függvényhívásnak, azaz **call**-nak:
```
function myFunction(a, b) {
  alert("Hello Dude!"); // megjelenít egy üzenetet amikor meghívják a függvényt
}
myFunction();   // az üzenet megjelenik
```

### Függvény vagy eljárás?
Ha egy függvény nem ad vissza semmilyen adatot miután végzett a feladatával, azt eljárásnak szoktuk pontosan hívni. A függvények a futásuk végén visszaadnak valamilyen értéket. Ezt a `return` kulcsszóval tudod meghatározni:
```
function myFunction(a, b) {
  return a * b;             // a függvény visszaadja az a és b szorzatát
}
var x = myFunction(4, 3);   // tehát az eredmény 12 lesz, ami bekerül az x változóba
```

***

### Paraméterre fel!
Ahogy a metódusoknál láttad, a függvényeket paraméterekkel tudod ellátni.

> **Paraméter - argumentum:** bemenő adat, amellyel a függvény műveleteket végez.

### Paraméterek sorrendje
A paraméterek ugyanabban a sorrendben kerülnek feldolgozásra, ahogyan azt megadtad a függvény létrehozásánál. Ezért vigyázni kell, ne hagyj ki paramétereket, mert nem ugyanazt fogja érteni a függvény, mint amit megadtál:
```
var name = 'Joe';
var job = 'programmer';

function showPerson(name, job) {
  document.querySelector('.card').innerHTML = 'Név: ' + name + ', munka: ' + job;
}

showPerson(name, job); showPerson(job, name);
```

Az első esetben azt írja ki: `Név: Joe, munka: programmer`  
Majd utána: `Név: programmer, munka: Joe`

### Arguments - Paraméterek ellenőrzése
Az arguments tömb tartalmazza a függvény által kapott paramétereket. Ezzel le is tudod ellenőrizni, hogy megfelelő paramétereket kaptál-e.

### Default paraméter
A JavaScript legújabb verziójában már vannak úgynevezett alapértelmezett vagy default értékei a paramétereknek, de ezt még nem minden böngésző támogatja. Ezért magunknak kell leellenőrizni a paramétereket, és ha nem megfelelő az értékük, akkor beállítani valami értelmesre:
```
var name = 'Joe';
var job = 'programmer';
var card = document.querySelector('.card');

function showPerson(name, job) {
  name = name || 'Balázs';
  job = job || 'admin';
  card.innerHTML = 'Név: ' + name + ', munka: ' + job;
}

showPerson();
```

Az új szabvány szerint:
```
function showPerson(name = 'Balázs', job = 'admin') {
  card.innerHTML = 'Név: ' + name + ', munka: ' + job;
}

showPerson();
```

***

### Scope
Azt jelenti angolul, hogy terület, hatáskör, esetleg kiterjedés. A változók scope-ja az a része a programkódnak, ahol a változóval lehet dolgozni, el lehet érni. Azaz egy változó nem használható a teljes programban, csak a scope-jában. Kifejtem részletesebben, figyelj.

### Egy alapvető szabály
> **A scope-ból kifelé mindig lehet látni, de befelé nem.**
Mit jelent ez? Képzeld el, hogy egy olyan fólia van az ablakon, amitől látod, hogy mi van kint, de kintről nem látnak be. Pont így működik a js scope is. Egy scope -ban az összes változóval tudsz dolgozni, amit a sope -on kívül hoztak létre, de ha a scope -on belül van egy másik scope, abba nem látsz bele. Tehát a gyerek scope változóival nem tudsz dolgozni. A követkeőkben változó fajtánként is kifejtem neked a dolgot.

### A `var` scope
A js 2015 előtti verziójában egyféleképpen lehetett változókat létrehozni a var, azaz variable kulcsszóval.

**function scope:** A `var` paranccsal létrehozott változó függvény hatáskörű volt, ez azt jelenti, hogy vagy a kód gyökerében, vagy abban a függvényben lehetett csak használni, ahol létrehozták. Ha máshonnan akartad elérni, akkor hibát kaptál. Tehát a függvényekben létrehozott változóid nem voltak elérhetőek (láthatóak) a függvényen kívül.

**local scope:** A függvény saját scope-ját lokális scope-nak is nevezzük.

**global scope:** A függvényen kívül eső területet pedig globális scope-nak hívjuk. Az, hogy egy scope globális vagy likális ugye attól függ, hogy honnan nézed? Erre hozok most néhány példát.

###Lokális változó definiálása
```
// Global scope: a carName változót itt nem használhatod
function myFunction() {
  var carName = "Volvo"; // Local scope: Itt használhatod a carName változót
}
myFunction();
console.log( carName ); // Uncaught ReferenceError: carName is not defined
```

#### Mit láttál most?

* Létrehoztam egy függvényt, amiben definiáltam a `carName` változót.
* Le is futtattam a függvényt, így a `carName` változó biztosan létre is jött a függvényben.
* Megpróbáltam kiíratni a `console`-ra a változót, de a kommentben látható hibát kaptam.
* Milyen hiba? `Uncaught ReferenceError` : váratlan vagy kezeletlen referenciahiba. Azaz olyan dologra - változóra hivatkoztam, olyan változóval akartam dolgozni, ami nem létezik. `carName is not defined` szép passzív angol szerkezettel meg van mondva: `a carName változó nincs definiálva, nem lett létrehozva.` Azt mondod, dehogynem, hát a függvényben ott van. Igen ám, de a függvénybe nem látunk bele a globális scope -bó, tehát számunkra nem létezik ott, ahol a log parancsot kiadtam.

### Globális változó definiálása
A globális változó előnye, hogy a kódon belül bárhol eléred. Hátránya, hogy így a program több memóriát fogyaszt. Miért is? Hát azért mert amikor egy függvényt elindít, akkor át kell adnia neki az összes globális változót, mert nem tudhatja hogy használni akarod-e valamelyiket? Ezért ha lehet, mindig lokális változókkal dolgozz.
```
// Global scope: a carName változót itt használhatod, mert itt hoztad létre
var carName = "Volvo";
function myFunction() {
  // Local scope: Itt is használhatod a carName változót, mert globális
  console.log( carName ); // "Volvo"
}
myFunction();
console.log( carName ); // "Volvo"
```
> **Fontos:** ugyanaz a példa, de a carName globális változó. Mind a két alkalommal el tudom érni, a függvényben és a globális scope-ban is.

***

### Let
A 2015-ös js szabványban hozták be a `let` kulcsszót. A tanfolyamon ezt használjuk már a `var` helyett, mert hatékonyabb és takarékosabb mint a másik.

### A blokk
A js kód blokkokból épül fel. Ezeket kapcsos zárójelekkel `{}` jelölik. Egy tipikus blokk ilyen:
```
{  var x = 2; }
```

### let scope
A `let` kulcsszóval létrehozott változók block scope-úak, egy blokkon belül lehet őket elérni. Ez fontos különbség, mivel így a változó kisebb kódrészben érhető el. Viszont amikor az adott blokk lefut, hamarabb is törlődik a memóriából, így takarékosabb tud lenni a program.

### Block scope
A `{}` zárójelekkel határolt programterület.
```
{  var x = 2; let y = 3; }
console.log( x ); // 2
console.log( y ); // Uncaught ReferenceError: y is not defined
```

#### Lássuk csak!
* Az `x` változót lazán eléred a blokkon kívül is, mivel az function scope-ú, és nem hoztál létre új függvényt, a hagyományos function scope alapján ugyanabban a scope-ban van.
* Viszont az `y` esetén hibát kapsz, mert az block scope-ú és egy blokkban hoztad létre, ahova a global scope-ból nem látsz bele.

### let módosítása
A `let` kulcsszóval létrehozott változóknál nem lehet a változót kétszer létrehozni egy scope-ban.

**Blokkon belül nem lehet újradeklarálni:**
```
let name = "Péter";
let name = "Sándor"; // Uncaught SyntaxError: Identifier 'name' has already been declared
```

A gondja az, hogy már létre lett hozva azonos néven egy változó, azaz az azonosító már deklarálva van.

**Blokkon belül lokális változó jön létre:**
```
let name = "Péter";
{
  let name = "Sándor";
  console.log( name ); // "Sándor"
}
console.log( name ); // "Péter"
```

Először azt írja ki, hogy `"Sándor"`, majd azt hogy `"Péter"`. A blokkon belül létrehozott name változó nem azonos a globális name változóval. Tehát nem a globális változót hoztam létre újra, hanem a blokknak saját változója van.

***

### Constant
Ez az angolban is a latinból jön (mint annyi minden más is). Azt jelenti, hogy állandó. Olyan változóról van szó, aminek egyszer lehet csak értéket adni, amikor létrehozod. Később már az értékét nem tudod megváltoztatni. Ilyen értelemben nem is változó, mert nem tudod változtatni. Azért neveztem mégis így, mert a js esetén bizonyos keretek között módosítható (erről majd a tömböknél és az objektumoknál lesz szó).

### A `const keyword`
Ha egy változót a const kulcsszóval hozol létre, akkor nem adhatsz neki új értéket.
```
const PI = 3.141592653589793;
PI = 3.14;     // Uncaught TypeError: Assignment to constant variable.
PI = PI + 10;  // Uncaught TypeError: Assignment to constant variable.
```

### Szabályok
* Mindig nagy betűvel írjuk: PI, START, BASE_COLOR, stb...
* Mindig értéket is kell neki adni amikor létrehozzuk: const BASE_COLOR = 255;
  
### A const scope
**Block scope:** a `const` a `let`-hez hasonlóan szintán blokk szintű változó, azaz egy blokkon belül látható. Ha a kód gyökeréban hozod létre akkor mindenhol, ha nem akkor a saját blokkján belül.
```
const x = 10;
{
  const x = 2;
  console.log( x );
}
console.log( x );
```

A `let`-es példához hasonlóan itt is különböző számokat fogsz látni, a blokkon belül egy másik x van, aminek az értéke 2, a globális scope-ban pedig a 10 értékű.

### const redeclare
Na ez az ami nem fog menni. Az alábbi példában azt láthatod, hogy ha egyszer egy blokkon belül létrehoztál egy `const` változót, akkor azt semmilyen formában nem tudod újra létrehozni, sem újra definiálni azaz új értéket adni neki (persze az adott blokkon belül, ha nyitsz új blokkot akkor igen).
```
const x = 2; // Rendben
const x = 3; // Hiba
x = 3;       // Hiba
var x = 3;   // Hiba
let x = 3;   // Hiba
{
  const x = 2;   // Rendben
  const x = 3;   // Hiba
  x = 3;         // Hiba
  var x = 3;     // Hiba
  let x = 3;     // Hiba
}
```