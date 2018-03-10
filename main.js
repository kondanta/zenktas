const Parser = require("./src/parser");
const DB = require("./src/db");

function run() {
  // how to use parser.
  /* parser = new Parser(
   *     "https://www.hepsiburada.com/apple-iphone-8-plus-64-gb-apple-turkiye-garantili-p-HBV000007PV9M")
   * parser.parser((error, data) => {}); */
  db = new DB();
  db.getPoduct();
  db.close();
}

run()
