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

require('./err')(UsersSchema);
Users = mongoose.model("users", UsersSchema);

exports.Users = Users;
exports.db = db;
