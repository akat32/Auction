module.exports = (Users)=>{
  Users.post("save", (err, res, next)=>{
    if(err.name==='MongoError' &&  err.code === 11000) next(new user_duplicate("duplicate error"));
  })
};
