module.exports = (router, List, Users)=>{
  router.get('/:token', async(req,res)=>{
    var item = await List.findOne(req.params.token);
    if(!item) return res.status(404).send('Item Not found!');
    await res.status(200).json(item);
  })
  return router;
}
