const fs = require("fs");

module.exports = function(data) {
  let test = JSON.stringify(data);
  fs.writeFileSync("output.txt", test);
};
