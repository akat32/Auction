module.exports = (router, List, Users)=>{
  router.get('/:token', async(req,res)=>{
    var par = req.params.token
    var item = await List.findOne({item_token : par});
    if(!item) return res.status(404).send('Item Not found!');
    Users.update({id : req.session.passport.user.name}, {$set:{"final_visit" : item.item_token}},  function(err, result){
      if(err);
    });
    await res.status(200).json(item);
  });
  return router;
}
