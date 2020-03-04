const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (typeof value == 'undefined') this.chain.push('( )');
    else this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position != 'number' || (Math.ceil(position) - position > 0) || this.chain[position-1] == undefined) {
      this.chain = [];
      throw new Error('Error');
    } else {
      this.chain.splice((position - 1), 1)
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = this.chain.join('~~');
    this.chain = [];
    return str;
  }
};

module.exports = chainMaker;
