const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	let res = [];
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != '--discard-next' && arr[i] != '--discard-prev' && arr[i] != '--double-next' && arr[i] != '--double-prev') {
                res.push(arr[i]);
            } else if (arr[i] === '--discard-next') {
                i++;
            } else if (arr[i] === '--discard-prev' && i != 0 && arr[i - 2] != '--discard-next') {
                res.pop();
            } else if (arr[i] === '--double-next'&& i != arr.length - 1) {
                res.push(arr[i + 1]);
            } else if (arr[i] === '--double-prev' && i != 0 && arr[i - 2] != '--discard-next') {
                res.push(arr[i - 1]);
            } else if (arr[i] === '--double-prev' && arr[i - 2] == '--discard-next') {
                continue;
            }		
        }
        return res
    } else {
        throw new Error("Error")
    }
};