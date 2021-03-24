const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == "--discard-next") {
                arr[i+1] = '';
                arr[i] = ''
            }
            if (arr[i] == "--discard-prev") {
                arr[i-1] = '';
                arr[i] = ''
            }
            if (arr[i] == "--double-next") {
                arr[i] = arr[i+1]
            }
            if (arr[i] == "--double-prev") {
                arr[i] = arr[i-1]
            }
        } 
        return arr.filter((item) => typeof item === "number");
    } else {
        throw new Error("Error")
    }
};
