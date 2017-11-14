var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/paladiniskingab');
mongoose.Promise = global.Promise;

var UsersSchema = mongoose.Schema({
  id : {type : String, unique: true, required : true},
  passwd : {type : String, required : true},
  email : {type : String, unique : true, required : true},
  name : {type : String, unique : true, required : true},
  phone_number : {type : String, unique : true, required : true},
  address : {type : String, required : true},
  token : {type : String}
});
var ListSchema = mongoose.Schema({
  item_name : {type : String, required : true},
  item_token : {type : String},
  seller_name : {type : String},
  seller_phone : {type : String},
  seller_token : {type : String},
  start_price : {type : Number, required : true},
  now_price : {type : Number},
  count : {type : Number},
  item_introduce : {type : String},
  buyer_name : {type : String},
  buyer_token : {type : String},
  buyer_phone : {type : String},
  category : {type : String}
});
require('./err')(UsersSchema);
Users = mongoose.model("users", UsersSchema);
List = mongoose.model("list", ListSchema);

exports.List = List;
exports.Users = Users;
exports.db = db;
