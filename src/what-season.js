const {NotImplementedError} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (date === new Date()) throw new Error('Invalid date!');
  try {
    date.toISOString();
  } catch {
    throw new Error('Invalid date!');
  }

  const monthIndex = date.getMonth();
  let yearTime = 'spring';

  if (2 <= monthIndex && monthIndex <= 4) {
    yearTime = "spring";
  } else if (5 <= monthIndex && monthIndex <= 7) {
    yearTime = "summer";
  } else if (8 <= monthIndex && monthIndex <= 10) {
    yearTime = "autumn" || "fall";
  } else {
    yearTime = "winter";
  }

  return yearTime;
}

module.exports = {
  getSeason
};
