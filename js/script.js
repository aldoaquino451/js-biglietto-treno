/*
  1. Salvare le info sugli sconti (20% e 40%), sull'età (minorenne e over65) e sul prezzo del biglietto (0.21 euro/km) 
  2. Salvare con comando prompt l'età del passeggero e i chilometri da parcorre
  3. Stampa il costo finale del viaggio, indicando anche i centesimi
*/

// 1.
const discount20 = 20/100;
const discount40 = 40/100;
const euroKm = 0.21;
const underage = 18;
const elder = 65;


// 2.
const age = parseInt(prompt("Qual è la tua età?"));
const distance = parseInt(prompt("Quanti chilometri deve percorrere?")) 

