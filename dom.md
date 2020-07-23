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