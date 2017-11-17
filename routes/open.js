module.exports = (router, List, Users)=>{
  router.post('/', async(req,res)=>{
    var par = req.body.token;
    var item = await List.findOne({item_token : par});
    if(!item) return res.status(404).send('Item Not found!');
    Users.update({id : req.session.passport.user.id}, {$set:{"final_visit" : item.item_token}},  function(err, result){
      if(err);
    });
    res.redirect('/info');
  });
  return router;
}
