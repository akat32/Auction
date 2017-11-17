module.exports = (router, Users, List,passport)=>{
  router.post('/', async (req,res)=>{
    var par = req.session.passport.user.final_visit;
    var uname = req.session.passport.user.name;
    var utoken = req.session.passport.user.token;
    var uphone = req.session.passport.user.phone_number;
    console.log(par);
    var item = await List.findOne({item_token : par});
    if(!item) return res.status(404).send('Item Not Found');
    var num = (parseInt(item.now_price) + 0)+ (parseInt(req.body.money) + 0);
    console.log(num + " " + uname + " " + utoken + " " + uphone);
    List.update({item_token : par}, {$set:{"now_price" : num}}, function(err,result){
      if(err);
    });
    List.update({item_token : par}, {$set:{"buyer_name" : uname}}, function(err,result){
      if(err);
    });
    List.update({item_token : par}, {$set:{"buyer_phone" : uphone}}, function(err,result){
      if(err);
    });
    List.update({item_token : par}, {$set:{"buyer_token" : utoken}}, function(err,result){
      if(err) res.status(500).send('fail');
      else res.status(200).send('succes');
    });
  });
  return router;
}
