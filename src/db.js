const mongoose = require("mongoose");
const productModel = require("./models/product_model");
const categoryModel = require("./models/catalog_model");

let Schema = mongoose.Schema;
mongoose.connect("mongodb://kon:111111@ds261088.mlab.com:61088/zenk");

module.exports = class Db {
  constructor() { this.name = ""; }
  getCatagory() {
    var modal = categoryModel;
    modal.find({}, function(err, data) { console.log(data); });
  }

  /*
   * Returns to the category ID
   * @param {Function} callback callback.
   */
  getCategoryId(callback) {
    var model = categoryModel;
    model.find({}, function(err, data) { callback(null, data[0]["_id"]); })
  }
  getPoduct() {
    var product = productModel;
    product.find({}, function(err, data) { console.log(data); });
  }

  insertIntoProduct(data) {
    // getting connection
    var db = mongoose.connection;
    var Product = productModel;
    var newProduct = new Product({
      productName : "Test",
      categoryID : 1,
      attributes : data,
      updateDate : new Date().getDate()
    });
    console.log(newProduct);
  }

  close() {
    setTimeout(function() { mongoose.connection.close(); }, 2000);
  }
};
