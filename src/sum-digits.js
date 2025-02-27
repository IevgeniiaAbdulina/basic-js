const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sumDigits = 0;

  sumDigits = n
      .toString()
      .split("")
      .map(Number)
      .reduce((sum, digit) => sum + digit, 0);

  if (sumDigits > 9) {
    return getSumOfDigits(sumDigits)
  }
  return sumDigits;
}

module.exports = {
  getSumOfDigits
};
