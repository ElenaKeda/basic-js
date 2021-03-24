const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth= 1, arrDepth = []) {

    arrDepth.push(depth);
    for (let elem of arr) {
        if (Array.isArray(elem)) {
            this.calculateDepth(elem, depth+1, arrDepth);
        }
    }
    return Math.max(...arrDepth)
    
}
};