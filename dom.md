# DOM

A JavaScript egyik fő célja a HTML dokumentumok dinamikus kezelése. Erre a célra a böngészőben az ún. Document Object MA DOM API segítségével lekérdezheted és változtathatod a HTML elemeket. Az API-t a globális **document** objektumon keresztül éred el.

Egy HTML elemhez többféleképpen is hozzáférhetsz.

#### document.getElementById()
Az elemet az **id** attribútum alapján szeretném elérni. Mivel az id-nak egyedinek kell lennie egy oldalon, ezért ez a függvény az adott elemet adja vissza (egész pontosan egy objektumot ad vissza, amin keresztül tudod az elemet módosítani).
```
document.getElementById('myId');
```

Abban az esetben, ha a megadott id nem létezik az oldalon, a függvény null értékkel tér vissza.

#### document.getElementsByName()
Hasonló a getElementById függvényhez, de itt a **name** attribútum alapján történik a keresés. Figyeljük meg az apró különbséget, az elements a függvény nevében többesszámban van. Ez a függvény egy tömböt fog visszaadni nekünk.

#### document.getElementsByClassName()
A **class** attribútum alapján visszakapjuk azokat a HTML elemeket egy tömbben.

#### document.getElementsByTagName()
Ez a függvény minden elemet visszaad nekünk, aminek a típusa a megadott tag.

#### document.querySelector()
Ez a függvény CSS selectorok alapján keres nekünk HTML elemeket, majd visszaadja az első találatot.

#### document.querySelectorAll()
Szintén CSS selectorok alapján keres nekünk HTML elemeket, de minden egyező elemet visszaad nekünk.

A modernt webfejlesztésben ez utóbbi kettőt használjuk leginkább!

[JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)

***

### Element - a DOM elemek őse
Az **Element** objektumon keresztül érjük el az oldalon található HTML elemeket. Mutatok pár érdekes dolgot vele kapcsolatban, és fel is okosítjuk kicsit.

### Element
Ha bármilyen módon kiválasztasz egy HTML elemet az oldalon, egy Element típusú JavaScript objektumot fogsz visszakapni. Például igaz ez a querySelector használata esetén is.

### Element bővítése
Az objektumoknál már tanultuk, hogy lehet bővíteni őket. De egy bizonyos `prototype`-juk, azaz tervrajzuk vagy prototípusuk is. Minden új elem ez alapján a prototípus alapján készül. Így ha szeretnéd az összes HTML elemet felruházni egy új képességgel, akkor ezt a prototype-ban kell létrehoznod.

Például lehet bővíteni az Element-et valamilyen metódussal:
```
let input = document.querySelector('input');
Element.prototype.setDisabled = function() {
  this.setAttribute('disabled', 'disabled');
  this.classList.add('disabled');
}

input.setDisabled();
```

Ez azért nem kicsit durva, nézzük át mégegyszer:
* Először megkeresem az inputot és elmentem az `input` nevű változóba.
* Bővítem az Element prototípusát egy új metódussal, a neve `setDisabled` lesz.
* Amikor meghívják, a `this` az az element lesz, ami után írják a metódus nevét.
* Beállítom az attribútumot és hozzáadok egy osztályt is az osztálylistához.
* Végül meghívom az adott elemre.

***

### Attributes - a tulajdonságok
Ahogy már megmutattam, a HTML elemek tulajdonságait attribútumoknak is hívjuk. Most ezeket fogjuk JavaScript segítségével módosítani.

### getAttribute() - tulajdonságok lekérése
Ez a metódus, a `getAttribute` függvény visszaadja egy adott HTML elem egy bizonyos attribútumának az értékét. Hogy mire vagy kíváncsi, azt neked kell megadod.

Emlékszel amikor a string változókat kellett vágni? Ott is megadtuk, hogy honnan kezdje a vágást és meddig vágjon? Tehát paraméterekkel láttuk el a metódust. Itt ugyanerről van szó, meg kell mondanunk a `getAttribute` függvénynek, hogy mire is vagyunk kíváncsiak, a sok tulajdonság közül konkrétan melyik is érdekel minket.
```
var classes = document.querySelector("H1").getAttribute("class");
```

Ez egy stringet fog visszaadni. Ha a H1 elem így néz ki: `<h1 class="main dark">Hello</h1>`, akkor a `classes` változó tartalma a következő lesz: "main dark".

