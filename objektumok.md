# Objektumok

### Key - kulcs
Az objektumok esetén nem automatikusan indexelődnek az elemek mint a tömb esetén, hanem mi határozzuk meg a kulcs-érték párokat. A kulcsoknak minden esetben String típusúaknak kell lenniük.

### Value - érték
A kulcsokkal jelölt értékeket tulajdonságoknak is nevezik. Az alábbi példában egy egyszerű objektum létrehozását láthatod. Figyeld meg, hogy az objektumot kapcsos zárójelek határolják, a kulcs-érték párokat vesszők, a kulcsot pedig kettőspont választja el az értéktől:
```
let user = {
    "name" : "Joe",
    "age" : "44",
    "job" : "developer"
    "active" : true
};
```

### `Object.keys()` - az objektum kulcsai
Az objektumok esetén fontos, hogy tudd mit tárolsz bennük. Mivel az objektum elemeit a kulcsok segítségével éred el, ezért nem árt tudni, hogy milyen kulcsok vannak egy objektumban. Ezeket a kulcsokat pedig az Object.keys metódus adja vissza.

Az `Object.keys` metódus tömb formában adja vissza a kapott objektum kulcsait.

Az objektum tulajdonságait úgy tudod elérni, hogy az objektum neve után ponttal elválasztva megadod a kiválasztott tulajdonság kulcsát, vagy szögletes zárójelek között [] String-ként adod meg:
```
Object.keys(user);

user.name;
  "Joe"

user.acticve;
  true
```

### Az objektum hossza
Az objektumoknak `nincs length` tulajdonsága, mint a tömböknek, ezért más módszerhez kell folyamodnod, ha szeretnéd megtudni az elemeiknek a számát. Erre a legegyszerűbb módszer, ha nem az elemeiket, hanem a kulcsaikat számolod meg.

> **Figyelem:** a példában láncolt metódus hívást alkalmazunk.

Ennek lényege, hogy egy függvény által visszaadott típusra azonnal meghívod annak szabványos metódusát vagy lekéred egy adott tulajdonságát, jelen esetben a tömb elemeinek számát, azaz a tömb hosszát.

Az Object.keys tömböt ad vissza, majd annak le is kérheted azonnal a length tulajdonságát:
```
Object.keys(user);

Object.keys(user).length;
```

Üres objektum létrehozása:
```
let blank1 = new Object();

let blank2 = {};
```

***

### Constant
Arról már beszéltünk, hogy nem lehet új értéket adni a `const` kulcsszóval létrehozott változóknak. De tömbök és objektumok esetén van egy kiskapu. Hogy mi az, mindját megtudod, figyelj jól...

#### `const`
Mi is történik, amikor egy változót a `const` kulcsszóval hozol létre?

**READ ONLY:** csak olvasható referenciát hoz létre az értékre. Tehát rámutat, referenciát jelent egy memória területre ahol az értéke van. De nem lehet rajta keresztül a memória terület tartalmát módosítani.

### Mutable - Immutable
A szavak jelentése nagyon érdekes.

**Mutable:** az adott változó értéke meg tud változni, tud mutálódni. Ez zombi apokalipszis estén nem túl hasznos tulajdonság, mivel ott az a jó, ha valaki vagy valami nem mutálódik :(

**Immutable:** értelemszerűen az előbbi ellentéte. Tehát az ilyen változót vagy értéket lehet olvasni, de írni - változtatni nem. Az előbb említett világvége esetén bennük jobban meg lehet bízni :)

#### `const` és `Object`
Először készítek egy objektumot a `let` kucsszóv használatával és módosítom egy másikra, mert mutable, azaz meg lehet változtatni az értékét:
```
let user = { name: "John Doe", age: 33 };
user = { name: "Black Jack", age: 100 };
```

Nem történt semmi probléma, a kód lazán lefutott. A user azonosító egy értékre mutat a memóriában. Amikor felülírom nincs semmi baj, az azonosító onnan kezdve egy másik értékre fog mutatni.

