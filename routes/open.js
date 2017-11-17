module.exports = (router, List, Users)=>{
  router.get('/:token', async(req,res)=>{
    var par = req.params.token;
    console.log(par);
    var item = await List.findOne({item_token : par});
    console.log(item.item_token);
    if(!item) return res.status(404).send('Item Not found!');
    Users.update({id : req.session.passport.user.id}, {$set:{"final_visit" : item.item_token}},  function(err, result){
      if(err);
    });
    await res.status(200).json(item);
  });
  return router;
}
