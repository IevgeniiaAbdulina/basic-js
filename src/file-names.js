const {NotImplementedError} = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let renamedNames = [];

  for (let i = 0; i < names.length; i += 1) {
    const name = names[i];
    let suffix = 0;

    let newName = findNewName(renamedNames, name);
    if (newName) {
      renamedNames.push(newName);
    }
  }
  return renamedNames;
}

function findNewName(arr, name) {
  if (!arr.includes(name)) {
    return name;
  } else {
    for (let index = 1; index < 10; index++) {
      let newName = name + `(${index})`;
      if (!arr.includes(newName)) {
        return newName;
      }
    }
  }
  return undefined;
}

module.exports = {
  renameFiles
};
