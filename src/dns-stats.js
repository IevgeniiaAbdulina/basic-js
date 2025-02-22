const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length < 1) return {};
  let result = {};

  domains.forEach(domain => {
    let dnsChunks = domain.split(".").reverse();
    let str = "";
    dnsChunks.forEach((chunk) => {
      str += "." + chunk;
      result[str] = (result[str] || 0) + 1;
    })
  })

  return result;
}

module.exports = {
  getDNSStats
};
