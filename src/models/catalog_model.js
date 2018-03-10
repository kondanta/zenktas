var mongoose = require("mongoose");
var Schema = mongoose.Schema

var sch = new Schema({
  categoryID : {type : Number},
  categorName : {type : String},
  createDate : {type : Date, default : Date.now}
},
                     {collection : "category"});

module.exports = mongoose.model("Category", sch);
