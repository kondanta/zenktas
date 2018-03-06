const Parser = require("./src/parser");

function run() {
  const p = new Parser();
  p.simpleSearch("Stok kodu");
  p.parser((err, data) => { console.log(data); });
}
run()
