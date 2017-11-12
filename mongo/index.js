var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/PaladinIsKing');
mongoose.Promise = global.Promise;

var UsersSchema = mongoose.Schema({
  id : {type : String, unique : true, required : true},
  passwd : {type : String, required : true},
  email : {type : String, unique : true, required : true},
  name : {type : String, unique : true, required : true},
  token : {type : String},
  address : {type : String},
  isLogined: {type: Boolean, required:true, default: false},
  phone_number : {type : String, unique : true, required : true}
});
var ListSchema = mongoose.Schema({
  Seller : {type : String},
  Sell_token : {type : String},
  Sell_Phone : {type : String},
  Buyer : {type : String},
  Buy_min : {type : Number},
  Buy_max : {type : Number},
  Buy_token : {type : String},
  Buy_number : {type : String},
  count : {type : Number}
});
require('./err')(UsersSchema, ListSchema);
Users = mongoose.model("Users",UsersSchema,"Users");
List = mongoose.model("List", ListSchema, "List");
exports.List = List;
exports.Users = Users;
exports.db = db;
