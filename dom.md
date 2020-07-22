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