Most ugyanezt megpróbálom `const` kulcsszóval is, ami immutable adatkötést hoz létre:
```
const user = { name: "John Doe", age: 33 };
user = { name: "Black Jack", age: 100 };
// Uncaught TypeError: Assignment to constant variable.
```

Az lett amire számítottam, nem megy a dolog. Nem lehet hozzárendelni új értéket a `const` változóhoz.

### **Constant property change:**
```
const user = { name: "Jack" };
user.name = "Bob";
const jobs = ["programmer", "chef", "builder", "movie star"];
jobs[2] = "tester";
```

> **A `const` kulcsszóval definiált objektumok és tömbök tulajdonságait / elemeit meg tudom változtatni!**

Miért? Azért, mert az objektum és a tömb különálló változókat tárol a memóriából és csak összefogja őket. Amikor az objektum egy tulajdonságát megváltoztatom, azzal az objektum kötése az azonosítóhoz nem fog megváltozni, csupán az egyik tulajdonságát módosítottam.

### Memory snapshot
A Google Chrome lehetővé teszi, hogy pillanatfelvételt készíts a memóriáról.
* Létrehoztam egy const objektumot Acar néven.
* Készítettem egy memória pillanatfelvételt (snapshot) és kikerestem benne a változómat.
* Minden változó mellett ott van a memóriacíme, azaz hol található a memóriában.
* Jól nézd meg a képet: az Acar objektum és a man és model String-ek, amelyek a tulajdonságai, más és más memória címeken vannak. Ezért ha azokat módosítjuk, azzal az Acar memóriacíme nem módosul.

***

### For in ciklus
Több dologban különbözik a for ciklustól.
* Nincs benne iterátor változó.
* A megadott Array vagy objektum kulcsait járja be.

### Használata
Paraméterei:
* **kulcs változó:** ebben tárolja mindig az aktuális kulcsot.
* **kollekció:** az a tömb vagy objektum, amelyet bejár a ciklus.

### Egy egyszerű `for...in` ciklus
A k változó a key rövidítése, ez tárolja az aktuális kulcsot. Külön ki is írtam neked a kulcsot és az értéket.
```
let arr = ["cool", true, 22];
for(let k in arr) {
    console.log(k + ": " + arr[k]);
};
```

### Tömbre és objektumra is
Nagy előnye az alap for ciklussal szemben, hogy tömbre és objektumra is alkalmazható, nem kell hozzá külön változó, hogy végig tudd járni az objektumok kulcsait.

A példában ugyanazt a ciklust használom fel tömbhöz és objektumhoz is:
```
let arr = {
    name : "cool",
    number : 2,
    active : true
};
for(let k in arr) {
    console.log(arr[k]);
};
```

#### Előnyei
* Tömbre és objektumra is működik.
* Egyszerűbb szintaxis.

#### Hátránya
* Nehezebb a futását limitálni, mert nincs külön iterátora.

A `for...in` ciklus esetén is használható a `continue` és a `break` utasítás.
```
let arr = ["cool", true, 22];
for(let k in arr) {
    console.log("Before: " + arr[k]);
    continue; // vagy break;
    console.log("After: " + arr[k]);
};
```

***

### Iteráció
**Az iteráció egy függvény ismételt végrehajtása az előző függvényértéken.** Magyarul, az iteráció azt jelenti, hogy egy sorozat elemeit végigjárom és mindegyiken végrehajtok egy műveletet, és ez a végigjárás valamilyen sorban történi, azaz nem összevissza ugrálok a sorban található elemeken.

### For...of
Ezt a fajta ciklust az ES2015 szabvány hozta be a js-be. A `for...of` ciklus hasonló a `for...in`-hez, de vannak különbségek.
1. Nem a kulcsokon, hanem az értékeken megy végig
2. Array-like, tömb szerű változókon lehet alkalmazni

Példa a használatára:
```
let iterable = [10, 20, 30];
for (let value of iterable) {
  value += 1;
  console.log(value);
};
```

Azt írja ki, hogy `11, 21, 31`. A tömb az iterálható, azt be tudja járni a `for...of` ciklus és egyesével kiolvassa az elemeit. Ezután növeltem eggyel az értékeket és kiírtam a console-ra.

