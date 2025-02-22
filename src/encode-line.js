const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return '';

  let encodedStr = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      if (count > 1) {
        encodedStr += count;
        count = 0;
      }
      encodedStr += str[i];
      count = 0;
    }
    count += 1;
  }

  return encodedStr;
}

module.exports = {
  encodeLine
};
