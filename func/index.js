var multer = require('multer');
var Q = require('q');

var upload = (req, res, path) => {
  var deferred = Q.defer();
  var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path);
     },
     filename: (req, file, cb) => {
       var fileArr = file.originalname.split('.');
       file.uploadedFile = {
         name: fileArr[0],
         ext: fileArr[1]
        };
        cb(null, file.uploadedFile.name + '.' + file.uploadedFile.ext);
     }
   });
  var upload = multer({ storage: storage }).single('file');

  upload(req, res, (err) => {
    if(err) deferred.reject();
    else if(req.file === undefined){

    }else deferred.resolve(req.file.uploadedFile);

  });

  return deferred.promise;
};
function user_duplicate(message){
  this.message=(message || "");
}
user_duplicate.prototype = new Error();

global.upload = upload;
global.user_duplicate = user_duplicate;
