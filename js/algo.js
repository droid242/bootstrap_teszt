/*
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
*/

// Összegzés
let numericArray = [1, 3, 2, 5, 4, 7, 6, 9];

let sum = 0;
for(let i = 0; i < numericArray.length; i++) {
    sum += numericArray[i];
}

console.log("Sum: ", sum);

// Számlálás
let db = 0;
for(let i = 0; i < numericArray.length; i++) {
    if(numericArray[i] % 2 == 0) {
        db++;
    }
}

console.log("Even numbers: ", db);

// Szélsőérték keresés (legnagyobb)
let biggest = numericArray[0];
for(let i = 0; i < numericArray.length; i++) {
    if(numericArray[i] > biggest) {
        biggest = numericArray[i];
    }
}

console.log("The biggest element: ", biggest);

// Szélsőérték keresés (legkisebb)
let smaller = numericArray[3];
for(let i = 0; i < numericArray.length; i++) {
    if(numericArray[i] < smaller) {
        smaller = numericArray[i];
    }
}

console.log("The smallest element: ", smaller);

// Eldöntés tétele
let contain = false;
for(let i = 0; i < numericArray.length && !contain; i++) {
    if(numericArray[i] == 5) {
        contain = true;
    }
}

console.log("This array contain 5: ", contain);