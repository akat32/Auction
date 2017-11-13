function user_duplicate(message){
  this.message=(message || "");
}
user_duplicate.prototype = new Error();

global.user_duplicate = user_duplicate;
