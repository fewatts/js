/**
 * Squares the digits of a given number and concatenates them to form a new number.
 *
 * @param {number} number - The input number whose digits will be squared and concatenated.
 * @returns {number} The new number formed by concatenating the squared digits.
 */
const squareDigits = (number) => {
   let numberString = number.toString();
   let answer = "";
   for (let i = 0; i < numberString.length; i++) {
      answer += Math.pow(parseInt(numberString[i]), 2).toString();
   }
   return parseInt(answer);
};

/**
 * Returns the complementary DNA strand of the given DNA sequence.
 *
 * @param {string} dna - The input DNA strand to find the complementary strand for.
 * @returns {string} - The complementary DNA strand.
 */
const DNAStrand = (dna) => {
   return dna.replace(/./g, function (c) {
      return DNAStrand.pairs[c];
   });
};

// Object that contains the complementary pairs for each character
DNAStrand.pairs = {
   A: "T",
   T: "A",
   C: "G",
   G: "C",
};
