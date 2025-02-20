const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (!value && value === undefined) {
      this.chain = this.chain.concat(`(  )`);
      return this;
    }
    if (!value && value === null) {
      this.chain = this.chain.concat(`( ${value} )`);
      return this;
    }
    this.chain = this.chain.concat(`( ${value.toString()} )`)
    return this;
  },
  removeLink(position) {
    if (typeof position !== "number") {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    if (position < 1) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    if (position > this.chain.length) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const finishedChain = this.chain;
    this.chain = [];
    return finishedChain.join("~~");
  }
};

module.exports = {
  chainMaker
};
