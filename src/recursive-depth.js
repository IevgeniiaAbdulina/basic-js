const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depthNum = 0;

    if (Array.isArray(arr)) {
      for (let key in arr) {
        depthNum = Math.max(depthNum, this.calculateDepth(arr[key]));
      }
      depthNum += 1;
    }

    return depthNum;
  }
}

module.exports = {
  DepthCalculator
};
