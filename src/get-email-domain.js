const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let emailChunks = email.split("@");
  let lastIndex = emailChunks.length - 1;
  return emailChunks[lastIndex];
}

module.exports = {
  getEmailDomain
};
