const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const findNum = (n, minNum) => {
    let numsArr = n.toString().split("").map(Number);

    if (minNum) deleteNum(numsArr, minNum);

    let newMin = Math.min(...numsArr)

    numsArr = n.toString().split("").map(Number);
    deleteNum(numsArr, newMin);

    let modifiedNum = parseInt(numsArr.join(""))

    return {
      minNum: newMin,
      modifiedNum,
    }
  }

  const deleteNum = (arr, num) => {
    let index = arr.findIndex((elem) => elem === num);
    arr.splice(index, 1);
    return arr;
  }

  const firstTry = findNum(n);
  const secondTry = findNum(n, firstTry.minNum);

  return Math.max(firstTry.modifiedNum, secondTry.modifiedNum)
}

module.exports = {
  deleteDigit
};
