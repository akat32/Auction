var multer = require('multer');
var Q = require('q');
var rrand;
var upload = function (req, res) {
  var deferred = Q.defer();
  var storage = multer.diskStorage({
    // 서버에 저장할 폴더
    destination: function (req, file, cb) {
      cb(null, imagePath);
    },

    // 서버에 저장할 파일 명
    filename: function (req, file, cb) {
      file.uploadedFile = {
        name: rrand,
        ext: file.mimetype.split('/')[1]
      };
      cb(null, file.uploadedFile.name + '.' + file.uploadedFile.ext);
    }
  });
  var upload = multer({ storage: storage }).single('file');
  upload(req, res, function (err) {
    if (err) deferred.reject();
    else deferred.resolve(req.file.uploadedFile);
  });
  return deferred.promise;
};
module.exports = (router, Users, List, rndstring)=>{
  router.post('/add', async (req,res)=>{
    console.log('1');
    var rand = rndstring.generate(10);
    rrand = rand;
    upload(req,res,'upload/list', List).then(function (file){
      console.log(rand);
      var new_list = new List({
        item_name : req.body.item_name,
        item_token : rand,
      //  seller_name : req.session.name,
      //  seller_phone : req.session.phone_number,
      //  seller_token : req.session.token,
        start_price : req.body.start_price,
        count :  0,
        now_price : req.body.start_price,
        category : req.body.category,
        item_introduce : req.body.item_introduce,
        item_image : "http://iwin247.info:3469/"+rand
      });
      console.log('2');
      var result = new_list.save();
      console.log('2.1');
      if(result) return res.status(200).send("succes");
    },(err)=>{
      console.log('2.5');
      return res.status(500).send("fail");
    });
    console.log('4');
  });
  return router;
}
