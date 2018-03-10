var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var sch = new Schema({
  productName : {type : String},
  categoryID : {type : Schema.ObjectId, ref : "category"},
  attributes : {type : String},
  createDate : {type : Date, default : Date.now},
  updateDate : {type : Date}
},
                     {collection : "product"});

module.exports = mongoose.model("Product", sch);