### String bejárása `for...of` ciklussal
```
let iterable = 'boo';
for (let value of iterable) { console.log(value); }
```

Azonosan tudod elvégezni, mint a tömb esetén. Emlékszel, a String nagyon hasonlóan viselkedik, mint az Array. A kimenet "b", "o", "o" lesz.

### Objektum bejárása for...of ciklussal - ha NEM kell a kulcs
```
let user = { name: "Kiss Ramóna", age: 22 };
for ( let value of Object.values(user) ) { console.log(value); }
```
Nem konkrétan az objektumot járja be a példában a ciklus, hanem kiolvasom az objektumból az értékeket, amit az `Object.values()` metódus egy tömbben ad vissza. Ezt a tömböt már be tudom járni, mert az Array az iterálható. Így viszont elveszítem a kulcsokat és csak az értékekkel tudok dolgozni a ciklusban. Ennek akkor van veszélye, ha nem abban a sorrendben vannak az adatok az objektumban, ahogy én arra számítottam.

### Objektum bejárása for...of ciklussal - ha kell a kulcs
```
let user = { name: "Kiss Ramóna", age: 22 };
for ( let entry of Object.entries(user) ) {
  console.log( `${entry[0]}: ${entry[1]}` );
}
```

Miért érdekes ez? Mert ha meghívod az `Object.entries()` metódust és átadsz neki egy objektumot, akkor egy tömböt ad vissza, amiben al-tömbökben az egyes tulajdonságok `[key, value]` formában benne vannak. Az egyes bejegyzések entry első eleme tehát a kulcs, a második az érték.

***

### Metódus
A metódus (angolul method) azt jelenti, hogy egy dolgot hogyan csinálunk meg? Azaz a kivitelezés módját. Az objektumoknak vannak tulajdonságai, ha egy objektum egy embert jelent, akkor például a magassága vagy a haja színe. De vannak metódusai is, azaz amit tudnak csinálni. Ilyen lehet hogy tudnak beszélni, sétálni, futni, stb. Tehát a metódus azt írja le, hogy egy adott ovjektum egy dolgot hogyan csinál?

### Beépített metódusok
Találkoztál már metódusokkal, amiket bizonyos objektumokra meg lehet hívni. `Array.isArray()`, `Object.keys()`, `Object.etries()` ismerősek? Ezek tipikus metódusok, amelyek már alapból meg vannak írva és használhatod őkat. A metódus gyakorlatilag egy függvény, ami egy objektumhoz van kötve és nem csak úgy "lóg a levegőben".

### Saját metódusok
De te is bármikor késztíthetsz egy metódust, most megmutatom hogyan. Egy objektum metódussal:
```
let product = {
  price: 1000,
  desc: function() {
    return "This is an awesome product.";
  }
}

console.log( product.desc() );
```

### Pár érdekes dolog
* A `product` objektum egyik tulajdonsága egy függvény. Ezt metódusnak hívjuk.
 A metódus kulcs (neve) `desc`.
* Ha meg akarod hívni, akkor így tudod: `product.desc()`.
* Fontosak a zárójelek, csak akkor fog lefutni, ha van utána kettő. Tudod, invocation azaz a metódus meghívása.
* És amit a `desc` metódus visszaad, azt ki is írathatod mondjuk egy `console.log`-gal.

***

### This
Ezt a szót az angolok akkor használják, ha rá akarnak mutatni valamire. Ez. Mindig egy adott objektumot jelent. A kérdés, hogy mikor melyiket?

### Mikor mi a this?
**A globalis objektumot jelenti, ami álatalában a window:**  
**Hol:** a js fájl gyökerében, függvényekben.
```
console.log( this ); // window
```

Szóval ha csak úgy simán lekéred a js dokumentum gyökeréban akkor a legfelső szintű objektum lesz, ami a böngészőben a window.

**A szülő objektumot jelenti:**  
**Hol:** metódusban.
```
let product = {
  price: 2000,
  showPrice: function() {
    return `${this.price} Ft`;
  }
}
```

