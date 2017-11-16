var multer = require('multer');
var Q = require('q');
var upload = (req, res, path) => {
  var deferred = Q.defer();
  var storage = multer.diskStorage({
      // 서버에 저장할 폴더
    destination: (req, file, cb) => {
      cb(null, path);
     },
     // 서버에 저장할 파일 명
     filename: (req, file, cb) => {
       var fileArr = file.originalname.split('.');
       file.uploadedFile = {
         name: fileArr[0], //file name
         ext: fileArr[1] //file type
        };
        cb(null, file.uploadedFile.name + '.' + file.uploadedFile.ext);
     }
   });
  var upload = multer({ storage: storage }).single('file');
  upload(req, res, (err) => {
    console.log('3');
    if(err) deferred.reject();
    else if(req.file === undefined){
     // if user not sened file u must controll here
    }else deferred.resolve(req.file.uploadedFile);
  });
  return deferred.promise;
};
module.exports = (router, Users, List, rndstring)=>{
  router.post('/add', async (req,res)=>{
    console.log('1');
    upload(req,res,'upload/list', List).then(function (file){
      let rand = rndstring.generate(33);
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
