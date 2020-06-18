# bootstrap_teszt
Bootstrap megismerése

### Bootstrap - ugorjunk a bakancsba!
A CSS keretrendszerek gyakorlatilag előre megírt .css fájlokból állnak. A mi dolgunk, akik használjuk őket, csak annyi, hogy a HTML elemeket az előre meghatározott osztályokhoz rendeljük. Most megmutatom neked a Bootstrap keretrendszer beállítását egy oldalra.

### Használatba vétel
Több módon is beillesztheted az oldaladba a Bootstrap keretrendszert.

### CDN használata
A CDN a tartalom továbbító hálózat rövidítése. Ha lekérsz rajta keresztül egy fájlt, akkor igyekszik mindig a legközelebbi szerverről visszaküldeni neked, hogy minél gyorsabban megkapd. Viszont hátránya, hogy nem garantálja hogy a fájl mindig fent lesz a szervereden, így tesztelési vagy oktatási célra alkalmas, éles rendszerhez pedig saját vagy fizetett CDN ajánlott.

Négy fájlra lesz szükséged, a css-t a fejlécbe, a js fájlokat a body végére célszerű elhelyezni:  
`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">`

`<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>`  
`<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>`  
`<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>`

### Saját kiszolgáló
Ha a fájlokat a saját szervereden akarod elhelyezni, akkor először le kell őket töltened. Majd kicsomagolni a megfelelő helyre. Azt javaslom, hogy mindig készíts mondjuk egy lib mappát, ahol azokat a fájlokat tárolod, amelyeket nem fogsz módosítani. Így elkerülheted hogy összekeveredjenek a saját munkáddal és sokkal könnyebb lesz karbantartani a frissítéseket.

### Csomagkezelők használata
Léteznek automatikus csomagkezelők, amelyek egy paranccsal rávehetők, hogy letöltsék a külső alkalmazásokat. Ilyenek például: NPM.

### Eszköz szélessége
A Bootstrap esetében fontos, hogy mindig igazodik az ablak szélességéhez, azaz a vízszintes görgetést elkerüli. Így mobilon is könnyen használható lesz az oldal. Ehhez viszont be kell állítani egy meta elemet az oldal fejlécében:  
`<meta name="viewport" content="width=device-width, initial-scale=1">`  
A mobil eszközöknek különböző a felbontása, ezért a gyártó megadja, hogy hogyan skálázódjon az oldal az ő eszközén. Mert hiába QHD azaz négyszeres FullHD a felbontás, attól még a kijelző kicsi. Ezt követi le a Bootstrap.

***

### Bootstrap - rácsrendszer
Hogy gyorsabb legyen az egyes elemek szélességét megadni, a Bootstrap bevezette az úgynevezett rácsrendszert. Ez arra való, hogy az elemek szélessége százalékosan igazodjon a befogadó ablak szélességéhez.

### Row - (sor)
Úgy kell elképzelni ezt a rácsrendszert, mint egy táblázatot. Vannak benne sorok és oszlopok, ahol találkoznak ott vannak a cellák. Ha új tartalmat szeretnél létrehozni, akkor először mindig kell egy sor, amibe majd beteszed az oszlopokat. Ez alapvetően egy div, amit a row osztályhoz kell rendelned:  
`<div class="row"></div>`

### Col - column (oszlop)
Tehát az oszlopokat soha ne önmagukban használd, hanem mindig egy soron belül. Ezek is div-ek, és col-* kezdetű osztályokhoz kell rendelned őket.

A Bootstrap minden sort 12 oszlopra oszt fel!

### Oszlopok száma
Az adott oszlopszélességet úgy tudod megadni, hogy az előtag után írod az oszlopok számát.

* A col-sm-12 azt jelenti, hogy telefon méretben teljes szélességű.
* A col-xl-3 nagy képernyőn 1/4 szélességű, mert a 12/3 = 4.
* A col-md-6 col-sm-12 közepes képernyőn 1/2, kicsin pedig teljes szélességű.