**Azt az elemet jelenti, amelyre végbement az esemény:**  
**Hol:** az eseménykezelő függvényben.
```
<button onclick="this.style.display='none'"> Click to Remove Me! </button>
```

Itt a `this` a button lesz.

***

### Objektumok
Már elég sokrszor leírtam, de nem lehet elégszer: az objektumok a való világban létező dolgokat jelentik. Lehet objektum egy ember, állat, autó, ingatlan és még sok más is. Az objektum nem jeleníti meg az összes tulajdonságát a dolgoknak, csak azokat amelyek számunkra fontosak.

### Tipikus user
Alapvető objektum szokott lenni a user. Egy programot emberek használnak, akik belépnek, kilépnek, adatokkal dolgoznak. Nagyon jó alanyok lesznek most egy kis objektum készítéshez:

### Egy durva user objektum felépítése
```
let user = {
  "_id": "5cda967e7dc7132184fca4c7",
  "index": 0,
  "guid": "12f9f283-c1fb-475e-9e4d-fdddb30c970c",
  "isActive": true,
  "balance": "$1,241.29",
  "picture": "http://placehold.it/32x32",
  "age": 38,
  "eyeColor": "green",
  "name": {
    "first": "Imelda",
    "last": "Compton"
  },
  "company": "ENERVATE",
  "email": "imelda.compton@enervate.name",
  "phone": "+1 (949) 487-3823",
  "address": "120 Norwood Avenue, Canoochee, Washington, 6049",
  "about": "Ullamco consequat sit Lorem aute voluptate reprehenderit enim ut tempor amet. Ea nostrud deserunt ullamco veniam eu incididunt id exercitation ipsum consequat in ullamco occaecat do. Reprehenderit culpa magna cillum sint aliqua. Tempor sunt qui incididunt culpa mollit et cupidatat sunt amet duis. Esse est nisi Lorem eu cupidatat sint dolor proident do sit.",
  "registered": "Sunday, September 23, 2018 2:35 AM",
  "latitude": "8.539048",
  "longitude": "-42.045441",
  "tags": [
    "voluptate",
    "ipsum",
    "quis",
    "consectetur",
    "elit"
  ],
  "friends": [
    {
      "id": 0,
      "name": "Malone Owens"
    },
    {
      "id": 1,
      "name": "Schultz Morales"
    },
    {
      "id": 2,
      "name": "Suzanne Stephenson"
    }
  ],
  "greeting": "Hello, Imelda! You have 7 unread messages.",
  "favoriteFruit": "apple"
};
```

Ezt az objektumot egy olyan oldalon generáltattam, ahol lehet a programod teszteléséhez készíteni nagy JSON tömböket (link a doksiknál). Ez a tömb egyik eleme. De ez nem igazi objektum még, csak egy JSON string. Igaz, a js kompatibilis vele, tehát ha így egy az egyben bemásolnád a kódodba akkor tudnád használni.

### Metódusok
Mit ér az objektum metódus nélkül (sokat de jobb ha van neki)? Átalakítok gyorsan néhány statikus tulajdonságot metódusra, hogy ez is legyen gyakorolva. (Nem írom ki a teljes kódot, csak a módosított részeket, tehát így egy az egyben nem lehet lefuttatni.)

### getBalance
```
"balance": 1500,
"getBalance": function(currency = "$") {
  return `${currency} ${this.balance}`;
}
```

A `balance` tulajdonságot Number típusként adom meg, mert lehet hogy lesznek vele matematikai műveletek (csökkentés, növelés, stb...) és így praktikusabb. Ezért létrehozok egy `getBalance` metódust, ami formázva adja vissza a felhasználó egyenlegét. Sőt, felveszek egy `currency` paramétert is $ alapértelmezett értékkel. Ha megadják a pénzenemet amikor meghívják a metódust akkor azt teszi elé, ha nem akkor dollár lesz.

### getFullname
```
"name": {  "first": "Imelda",  "last": "Compton" },
"getFullname": function() {
  return `${this.name.last} ${this.name.first}`;
}
```

