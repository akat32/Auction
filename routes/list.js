module.exports = (router, Users, List, rndstring)=>{
  router.post('/add', async (req,res)=>{
    var new_list = new List(req.body);
    new_list.item_token = rndstring.generate(12);
    //new_list.seller_name = req.session.name;
    //new_list.seller_token =  req.session.token;
    //new_list.seller_phone = req.session.phone_number;
    new_list.count = 0;
    new_list.now_price = req.body.start_price;
    new_list.item_image = "http://iwin247.info:3469/"+req.body.item_image;
    var result = await new_list.save();
    if(result) return res.status(200).json(new_list);
    else return res.status(412).send("fail add list");
  });
  return router;
}
