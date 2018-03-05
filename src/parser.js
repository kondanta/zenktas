const request = require("request");
const cheerio = require("cheerio");

module.exports = class Parser {
  constructor() {
    this.url =
        "https://www.hepsiburada.com/apple-iphone-6s-32-gb-apple-turkiye-garantili-p-HBV0000017G26"
  }

  /*
   * Returns to the data from website
   * String url Url of the page
   * Function callback Callback function
   */
  get(url, callback) {
    // Assuming net connection is fine
    request(url,
            function(error, response, body) { callback(null, error, body); });
  }

  printer(data) { console.log(data[0]["Marka"]); }

  /*
   * Parsing the website and create key value pairs for txt/json creation.
   * Function callback Callback function that provides key/value pairs.
   */
  // TODO: DB integration
  parser(callback) {
    let data = [];
    // productTechSpecContainer
    this.get(this.url, (error, response, body) => {
      // guard
      if (error) {
        consoe.log("error");
        return -1;
      }
      const $ = cheerio.load(body);
      $(body)
          .find("#productTechSpecContainer table.data-list.tech-spec tbody tr")
          .each(function(index, elem) {
            let key = ($(elem).find("th").text());
            let value = ($(elem).find("td").text());
            if (value == "undefined") {
              value = "N/A";
            }
            data.push({[key] : value})
          });
      setTimeout(function() { callback(null, data); }, 2000);
    });
  }

  txtGenerator() {
    this.parser((error, data) => { console.log(data); });
  }

  // Will be removed after db mechanism implemented.
  simpleSearch(arg) {
    this.parser((error, data) => {
      let searchedKey = "";
      for (var i = 0, len = data.length; i < len; i++) {
        if (!data[i][arg]) {
          searchedKey = "N/A";
        }
        if (data[i][arg]) {
          searchedKey = data[i][arg];
        }
      }
      console.log(searchedKey);
    });
  }
};
