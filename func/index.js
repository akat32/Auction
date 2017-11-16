
function user_duplicate(message){
  this.message=(message || "");
}
function isAuth (req, res, next) {
  if (req.isAuthenticated())  return next();
  res.redirect('/auth/signin');
}

global.isAuth = isAuth;
user_duplicate.prototype = new Error();


global.user_duplicate = user_duplicate;