Az előző metódushoz hasonló, azt teszi érdekessé, hogy aname az maga is objektum, tehát úgy érem el a vezeték és keresztnevet, hogy `this.name.last` és `this.name.first`.

### greeting
```
"greeting": function() {
  return `Hello, ${this.name.first}! You have 7 unread messages.";
}
```
Ez már csak ujjgyakorlat. A `greeting` metódus lett, és az objektum name tulajdonságából veszi a keresztnevet. Miért jó ez? Azért, mert ha megváltoztatod a nevet, akkor is jól fog működni. Mire gondolok? Ha kiadom ezt a parancsot: `user.name.first = "Maria"` akkor megváltozik a keresztnév. Igen ám, de ha nem a `this.name.first`-tel olvasom ki, akkor továbbra is azt fogja kiírni, hogy Hello Imelda!...

***

### Arrow Function
Elérkeztünk a függvényekkel kapcsolatos újítások legzseniálisabb részéhez, azaz az Arrow function-ökhöz.

Nézzük meg mi is ez az új CSODA. Az előző leckékben már tettem rá említést, most a gyakorlatban is megmutatom, hogy is teszik egyszerűbbé az életünket az arrow function-ök.

Az `arrow` function segítségével egyszerűbben tudsz létrehozni függvényeket, mint függvény kifejezéssel.

Emlékszel még erre:
```
let people = [
  {
    firstName: "John",
    lastName: "Doe"
  },
  {
    firstName: "Jane",
    lastName: "Doe"
  }
];
let template = `<div> ${people.map(function(person) {
  return `<p> ${person.firstName} ${person.lastName} </p>`;
}).join("")} </div>`;
```

Egyszerűsítsük:
```
let people = [
  {
    firstName: "John",
    lastName: "Doe"
  },
  {
    firstName: "Jane",
    lastName: "Doe"
  }
];
let template = `<div>
    ${people.map(person => `<p> ${person.firstName} ${person.lastName}</p>`)
    .join("")} </div>`;
console.log(template); /* <div> <p> John Doe </p><p> Jane Doe </p> </div> */
```

Ugyanazt kapjuk a kimeneten. De mi is történt? A `callback` függvényünket átírtuk egy újfajta szintaxisra.
* Elhagytuk a function kulcsszót.
* Az `arrow` function mindig anonim lesz.
* A paraméter körüli zárójeleket töröltük (EZT CSAK AKKOR TEHETJÜK MEG HA 1 PARAMÉTER VAN!).
* Elhagytuk a kapcsos zárójeleket (NEM MINDIG!).
* Egy `=>` jelet írunk a paramétere(k) után.
* Elhagytuk a `return` kulcsszót.

Nézzünk egy másik egyszerűbb példát is:
```
let languages = ["java", "php", "python"];

// Ezt írjuk át:
let scriptsOldStyle = languages.map(function(language) {
  return `${language} script`;
});

// Erre:
let scriptsNewStyle = languages.map(language => `${language} script`);
```

A fenti példán is jól láthatók a szintaxisbeli különbségek. Nézzünk meg egy példát több paraméterrel:
```
let languages = ["java", "php", "python"];
let languageRank = languages.map((language, i) => `${i + 1}. ${language} script`);
console.log(languageRank); //  ["1. java script", "2. php script", "3. python script"]
```

Láthatjuk, hogy több paraméter esetén a zárójeleket ki KELL tennünk. Nézzünk egy példát egy összetettebb függvényre:
```
let alertMessage = message => {
  alert(`Alert ${message}`);
  console.log(`Alert ${message}`);
};
alertMessage("Message");
```

Tehát ahogy említettem, ha nem csak egy egyszerű utasításunk van a függvényben, a kapcsos zárójeleket kitesszük, illetve ha nincs kapcsos zárójel az azt jelenti, hogy visszatérési értékünk lesz. Nézzünk még egy érdekes példát arra az esetre, hogy ha a függvénynek egyáltalán nem lenne paramétere:
```
let infoMessage = () => console.log("Arrow function");
infoMessage();
```

Nézzünk még egy szép összetett real life példát funkcionális programozási szemléletmóddal így a végére:

Van egy webshopunk, és a html kódból meg kell mondanunk, hogy az általunk árult szerverek összesített ára mennyi:
```
<!DOCTYPE html>
<html lang="hu">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Arrow Function Example</title>
  </head>
  <body>
    <ul id="price-list">
      <li>TV</li>
      <li data-company="Dell">Server</li>
      <li data-price="11.012,12">TV</li>
      <li data-price="23.243,55">Server</li>
      <li data-price="4.543,29">TV</li>
      <li data-price="230.323,32">Server</li>
      <li data-price="48.344,30">Server</li>
    </ul>
  </body>
  <script>
    const serverPrice = Array.from(
      document.querySelectorAll('#price-list li[data-price]'))
      .filter(item => item.textContent.includes('Server'))
      .map(item => parseFloat(item.dataset.price.replace('.', '')
      .replace(',', '.')))
      .reduce((total, item) => total + item);
    console.log(serverPrice);
  </script>
