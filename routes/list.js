module.exports = (router, Users, List, rndstring)=>{
  router.post('/add', async (req,res)=>{
    var new_item = new List(req.body);
    new_item.token = rndstring.generate(33);
    new_item.seller_name = req.session.name;
    new_item.seller_phone = req.session.phone_number;
    new_item.seller_token = req.session.token;
    new_item.count = 0;
    new_item.now_price = req.body.start_price;
    var result = new_item.save();
    if(result) return res.status(200).send("Add item!");
    else return res.status(412).send("Fail ADD item");
  });
  return router;
}