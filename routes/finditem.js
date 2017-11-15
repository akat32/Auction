module.exports = (router, List)=>{
  router.post('/name', async (req,res)=>{
    const rqurey = new RegExp(req.body.item_name); 
    var result = await List.find({item_name : rqurey});
    if(!result) return res.status(404).send("Not Found Item!");
    else await res.status(200).json(result);
  })
  .post('/category', async(req,res)=>{
    var result = await List.find(req.body);
    if(!result) return res.status(404).send("Not Found Item!");
    else await res.status(200).json(result);
  });
  return router;
}