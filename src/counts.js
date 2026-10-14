import { aircraft } from "./aircraft.js";

// Counts that appear in the copy ("alongside eleven other aircraft"), worked
// out from the hangar list so adding an aircraft can't leave a stale number.
// Data modules use them in template strings; components read them directly.

const words = {
  en: [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight",
    "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
    "sixteen", "seventeen", "eighteen", "nineteen", "twenty",
  ],
  es: [
    "cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho",
    "nueve", "diez", "once", "doce", "trece", "catorce", "quince",
    "dieciséis", "diecisiete", "dieciocho", "diecinueve", "veinte",
  ],
};

// A number written out in words, or in figures above twenty.
export function countWord(count, language = "en") {
  return words[language][count] ?? String(count);
}

const capitalise = (word) => word[0].toUpperCase() + word.slice(1);

export const hangarSize = aircraft.filter((entry) => entry.available).length;

const countsIn = (language) => ({
  // Every aircraft in the hangar: "twelve".
  all: countWord(hangarSize, language),
  All: capitalise(countWord(hangarSize, language)),
  // The others besides the one a page is about: "eleven".
  others: countWord(hangarSize - 1, language),
});

export const counts = {
  en: countsIn("en"),
  es: countsIn("es"),
};