### setAttribute() - tulajdonságok módosítása
Hasonlít a barátjához, de ezzel a HTML elem tulajdonságait nem lekérni, hanem módosítani tudod. Ebből fakad, hogy nem elég neki egy paraméter, meg kell adni az új értéket is a tulajdonság neve után. A példában egy HTML elem több tulajdonságát is módosítom:
```
document.querySelector("H1").setAttribute("class", "dark grey big");
document.querySelector("H1").setAttribute("title", "Urgent message");
document.querySelector("H1").setAttribute("id", "mainTitle");
```

***

### Tömeges módosítás
Gyakran kell majd egyszerre több HTML elem tulajdonságait is módosítanod. Ehhez kombináljuk a lekérdezést és a megismert ciklusokat egymással. Tehát végig kell menned az összes elemen, és egyesével módosítani a tulajdonságaikat.

### For - a legjobb választás
Láttuk, hogy a `querySelectorAll` metódus visszaadja az összes elemet egy tömbben. Igen ám, de nem minden tömb, ami annak látszik.

**NodeList:** Ugyanis amit visszaad, az okosabb, mint egy tömb. Ezért vigyázni kell, ha végig akarsz menni az elemein, mert könnyen találkozhatsz olyannal, amelyikre nem működnek az ismert trükkök, mondjuk a `setAttribute`.

De a `length` tulajdonság a segítségünkre siet:
```
const myNodelist = document.querySelectorAll("p");
let i;
for (i = 0; i < myNodelist.length; i++) {
  myNodelist[i].style.backgroundColor = "red";
}
```

Semmi különös nem történt, csupán egy `for` ciklussal bejártam a `NodeList` elemeit, amelyek ebben a konkrét példában `<p></p>` elemek. A ciklusban pedig a háttérszínét mindegyiknek beállítottam pirosra.

### For...in - ha ragaszkodsz hozzá?!
Ha mégis ragaszkodsz a jó öreg `for...in` ciklushoz, azzal is dolgozhatsz, de ebben az esetben precízen ellenőrizd le, hogy helyes HTML elemet kaptál-e!

Ebben segítek neked a példában:
```
var myNodelist = document.querySelectorAll("p");
for (var k in myNodelist) {
  if (myNodelist[k].style) {
    myNodelist[k].style.backgroundColor = "red";
  }
}
```

Leellenőriztem, hogy van-e olyan tulajdonsága a `myNodelist k` kulcsú elemének, hogy `style`. Ha van, akkor beállítom a háttérszínt, ha nincs akkor nem hivatkozok rá mert hibát kapnék.

***

### Módosítás függvénnyel - a helyzet fokozódik
Lépések:
1. Készíts egy függvényt.
2. Add át neki a szelektort, a tulajdonság nevét és értékét.
3. A függvényben végigjárod az elemeket, és módosítod a tulajdonságot.
4. Végül valamit vissza is adsz a kíváncsiak kedvéért.
```
function massModify(selector) {
  var divs = document.querySelectorAll(selector);
  for (var k in divs) {
    if (divs[k].setAttribute) {
      divs[k].setAttribute('style', 'color: red');
    }
  }
  return true;
}

massModify('.mass');
```

***

### Children - az elem gyerekei
A HTML elemek között van egy képletes szülő-gyerek kapcsolat. A beágyazott elemeket, amelyek egy másik elemben vannak, annak gyerekeinek is szokás nevezni. A következő metódusok is innen kapták a nevüket.

### childElementCount
Az `Element.childElementCount` tulajdonság megmondja, hány gyereke van a HTML elemednek. Ez akkor lehet hasznos, ha keresel benne valamit. Ha először lekéred, hogy egyáltalán vannak-e gyerekei, nem fogsz feleslegesen dolgozni.
```
var elementCount = document.getElementById("myDIV").childElementCount;
```

### childNodes vs. children
Most megkeressük a gyerekeket.

* `element.childNodes` az összes gyerek, beleértve a kommentek és szövegek is.
* `element.children` csak az `Element` típusú gyerekek, vagyis komment és szöveg nincs benne.
```
let nodes = document.getElementById("myDIV").childNodes.length;
let children = document.body.children;
```

### firstChild | lastChild vs. firstElementChild | lastElementChild
Első vagy utolsó gyerekelem.

* `element.firstChild` az első gyerek, komment vagy szöveg is.
* `element.firstElementChild` csak az Element típusú első gyerek.
* `element.lastChild` az utolsó gyerek, komment vagy szöveg is.
* `element.lastElementChild` csak az Element típusú utolsó gyerek.

