module.exports = (router, Users,rndstring) => {
  router.post('/signup', async (req,res)=>{
    var user = new Users(req.body);
    user.token = rndstring.generate(17);
    var result = await user.save();
    let return_user = {id : user.id, token : user.token};
    if(result) return res.status(200).json(return_user);
    else return res.status(412).send("Signup Fail");
  })
  .post('/signin', async (req,res)=>{
    var user = await Users.findOne(req.body);
    if(!user) return res.status(404).send("User Not Found!");
    let return_user = {id : user.id, token : user.token};
    await res.status(200).json(return_user);
  });
  return router;
};
