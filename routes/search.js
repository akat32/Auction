module.exports = (router, Users)=>{
 router.post('/id', async(req,res)=>{
   let find_user = new Users(req.body);
   let result = await find_user.findOne();
   if(!result){console.log('User Not Found!'); return res.status(404).send('404 Not Found!');}
   else await res.status(200).json(result.id);
 })
 .post('/passwd', async(req,res)=>{
   let find_user = new Users(req.body);
   let result = await find_user.findone();
   if(!result){console.log('User Not Found!'); return res.status(404).send('404 Not Found!');}
   else{res.redirect('/changepwd');}
  });
  return router;
}
