module.exports = (router, Users)=>{
  router.post('/', async(req,res)=>{
    Users.update({id:req.session.id}, {$set:{"passwd": req.body.passwd}}, function(err, result)=>{
      if(err);
    });
    res.redirect('/');
  });
  return router;
}
