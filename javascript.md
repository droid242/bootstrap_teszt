### Változó létrehozása
A változó az a hely a számítógép memóriájában, ahol valamilyen adatot vagy mennyiséget tárolunk. Amikor egy változót létrehozol js-ben, akkor a böngésző a neki kiosztott memóriában elkülönít egy területet az adatok tárolására, majd az általad megadott címkével ellátja, hogy később is megtaláld.

**Fontos:** a vátlozók létrehozásánál különböző kulcsszavakat használhatsz. Régebben a var kulcszót lehetett csak használni, de a 2015 -ös szabvány behozta a let és const kulcsszavakat. Továbbra is használható a var, de mi már mindenhol az újabb kulcsszavakat fogjuk használni.

Változót a `let` (régebben `var`) kulcsszóval hozhatsz létre:  
`let price1 = 5;`  
`let price2 = 6;`  
`let total = price1 + price2; // 11`  

A kód magyarázata:  
* let : utasítom a böngészőt, hogy egy változót fogok létrehozni
* price1 : a változó azonosítója, azt is szoktuk mondani, hogy a neve
* = : értékadó operátor, egyenlőségjel
* 5 : az érték amit a price1 változóban akarok tárolni

A kódot a böngésző hajtja végre és jobbról balra dolgozik.

Mit jelent az, hogy jobbról balra dolgozik akkor, amikor valaminek értéket adsz? Azt, hogy először létrehozza a számot, ha az első sort nézzük akkor az 5-öt. Elkészíti a változót és abban tárolja el a számot. Nem csak számokat tudsz változókban tárolni természetesen, hanem szövegeket, igaz-hamis értékeket vagy összetett adatotkat is, ezeket később mind szépen sorravesszük.

***

### Deklarálás, Definiálás
**Deklarálás:** egy változó deklarálása azt jelenti, hogy kinyilvánítom (deklarálom) hogy szeretnék egy változót létrehozni.

`let age;`

Létrehoztam, de nem adtam neki értéket. Elméletileg a kódban bárhol létrehozhatsz egy új változót, de az áttekinthetőség miatt az elején szokták. Előfordulhat, hogy ilyenkor még nem tudod mi lesz az értéke, ezért csak deklarálod a változót.

**Definiálás:** akkor definiálod a változót, amikor meghatráozod (definiálod) az értékét.

`age = 25;`

Figyeld meg, hogy nem írtam a változó neve elé a __*let*__ parancsot. Ez azért van, mert ezt a változót már előzőleg deklaráltam, azaz létrejött már a memóriában, csak még nem tettem bele semmilyen értéket. Most ezért nem kell a __*let*__ parancsot beírnom, mert az azt jelentené hogy újra létre akarom hozni, én viszont csak az értékét akarom beállítani.

**Egyszerre:** amikor a deklarálás és a definiálást egyszerre hajtod végre, azt inicializálásnak is szokták nevezni, de ez programnyelvenként eltérő lehet. Ekkor egy lépésben létrejön a változó és értéket is kap.

`let age = 25;`

### Minek nevezzelek?
A változók nevét nem mindegy hogy hogyan határozod meg. Beszédesnek és könnyen olvahatónak kell lennie, hogy te és a munkatársaid is könnyen eligazodjatok a kódban.

#### Változó nevek
* Nem keződhet számmal és speciális karakterrel.
* Nem lehet benne szóköz.
* Kifejezőnek kell lennie.
* Egyedinek kell lennie.
* Ha több szóból áll, nagybetűvel jelöljük a szavak kezdetét, ezt úgy hívják camelCase azaz tevepúp módszer.

#### Példák

`let 2sheep = 2; // rossz, mert számmal kezdődik`  
`let one moment = 1; // rossz, mert szóköz van benne`  
`let a = 45; // roszz, mert nem kifejező a név`  
`let userAge = 45; // jó mert kifejező, nem számmal kezdődik és camelCase`

#### const
A js-ben a `const` egy olyan memóriaterületet jelöl, aminek csak egyszer adhatsz értéket. Ha egyszer már definiáltad, akkor később nem tudod az értékét megváltoztatni. Arra szokták használni, hogy védjenek fontos adatokat a program futása során, nehogy véletlenül megváltozzanak és ez hibát eredményezzen.

#### Használata
`const programName = "ultimatePoker";`  
`programName = "myPoker"; // ez hibát eredményez, mert nem lehet az értékét megváltoztatni`

***

### Type
Minden változónak van típusa, csak ezt a js-ben nem kell megadni, magától állítja be. Itt kicsit bemutatom neked a változók típusait.

#### Primitívek
A primitívek olyan (elmaradott törzsek a dzsungelben) változó típusok, amelyek nem bonthatóak tovább al-típusokra. Vannak például tömbök és objektumok is, amelyek más változókat tartalmaznak, ezekről hamarosan tanulsz majd. A javascriptben a primitív típusok kivételével minden objektum. Ezért is mondjuk, hogy a javascript objektumalapú nyelv.

A primitív típusok a következők:
* boolean
* number
* string
* null
* undefined
* symbol

A *boolean*, *string*, *number* primitíveknek van objektum megfelelője is. Amikor egy primitíven hívunk meg valamilyen objektum metódust, automatikusan objektummá alakul, és a műveletet követően visszaalakul primitívvé.

A primitív érték alakíthatatlan.

#### Fogalom
__*Immutable:*__ azaz egy-egy objektumon nem végezhető módosítás, helyette a műveletek egy új, módosított objektumot adnak vissza.

#### A változó mint objektum.
Minden objektumnak lehetnek tulajdonságai (property) és metódusai (method).