### Mobile first - elsősorban telefonra
A Mobile first kifejezés azt jelenti, hogy ha csak a telefon méretre adod meg az oszlopok szélességét, akkor az összes nagyobb méret esetén is az marad érvényben. De ha mondjuk megadod col-md esetén is az oszlopok számát, de col-lg esetén nem, akkor az lg esetén is az md marad érvényben. Tehát alulról felfelé nézi a beállításokat, mindig a kisebb az erősebb.

***

### A navbar részei
### Brand
Ez a cég vagy a szolgálatás fantázianeve. A brand. Ez van rögtön balról az első helyen. Érdemes tehát átírni a kívánt névre. Állítsd be a `href="/"` attribútumot, mivel a brand szövegére kattintva általában az emberek a főoldalra szeretnének jutni.

### Linkek
A linkek közül az első általában a Home feliratú, ennek a href="/" beállítást célszerű adni, ahogy a brand-nek is.  
`<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active"> <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a></li>
    ...
  </ul>
</div>`  
Ha megnézed a kódot, látod hogy a linkek egy ul-ben vannak, azon belül pedig természetesen li elemekben. Ha hozzárendeled az li elemet az active osztályhoz, akkor sötétebb színű a szöveg, amivel jelzi hogy éppen ezezn az oldalon van a felhasználó. Le is tilthatsz egy linket, ha az a elemet a disabled osztályhoz rendeled.

### Search
Igény esetén meg lehet hagyni a kereső blokkot is, ami egy beviteli mezőből és egy gombból áll. De ezt csak akkor hagyd meg, ha meg is csinálod, hogy működjön, mert nincs idegesítőbb annál, ha nyomják a gombot mint süket az ajtót és nem történik semmi :)

***

### Alert
Ezek figyelemfelkeltő üzenetek a felhasználók számára. Egyébként egyszerű div-ek, csak a Bootstrap szépen megformázza őket. Legtöbbször valamilyen művelet után használhatod őket, vagy ha mondjuk hibásan akar a felhasználó beküldeni adatokat.

### Használata
Két osztályt kell használnod. Az első alapvetően formázza meg az alertet, a második pedig a színét állítja be. A kódban az összes színösszeállításra van példa, ezek közül leggyakrabban a primary, success, danger, esetleg a warning osztályúakat fogod használni.
  
Megjegyzés: vigyázz, mert mint minden div, ez is blokk szintű. Ha nem akarod, hogy teljes szélességű legyen, ted egy keskenyebb col-ba.

***

### Bootstrap - táblásítsunk!
A táblázatok esetében gondolom már belefutottál abba, hogy nem egyszerű szépen formázni őket. A Bootstrap ennek a terhét is leveszi a válladról.

### Table elem
A Bootstrap-nek meg kell mondani, melyik táblákat formázza meg. Ezt a table osztály hozzáadásával teheted meg. Csak akkor fogja megfelelően formázni a táblázatodat, ha `<thead></thead>` és `<tbody></tbody>` elemekre bontod. A thead-en belül tr és th elemekkel dolgozz, a tbody-ban pedig a megszokott módon, tr és td elemekkel.

### Táblák fajtái
Többféleképp meg tudod jeleníteni a táblázatokat, csak a megfelelő osztályt kell alkalmaznod hozzá:

* Csíkozott (minden második sor kicsit sötétebb): table-striped
* Szegélyezett (látszanak a cellák szegélyei): table-bordered
* Hovered (a sor beszürkül, ha fölé viszed az egeret): table-hover
* Tömör (kisebb paddingot hagy a cellákon): table-sm
* A fenti osztályokat szabadon kombinálhatod is egymással.

### Sorok vagy cellák kiemelése
Lehetőséged van különböző háttérszínnel kiemelni a fontosabb adatokat. Ha a lenti osztályokhoz rendeled a sort vagy a cellát, a háttérszíne is változik:

* table-active : #f5f5f5
* table-success : #dff0d8
* table-warning : #fcf8e3
* table-danger : #f2dede
* table-info : #d9edf7