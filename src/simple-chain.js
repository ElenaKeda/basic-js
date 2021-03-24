const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        this.chain.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (typeof position !== 'number' || position < 1 || this.chain[position] === undefined) {
            this.chain = [];
            throw new Error('Error');
            }
            this.chain.splice(position - 1, 1);
            return this;
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        let line = this.chain.join('~~');
        this.chain = [];
        return line
    }
};

module.exports = chainMaker;
