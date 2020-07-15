# Algoritmus, avagy al-Hvárizmi kicsit félrefordítva

Az algoritmus egy feladat, probléma megoldásához vezető lépések, utasítások sorozata. Például egy recept is egy algoritmus, leírja lépésenként, hogyan kell elkészíteni egy ételt. Ha követed pontosan az utasításokat, akkor valószínűleg sikerül neked is az asztalra varázsolni a vacsorát. Ez persze függ attól is, mennyire részletesen tartalmazza a recept az adott étel elkészítéséhez tartozó lépéseket. Egy kezdőnek természetesen minden apró mozzanatot el kell magyarázni, míg egy gyakorlott séfnek elegendő egy nagyobb léptékű leírás. Ebből is látszik, hogy egy problémát nem csak egyféle algoritmussal oldhatsz meg. Nemcsak a lépések mélységében különbözhetnek ezek az algoritmusok, hanem akár teljesen más lépésekből is állhatnak, és a végeredmény mégis ugyanaz.

### Az algoritmus jellemzői
Az egyszerű algoritmusokon túl lehetnek akár igen bonyolultak is, mint pl. egy nagy forgalmú reptér irányítása. Az algoritmussal szemben ezért is állítottak néhány követelményt:
* **Véges:** véges számú lépésből áll.
* **Egyértelmű:** a megoldáshoz vezető lépéssorozat tisztán, egyértelműen van megadva, és szigorúan követhető, nem hagy kétségeket.
* **Elvégezhető:** elvárjuk, hogy az algoritmust végre lehessen hajtani, vagyis a lépések elég egyszerűek legyenek, hogy pontosan végre lehessen hajtani.

### Algoritmusleíró eszközök
Az algoritmus leírásának módja több tényezőtől függ, például a megoldandó problémától, a célközönségtől. Egy egyszerű algoritmust akár **szövegesen** is leírhatsz pár mondatban röviden, pl. a reggeli kávé elkészítése:
* Bekapcsolom a kávéfőző gépet.
* Ellenőrzőm van-e elég kávé és víz a gépben.
* Amikor felmelegedett, odateszem a csészét és megnyomom az espresso gombot.

Előfordulhat, hogy **képeket** használnak az algoritmus bemutatására vagy önállóan, vagy a szöveges leírás mellé kiegészítésképpen. Gondolj csak a repülőgépeken a Safety On Board leírásokra (ne legyen rá szükséged), például mi a teendő, ha fogy az oxigén az utastérből.

Amíg csak utasításokat kell sorrendben egymás után sorolnom, addig ezek a módszerek teljesen megfelelnek. Viszont amikor már a szekvencián kívül más vezérlő szerkezetet is tartalmaz az algoritmus, akkor szerencsésebb lehet valami olyan leíró eszköz, ami szemléletesebb. A folyamatábra például a folyó szövegnél sokkal kifejezőbb ezekben az esetekben.

### Vezérlési szerkezetek
A szekvencián kívül két vezérlési szerkezetet használtunk a folyamatábrán.
* Az egyik az elágazás (szelekció), amikor feltételtől függően más-más irányba halad tovább a vezérlés.
* A másik szerkezet az ismétlés (iteráció), amikor bizonyos esetben visszairányítjuk a vezérlést egy korábbi pontra, mint pl. amikor várakoztunk, amíg fel nem melegedett a gép.
* Az elágazás és ciklus különböző fajtáiról majd a későbbiekben lesz szó.

### Strukturált algoritmus
Strukturált az algoritmus, ha csak az alap 3 vezérlőszerkezetet (szekvencia, szelekció, iteráció) használod. Ezeket egymásba is ágyazhatod, de minden ilyen egységnek csak egy kimenete lehet. Vagyis nem húzhatod a nyilakat bárhova.

### Pszeudo kód, a kis hamis
Nézzünk egy másik algoritmusleíró módszert, a pszeudo kódot, ami nagyon hasonlít már a programkódra, de nyelvfüggetlen.
```
KÁVÉFŐZŐ BEKAPCSOLÁSA
IF NINCS ELÉG KÁVÉ THEN
  KÁVÉ HOZZÁADÁSA
ENDIF

IF NINCS ELÉG VÍZ THEN
  VÍZ HOZZÁADÁSA
ENDIF

WHILE NEM MELEGEDETT FEL
  10 MP VÁRAKOZÁS
ENDWHILE

CSÉSZE ODAHELYEZÉSE
GOMB MEGNYOMÁSA
```
Ebben a pszeudo kódban az angol kifejezéseket használtam, de természetesen megengedett a magyar nyelvű változat is.

Nagyon fontos az indentálás (beljebb kezdés), hogy lásd az algoritmus szerkezetét, ezáltal látod az alapstruktúrák egymásba ágyazását.

A pszeudo kódban könnyebb betartani, hogy strukturált algoritmust írj, a folyamatábrán könnyű a nyilakat úgy húzni, hogy elveszítsd a strukturáltságot. Napjainkban is van azért helye, például az UML-ben (Unified Modeling Language) is találunk a folyamatábrához hasonlót, csak ott aktivitás diagramnak nevezik. Az UML tulajdonképpen egy vizuális modellező nyelv, ami nagyon hasznosnak bizonyul a szoftverek készítésének folyamatában, leginkább a kezdeti analizáló és tervező fázisban. Az objektum orientált programozás tanulásakor használunk majd osztálydiagramot is, ami szintén az UML része.

Természetesen az itt bemutatottakon kívül még más algoritmusleíró eszközök is léteznek, pl. a struktogram, de ezeket most hagyjuk pihenni.

### Használandó vezérlési szerkezetek a programkódban
Mivel minden algoritmus felépíthető három vezérlési szerkezet használatával, a programkódban is csak ezeket kell most használnod:
* szekvencia,
* szelekció,
* iteráció.

Van még az ugrás, de arra most nincs szükség.