/*
  1. Salvare le info sugli sconti (20% e 40%), sull'età (minorenne e over65) e sul prezzo del biglietto (0.21 euro/km) 
  2. Salvare con comando prompt l'età del passeggero e i chilometri da percorre
  3. Calcola il costo del viaggio senza sconti
  4. Calcola il costo finale del viaggio considerando l'età
  5. Stampa il costo finale, indicando anche i centesimi
*/


// 1.
const discountElderage = 0.40;
const discountUnderage = 0.20;
const euroKm = 0.21;


// 2.
const distance = parseInt(prompt("Quanti chilometri deve percorrere?"));
const age = parseInt(prompt("Qual è la tua età?"));


// 3. 
const initialCost = distance * euroKm;


// 3.5
let insertOk = true;
let message;

if ( isNaN(distance) || isNaN(age)) {
  insertOk = false;
  message = 'Errore! Dati non corretti';
} 

document.querySelector

// 4.
let finalCost;

if ( insertOk ) {

  message = 'ok';

  if ( age >= 65 ) {
    finalCost = parseFloat(initialCost * (initialCost - discountElderage)).toFixed(2);
  }
  else if ( age < 18 ) {
    finalCost = parseFloat(initialCost * (initialCost - discountUnderage)).toFixed(2);
  }
  else {
    finalCost = parseFloat(initialCost).toFixed(2);
  }

}

// 4.
console.log(message)
document.getElementById('message').innerHTML = message;

// message = `
// Il costo totale del viaggio sarà di 
// <strong>${finalCost} &euro;</strong>
// `;
