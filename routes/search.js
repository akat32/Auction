module.exports = (router, Users)=>{
 router.post('/id', async(req,res)=>{
   let find_user = new Users(req.body);
   let result = await find_one.findOne();
   if()
 })
 .post('/passwd', async(req,res)=>{

 });
  return router;
}
