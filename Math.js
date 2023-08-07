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
      let squaredDigit = Math.pow(parseInt(numberString[i]), 2).toString();
      answer += squaredDigit;
   }
   return parseInt(answer);
};
