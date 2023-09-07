/*
  1. Salvare le info sugli sconti (20% e 40%), sull'età (minorenne e over65) e sul prezzo del biglietto (0.21 euro/km) 
  2. Salvare con comando prompt l'età del passeggero e i chilometri da percorre
  3. Calcola il costo del viaggio senza sconti
  3. Calcola il costo finale del viaggio considerando l'età
  3. Stampa il costo finale, indicando anche i centesimi
*/

// 1.
const underage = 18;
const discountUnderage = 0.20;
const elderage = 65;
const discountElderage = 0.40;
const euroKm = 0.21;


// 2.
const age = parseInt(prompt("Qual è la tua età?"));
const distance = parseInt(prompt("Quanti chilometri deve percorrere?"));


// 3. 
const initialCost = distance * euroKm;


// 4.
let finalCost;

if ( age >= elderage ) {
  finalCost = initialCost * discount20;
}
else if ( age < underage ) {
  finalCost = initialCost * discount40;
}
else {
  finalCost = initialCost;
}


// 4. 
const output = document.getElementById("message");

output.innerHTML = `
  Il costo totale del viaggio sarà di 
  <strong>${finalCost} &euro;</strong>
`;


