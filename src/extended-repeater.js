const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;

  let repeatingStr = [];
  let repeatingAddition = [];

  if (str === null) str = `${str}`;
  if (addition === null) addition = `${addition}`;
  if (typeof str !== "string") str.toString();
  if (typeof addition !== "string") addition.toString();

  repeatingStr.push(str);
  repeatingStr.length = repeatTimes;

  repeatingAddition.push(addition);
  repeatingAddition.length = additionRepeatTimes;
  repeatingAddition = repeatingAddition.fill(addition).join(additionSeparator);

  const fillStr = str + repeatingAddition;

  return repeatingStr.fill(fillStr).join(separator)
}

module.exports = {
  repeater
};
