module.exports = (router, Users)=>{
  router.post('/id', async(req,res)=>{
    var result = await Users.findOne({phone_number : req.body.phone_number});
    if(!result) return res.status(404).send("fail!");
    let return_id = {id : result.id};
    await res.status(200).json(return_id);
  })
  .post('/passwd', async(req,res)=>{
    var result = await Users.findOne({id : req.body.id});
    if(!result) return res.status(404).send("fail!");
    let return_passwd = {passwd : result.passwd};
    await res.status(200).json(return_passwd);
  })
  return router;
}