</html>
```

Mindössze annyit teszünk, hogy használjuk a tömb metódusainkat, most már `Arrow function`-ökkel kombinálva. (Az `Array.from()` szintén hamarosan kifejtésre kerül, csakúgy, mint az `includes()`, ami leginkább az `indexOf()`-ra hasonlít)

* Kigyűjtjük egy konstansba a `price-list` id-jú elemen belül az összes `li`-t,aminek a `data-price` attribútuma meg van adva. (Az `Array.from()`-ról a későbbiekben részletesen.)
* Leszűrjük az elemeket, hogy a "Server" szót tartalmazó elemek maradjanak, tehát csak a szerverek árai érdekelnek.
* Tömböt készítünk ezen elemek áráról, mely érték már float-tá lesz alakítva (kiszedjük a pontot), és figyelünk a "," karakterekre is, melyeket "."-ra cserélünk.
* A kapott összegeket összeadjuk.

### Arrow function és a return utasítás
```
// return: undefined
// Üres blokk, implicit return
(firstName => {})()

// return: 'Hello John'
// Nincs blokk, implicit return
(firstName => 'Hello ' + firstName)('John')

// return: undefined
// explicit return kell a blokkon belül, de Hello hiányzik
(firstName => {'Hello ' + firstName})('John')

// return: 'Hello John'
// explicit return a blokkon belül
(firstName => {return 'Hello ' + firstName})('John')

// return: undefined
// a block egy label-t tartalmaz. Nincs explicit return.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label
(firstName => {name: firstName})('John')

// return: {name: 'John'}
// implicit return a ( ) belül, ami egy objektum
(firstName => ({name: firstName}))('John')

// return: name: 'John'
// explicit return a blokkon belül, objektum
(firstName => {return {name: firstName}})('John')
```

### Arrow function és a local binding
A JavaScript fejlesztők élete nem csak játék és mese. Az `arrow function`-nél nincs `local binding`. Tehát nincs `arguments, this, super, new.target`. Ha a `arrow function`-ön belül megpróbáljuk elérni, akkor a `parent scope` lesz használva.

Nézzünk egy példát this esetére, és hogy mikor jó nekünk az arrow function e tulajdonsága:
```
/*
  A régi módszer, a this-t beletettük a that-be,
  hogy a setInterval-on belüli callback-ben is elérjük
*/
function People() {
  var that = this;
  that.age = 0;
  setInterval(function setAge() {
    that.age = 30;
  }, 1000);
}

// És most:
function PeopleWithAF() {
  this.age = 0;
  setInterval(() => {
    this.age = 30;
  }, 1000);
}
```

Ím látjuk, hogy ez szép, jó, és hasznos, szóval jöjjön is egy példa, hogy mikor NEM jó.

Ilyen esetben - objektum metódusban - érdemes kerülni a használatát:
```
let sampleObject = {
  a: 10,
  b: () => console.log(this.a, this),
  c: function() {
    console.log(this.a, this);
  }
};

sampleObject.b();
// undefined, Window {...} (vagy global object)

sampleObject.c();
// 10, Object {...}
```