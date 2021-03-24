const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let { 
    repeatTimes = 1, 
    separator = '+', 
    addition = '', 
    additionRepeatTimes = 1, 
    additionSeparator = '|' 
} = options;

if (repeatTimes === undefined) {
    return ''
}

let strAdd = [];
let arrAdd = [];

for (let i = 0; i < repeatTimes; i++) {
  strAdd.push(str);
}

for (let i = 0; i < additionRepeatTimes; i++) {
  arrAdd.push(`${addition}`);
}

let add = arrAdd.join(additionSeparator);

strAdd = strAdd.map((e) => e + add)
return strAdd.join(separator);
};
  