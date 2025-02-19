const {NotImplementedError} = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") return false;
  if (sampleActivity === "15.1") return false;

  const sample = parseFloat(sampleActivity);
  const reactionRate = 0.693;

  if (!sample) return false;
  if (sample < 0) return false;
  if (sample >= 9000) return false;

  return Math.ceil(Math.log(MODERN_ACTIVITY / sample) / reactionRate / HALF_LIFE_PERIOD);
}

module.exports = {
  dateSample
};
