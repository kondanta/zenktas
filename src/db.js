const mongoose = require("mongoose");
const productModel = require("./models/product_model");
const categoryModel = require("./models/catalog_model");

let Schema = mongoose.Schema;
mongoose.connect("mongodb://kon:111111@ds261088.mlab.com:61088/zenk");

module.exports = class Db {
  constructor() { this.name = ""; }
  /*
   * Prints information about category
   */
  getCategory() {
    var modal = categoryModel;
    modal.find({}, function(err, data) { console.log(data); });
  }

  /*
   * Returns to the category ID
   * @param {Function} callback callback.
   */
  // TODO must take a model for deciding which catalog we want to use.
  getCategoryId(callback) {
    var model = categoryModel;
    model.find({}, function(err, data) { callback(null, data[0]["_id"]); })
  }

  /*
   * Prints information about product using categoryID
   */
  getPoduct() {
    var product = productModel;
    this.getCategoryId((err, data) => {
      product.find({categoryID : data},
                   function(err, data) { console.log(data); });
    });
  }

  /*
   * Inserts parsed information into the database.
   * @param {String} name Name of the product
   * @param {Array} data Attributes that product has.
   *
   */
  insertIntoProduct(name, data) {
    // getting connection
    var db = mongoose.connection;
    var Product = productModel;
    this.getCategoryId((error, id) => {
      var newProduct = new Product({
        productName : name,
        categoryID : id,
        attributes : data,
        updateDate : new Date().toISOString()
      });
      newProduct.save(function(err, data) {
        if (err)
          throw err;
        console.log("Saved");
      });
    });
  }

  /*
   * Closes the db connection after 7 secs.
   */
  close() {
    setTimeout(function() {
      console.log("Database connection is shut down.");
      mongoose.connection.close();
    }, 7000);
  }
};