***

### Children - gyerek management
Azt már tudod, hogyan kell lekérni egy Element gyerekeit, most azt is megmutatom, hogyan tudsz hozzáadni újat, vagy meglévőt eltávolítani.

#### document.createElement()
Mielőtt hozzá akarsz adni egy elemet egy másikhoz, nyilván létre kellene hozni. Ezt szolgálja a `createElement` metódus. Használata nagyon egyszerű.

Megadod, hogy milyen elemet szeretnél létrehozni és elmented egy változóba:
```
var div = document.createElement('div');
```

#### Element.appendChild()
A neve alapján tehát hozzáfűz egy új elemet a meglévőhöz. Egészen pontosan nem is hozzá, hanem bele fűzi, mivel ezzel a metódussal abban az Element -ben hoz létre egy új gyerek Element -et, amelyre a metódust meghívod. Az új elem az utolsó lesz a szülő Element gyerekei között.

Lépésről lépésre:
* Kell egy Element, amibe bele akarod tenni az újat. `querySelector`
* Létre kell hozni egy új elemet. `createElement`
* Ha szükséges, be lehet állítani az új Element tuajdonságait. `setAttribute`
* Végül az új elemet hozzáadod a kiválaszott Element-hez. `appendChild`

Bővebben a példában:
```
var li = document.querySelector("ul li");
var anchor = document.createElement("li");
anchor.innerHTML = "Water";
anchor.setAttribute("href", "https://training360.com");
li.appendChild(a);
```

#### Element.removeChild()
Egy kis szintaxis: `node.removeChild(node)` Nagyon hasonlít a testvérére az `appendChild`-ra, csak nem kell elemet létrehozni.

Lépésről lépésre:
* Kell egy Element, amiből az egyik child-ot el akarjuk távolítani. `querySelector`
* Kell az az elem, amit el akarunk távolítani. `querySelector`
* Végül az eltávolítás. Fontos, hogy csak child elemet lehet. `removeChild`

Bővebben a példában:
```
var ul = document.querySelector("ul");
var li = document.querySelector("ul li:first-child");
ul.removeChild(li);
```

***

### Event - az esemény
A JavaScriptben lehetőség van eseményeket figyelni, és a hatásukra valamilyen kódot futtatni. Ilyen esemény például amikor betöltődik az oldal, vagy a felhasználó rákattint egy elemre.

#### = vs. addEventListener
Ha azt szeretnéd, hogy történjen valami, ha mondjuk egy gombra kattintanak, azt háromféleképpen is meg tudod adni.

1. Element attribútummal: `<element onclick="myScript">`
2. JavaScriptből hasonlóan: `object.onclick = function() { myScript };`
3. addEventListenerrel: `object.addEventListener("click", myScript);`
4. 
Az első kettőnél egy eseményre csak egy működést adhatsz meg, míg az addEventListener használatával többet is.

> **Fontos:** addEventListener esetén nem kell az on szócska az esemény neve elé.

#### Window események
A közös bennük, hogy nem felhasználói beavatkozásra történnek meg, hanem a böngésző működése váltja ki őket. Nem csak a window -ra lehet őket megadni, a legtöbb elem esetén használhatóak.

A fontosabbak:
* `onload` az objektum betöltődött
* `onresize` az objektumot átméretezték
* `onscroll` scrolloztak az objektumon

Például figyelhetjük ha scrolloztak, és egy bizonyos távolsagra az oldal tetejétől kisebbre vehetjük a fejlécet, vagy elrejthetünk bizonyos elemeket:
```
window.onscroll = myFunction;
function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myP").className = "test";
  } else {
    document.getElementById("myP").className = "";
  }
}
```

***

### Mouse events - egér események
A leggyakrabban figyelt események az egér események. Itt bejönnek a képbe a mobil eszközök is, mert ott már nincs egér, hanem legtöbbször ujjal kezelik őket. Ezeknél a kattintás a tap-et, azaz a tapintást jelenti.

A legfontosabbak:
* `onclick` kattintás vagy tappintás, ha mobileszközről van szó
* `onmouseover` az elem fölé viszik az egérmutatót (mobilon értelmetlen)
* `onmouseout` az elemről elhúzzák az egérmutatót (mobilon értelmetlen)
* 
Mindegyiket valamilyen konkrét HTML elemre, azaz Element típusú objektumra lehet beállítani, a fent részletezett három mód valamelyikével:
```
function fillPre(content) {
  document.querySelector('pre').innerHTML = content;
}
let button = document.querySelector('.click-button');
button.addEventListener('click', function(event) {
  var className = this.className;
  fillPre('clicked: ' + className);
});
```

