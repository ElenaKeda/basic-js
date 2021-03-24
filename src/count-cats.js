const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let cat = "^^";
  let number = 0;
  backyard = backyard.flat();
  for (let i = 0; i < backyard.length; i++) {
      if (backyard[i] == cat) {
          number++;
      }
  }
  return number;
};