#### Dot operator - tulajdonságok elérése
Az előző példában már láthattad, hogy egy objektum property-jeit és method-jait a *.* pont beírása után tudod lekérni vagy beállítani. Ezt __*dot operator*__-nak is hívják a pont angol neve után. Nagyon sokat fogod még használni a későbbiekben ezért jegyezd meg, hogy úgymond bele tudsz lépni az adott objektumba - változóba a pont beírása után.

Két módon is használhatod:
* `object.property`
* `object['property']`

Az eredemény ugyanaz lesz, de a későbbiekben látni fogod, hogy van hogy a pontot nem lehet használni. Ilyenkor jól jön majd a szögletes zárójeles írásmód.

#### typeof
A változók típusát a *typeof* beépített függvény segítségével kérhetjük le. Ez csak az alapvető típusokat ismeri, a későbbiekben foglalkozunk a pontosabb típus meghatározással is. A változó típusát a tulajdonságai és metódusai alapján is meg lehet határozni.

***

### Metódus
Metódusnak azt nevezzük, amit egy típus csinálni tud.

Hogy mi van?

Az, hogy milyen hosszú egy String, az a tulajdonsága, olyan és kész. De hogy például képes a saját értékét visszaadni nagybetűs formában az már egy képessége amit végre tud hajtani. A metódus szó módszert jelent. A metódusok írják le, hogy pontosan hogyan megy végbe például egy nagybetűssé alakítás. A különböző típusok esetén vannak átfedések, azaz egy tulajdonság vagy metódus több típus esetén is létezhet.

#### Stringek tulajdonságai
* length : Megadja a String típusú változó hosszát, azaz hogy hány karakterből áll.

#### Stringek metódusai
* trim() : Eltávolítja a felesleges szóközöket, amelyek a String előtt és után találhatóak.
* concat() : Új karaktereket fűz hozzá a meglévő Stringhez.
* toLowerCase() : Kisbetűssé alakítja az adott Stringet.
* toUpperCase() : Az előzővel ellentétben nagybetűssé alakítja a karaktereket.

***

**indexOf();**  
Megkeresi a Stringen belül egy adott szövegrész kezdetét. A kezdő karakter indexét adja vissza, amely 0-tól kezdődik, azaz az első karakter a 0 sorszámú és így tovább.

**replace();**  
Kicseréli a megadott szövegrészt a Stringen belül. Ahogy a példában is látni fogod, ennek a metódusnak kettő darab úgynevezett paramétere van, tehát két adatot kell a zárójelek között megadni: először azt, amit cserélni szeretnél, azután pedig azt, amire ki szeretnéd cserélni.

***

### Boolean

A legegyszerűbb változó a Boolean típusú. Csak két értéket vehet fel, ezért a leggyakrabban egy biten tárolható, mert vagy 0 = hamis, vagy 1 = igaz az értéke.

#### Boolean típus
* Igaz - hamis értékeket tárol.
* Segítségével egy biten tudod tárolni a logikai értékeket.
* Két értéket vehet csak fel: true vagy false.
* Mivel nagyon egyszerű típus, az előzőekben megismert típusokkal szemben nincsenek külön metódusai.
* 
A Boolean típusú változókat elsősorban kiértékelések során tudod felhasználni.

#### Logikai kifejezés
Olyan kifejezés, amely kiértékelése után true vagy false értéket ad vissza. A logikai kifejezések értékekből és operátorokból épülnek fel, például x < y egy logikai kifejezés, mert csak két eset lehetséges, hogy nagyobb vagy nem. Ha nagyobb, akkor true lesz az értéke, ha nem (azaz kisebb vagy egyenlő) akkor pedig false.

#### Logikai operátorok
Logikai kifejezésekben a következő operátorokat használhatod:

* < kisebb,
* \> nagyobb,
* <= kisebb vagy egyenlő,
* \>= nagyobb vagy egyenlő,
* == megegyező érték,
* === megegyező érték és típus,
* != nem megegyező érték,
* !== nem megegyező érték és típus,
* ! tagadás - logikai érték megfordítása,
* && és,
* || vagy.

A logikai kifejezésekre szintén érvényesek a zárójelezés szabályai.

#### Különböző típusú változók és a `+` jel
Azt már tudod, hogy a `+` jel segítségével számokat tudsz összeadni vagy stringek esetén össze tudod őket fűzni. De mi a helyzet, ha különböző típusú változóknál használom a `+` jelet?

Az alábbi példák ezt mutatják be:
```
10 + "text"     // "10text" - a számot szövegként kezelte
10 + "10"       // "1010" - a számot szövegként kezelte most is, azonban:
10 - "1"        // 9, tehát kivonás esetében számként kezelte
10 + true       // 11, a true-t 1-nek veszi
10 - true       // 9
10 + false      // 10, a false-t 0-nak tekinti
"10" + true     // "10true", a boolean értéket string-nek veszi
```

***

### `If` feltétel
Gyakran kell eldönteni valamiről, hogy igaz vagy hamis. Ha eldöntöttük és igaz, akkor valamilyen műveletet kell végrehajtani, ha pedig nem igaz, akkor valami mást szeretnénk csinálni.

**Erre való az `if-else` programozási szerkezet.**

#### Az `if-else` használata:
* Az `if` kulcsszó után zárójelben kell megadnod a logikai kifejezést.
* A logikai kifejezés után kapcsos zárójelek között van az utasítás.
* Az utasítás után jön az úgynevezett else, a saját utasításával. (Opcionális, azaz nem fontos az `if` után mindig jönni egy `else` utasításnak).

