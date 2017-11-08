var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/PaladinIsKing');
mongoose.Promise = global.Promise;

var UsersSchema = mongoose.Schema({
  id : {type : String, unique : true, required : true},
  passwd : {type : String, required : true},
  email : {type : String, unique : true, required : true},
  name : {type : String, unique : true, required : true},
  token : {type : String},
  phone_number : {type : String, unique : true, required : true}
});
Users = mongoose.model("Users",UsersSchema,"Users");

var ListSchema = mongoose.Schema({
  Seller : {type : String},
  Sell_token : {type : String},
  Sell_Phone : {type : String},
  Buyer : {type : String},
  Buy_max {type : Number},
  Buy_token : {type : String},
  Buy_number : {type : String}
});
List = mongoose.model("List", ListSchemat, "List");



exports.List = List;
exports.Users = Users;
exports.db = db;
