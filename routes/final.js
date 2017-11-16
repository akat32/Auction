module.exports = (router, Users, passport, List)=>{
  router.post('/', async (req,res)=>{
    var findd = req.session.passport.user.id
    console.log(findd);
    var final = await Users.findOne({id : findd});
    if(!final) return res.status(404).send("Users Not Found");
    var return_final = {token : final.final_visit};
    await res.status(200).json(return_final);
  });
  return router;
}
