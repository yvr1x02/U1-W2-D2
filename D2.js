/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const num1 = 6;
const num2 = 2;

if (num1 > num2) {
  console.log("Questo è il numero più grande!:", num1);
} else if (num1 < num2) {
  console.log("Questo è il numero più grande!:", num2);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

if (num1 !== 5) {
  console.log("Not equal");
} else {
  console.log("Equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

if (num2 % 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8) {
  console.log(
    "uno dei numeri è uguale a 8 oppure il risultato della somma/sottrazione è uguale a 8"
  );
} else {
  console.log("nessun numero è uguale a 8 e il risultato della somma/sottrazione non è uguale a 8");
}

if (num1 === 8) {
  console.log("il primo numero è uguale a 8");
} else if (num2 === 8) {
  console.log("il secondo numero è uguale a 8");
} else if (num1 + num2 === 8) {
  console.log("il risultato della somma dei due numeri è uguale a 8");
} else if (num1 - num2 === 8) {
  console.log("il risultato della sottrazione è uguale a 8");
} else {
  console.log("nessun numero è uguale a 8 e il risultato della somma/sottrazione non è uguale a 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const totalShoppingCart = 60;
const spedizione = 10;
const isBlackFriday = true;
const blackFridayDiscount = 20;

if (totalShoppingCart >= 50) {
  console.log("Totale:", totalShoppingCart, "La spedizione è gratuita!");
} else if (totalShoppingCart < 50)
  console.log("Totale:", totalShoppingCart + spedizione, "Aggiunti 10 spedizione");

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/*if (isBlackFriday === true) {
  totalShoppingCart = totalShoppingCart - (totalShoppingCart * blackFridayDiscount) / 100;
}
if (totalShoppingCart >= 50) {
  console.log("Totale:", totalShoppingCart, "La spedizione è gratuita!");
} else if (totalShoppingCart < 50)
  console.log("Totale:", totalShoppingCart + spedizione, "Aggiunti 10 spedizione");

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const val1 = 5;
const val2 = 3;
const val3 = 9;
const valori = [val1, val2, val3];
valori.sort();
console.log(valori);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
console.log(typeof val1);
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

if (val1 % 2 === 0) {
  console.log("il numero è pari");
} else {
  console.log("il numero è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 11;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const numeri = [];
numeri.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(numeri);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numeri[9] = 100;
console.log(numeri);