### onchange és onsubmit - form elemek
Fontos értesülnöd róla, ha valaki piszkálja a formot.
* `onchange` input elemek értékének változását figyelheted.
* `onsubmit` a form (űrlap) elküldése előtt fut le, ezt figyelheted vele. Ha az eseménykezelő függvény visszatérési értéke false, akkor az űrlap nem kerül elküldésre.
```
function fillPre(content) {
  document.querySelector('pre').innerHTML = content;
}
var inputList = document.querySelectorAll('input');
for (var i = 0; i < inputList.length; i++) {
  if (inputList[i].addEventListener) {
    inputList[i].addEventListener('change', function(event) {
      fillPre( this.className + ': ' + this.value );
    });
  }
}
```

***

### Parent
Angolul szülőt jelent és az is. Ha egy elemnek lehetnek gyerekei, és meg lehet kérdezni, hogy hány gyereke van, és akár keresni is lehet közöttük, ugyanígy ha a gyermek elem felől nézzük a dolgot, annak is működnie kell. Jöjjön a kik a szüleid kérdés. Illetve pontosítok: ki a szülőd, mivel minden elemnek csak egyetlen közvetlen szülője lehet.

#### parentNode vs. parentElement
**parentNode:** az adott elem szülő node-ját adja vissza, mely lehet Element vagy gyökérelem esetén a document.  
** parentElement:** az adott elem szülő elemét adja vissza, mely mindig egy Element, vagy gyökérelem esetén null.

Fontos különbség van a node és az element között. A Node egy csomópont a dokumentumban, lehet egy egyszerű textNode is, ami nem valódi HTML Element. Mert minden Element node, de nem minden node element :)
```
document.body.parentNode; // <html>
document.body.parentElement; // <html> element
```

#### Munka a szülőkkel
A példában elrejtem a span szülőjét a kíváncsi tekintetek elől:
```
<div>
  <span onclick="this.parentElement.style.display = 'none';">x</span>
</div>
```

Kattintásra a div-nek fogja a style.display tulajdonságát "none"-ra állítani. Tehát a kattintott elem szülőjének.

***

### Switch - a kapcsoló
Ahogy a neve is mutatja, a switch egy kapcsoló. Több állása is lehet, egy változót vagy kifejezést vizsgál, és annak az értéke alapján ugrik a megfelelő utasításhoz.

#### Használata
Egy paramétere van, egy olyan változó vagy kifejezés, ami értéket ad vissza. Azután meg kell adni, hogy milyen érték hatására milyen utasítás fusson le.

Kulcsszavak:
* `switch(value)` - a value az az érték, amit figyel a switch.
* `case value`: kifejezés break; - ha a value megegyezik a vizsgált értékkel, lefut a kifejezés, utána break utasítást teszünk, hogy a többi ne fusson le.
* `default`: kifejezés - ha egyik case sem volt igaz, akkor ez fog lefutni.

Előnye, hogy gyorsabb, mint az `else...if`, viszont csak konkrét értékeket lehet vele vizsgálni, azaz például kisebb-nagyobb logikai kifejezést nem tud értelmezni.

Megkeresem a hét napjának nevét a száma alapján:
```
let weekDay = 1;
let dayName = '';

switch(weekDay) {
  case 0:
    dayName = 'Vasárnap';
    break;
  case 1:
    dayName = 'Hétfő';
    break;
  default:
    dayName = 'No Day Name';
}
console.log(dayName);
```

***

### While ciklus
Ahogy a neve is mutatja, mindaddig fut amíg a megadott feltétel igaz. Egy paramétere van, ami egy logikai kifejezés, ennek kell igaznak lennie, hogy a ciklus újra lefusson.

#### Használata
Paraméterei:
* feltétel: egy logikai kifejezés.

Egy while ciklus létrehozása:
```
let i = 0;
while(i < 5) {
  console.log(i);
  i++;
}
```

#### Végtelen ciklus
A `while` ciklus használata esetén gyakran előfordul, hogy a feltételt nem figyeljük megfelelően. Ekkor fordul elő, hogy a feltétel mindig igaz marad, és a ciklus végtelen hurokba kerül. A különböző értelmezők általában bizonyos számú futás után hibát adnak és leállnak, vagy lefagy a felület, mint például az alábbi esetben is.

