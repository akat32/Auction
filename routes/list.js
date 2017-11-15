var multer = require('multer');
var Q = require('q');

module.exports = (router, Users, List, rndstring)=>{
  router.post('/add', async (req,res)=>{
    upload(req,res,'upload/list', List).then((file)=>{
      var rnd = rndstring.generate(33);
      let new_list = new List({
        item_name : req.body.item_name,
        item_token : user.token = rnd,
      //  seller_name : req.session.name,
     //   seller_token : req.session.token,
        start_price : req.body.start_price,
        item_introduce : req.body.item_introduce,
        category : req.body.category,
        item_photo: "http://iwin247.info:3469/list/img/"+rnd
      });
      var result = new_list.save();
      if(result) return res.status(200).json(new_list);
      else return res.status(500).send("Fail save");
    });
  });
  return router;
}
