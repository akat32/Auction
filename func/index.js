function user_duplicate(message){
this.message=(message || "");
}
function ValidationError(message){
  this.message = (message || "");
}
user_duplicate.prototype = new Error();
ValidationError.prototype = new Error();
global.ValidationError = ValidationError;
global.user_duplicate = user_duplicate;