> **Mindig figyelj oda a feltétel megfelelő frissítésére!**

Az alábbi példa egy végtelen ciklust mutat be.

A probléma az, hogy a feltételt elfelejtettem módosítani a ciklusmagban (persze direkt):
```
let i = 0;
while(i < 5) {
  console.log(i);
}
```

#### Kollekciók bejárása
Természetesen a `while` ciklus is alkalmas arra, hogy tömböket vagy objektumokat járj be a segítségével. Itt viszont nem kapsz semmi segítséget ehhez, neked kell leprogramoznod a kulcsok léptetését.

A példában kiolvasom a kulcsokat, majd bejárom az objektumot, közben pedig növelem az iterátort, ami alapján előállítom a kulcsokat:
```
let obj = {
  'name': 'Cat',
  'age': 3
};
let keys = Object.keys(obj);
let i = 0;

while(i < keys.length) {
  console.log(obj[keys[i]]);
  i++;
}
```

#### do while - hátultesztelő ciklus
Az elöltesztelős ciklusoknál megfigyelhettük, hogy először a feltétel vizsgálata történik meg, majd utána a kiértékelés eredményétől függően a ciklusmag futtatása. Ezzel szemben a hátultesztelős ciklus először lefuttatja a ciklusmagot, és csak utána vizsgálja meg a feltételt. A gyakorlatban ez a következőképp fest:
```
var i = 10;
do {
  console.log(i);
  i++;
}
while ( i < 0 );
```

A fenti esetben a konzolra kiírja a program, hogy 10, ugyanis a hátultesztelős ciklus lényege, hogy akár igaz a feltétel, akár hamis, egy alkalommal biztosan le fog futni.

***

### DOM manipuláció
Most összetett struktúrákat, listákat, táblázatokat fogunk generálni js-sel. Izgalmas lesz.

#### Lista while cilkussal
Bemelegítésnek készítek egy p elemekből álló listát while ciklussal:
```
let numbers = [1,2,3,4,5,6];
let i = 0;
let container = document.querySelector("div");
while(i < numbers.length) {
  let p = document.createElement("p");
  p.innerHTML = numbers[i];
  container.appendChild(p);
  i++;
}
```

Mit tettem?
* Létrehoztam a numbers tömböt.
* Beállítottam az i változót, ez lett az index.
* Megkerestem az első div-et az oldalon.
* Addig futtattam a while ciklust, amíg kisebb az i, mint a tömb hossza.
* A ciklusban létrehoztam egy p elemet és beállítottam a tartalmát a numbers tömb aktuális elemére.
* Hozzáadtam a p elemet a container-hez, ami egy div.
* Végül növeltem az i változót eggyel.

***

### Táblázat rajzolása objektumtömbből
Amikor egy szevrerről megkapod mondjuk a felhasználókat, az a legtöbbször egy tömb lesz, ami az egyes felhasználókat objektumként tartalmazza. Erre szokták mondani, hogy objektumtömb, vagy objektumok tömbje.

Legyen hát egy objektumtömböd:
```
let users = [
{
  "_id": "5cdad500da7a3648b7f5a3f3",
  "name": "Berger Whitney",
  "company": "ENAUT",
  "email": "berger.whitney@enaut.name"
},
{
  "_id": "5cdad50017e5fdde3c44bc5b",
  "name": "Laverne Dale",
  "company": "PYRAMIS",
  "email": "laverne.dale@pyramis.io"
}
];
```

Minden felhasználó objektuma azonosan épül fel, de az adataik természetesen különbözőek.

***

### Rajzolj táblázatot!
```
let table = document.querySelector("#demoTable");
for ( let i = 0; i < users.length; i++ ) {
  let tr = document.createElement("tr");
  for ( let data of Object.values(users[i]) ) {
    let td = document.createElement("td");
    td.innerHTML = data;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
```

A helyes táblázathoz két egymásba ágyazott ciklus kell. Az egyikben létrehozod a sorokat, a másikban a cellákat a sorokon belül. Amikor elkészíted a fenti példát a saját gépeden, használd a Google Chrome beépített debug eszközét ahogy tanultuk. Állítsd meg minden sorban a ciklusokat és nézd végig a változók pillanatnyi értékét.

***