// Global scope
var globalName = "Joe";

function something() {
    globalName = "Piri"; // ha nincs var, akkor a globális változót módosítja
    console.log(globalName);
}

something();

console.log(globalName);

// Blokkok
const NAME = "Sanyi";

// Ez egy blokk
{
    const NAME = "Pisti";
    console.log(NAME);
}

console.log(NAME);