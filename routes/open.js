module.exports = (router, List, Users)=>{
  router.post('/item', async(req,res)=>{
    var find_token = new List(req.body.item_token);
    var result = await find_token.findOne();
    if(!result) return res.status(404).send('Item Not found!');
    await res.status(200).json(find_token);
  })
  return router;
}
