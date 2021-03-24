const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    members = members.filter((item) => typeof item === "string" && item !== "");
    return members.map((item) => {return item.trim()[0].toUpperCase()}).sort().join('');
} else {
    return false
}
};
