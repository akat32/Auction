module.exports = (Users, Words)=>{
  Users.post("save", (err, res, next)=>{
    if(err.name==='MongoError' &&  err.code === 11000) next(new user_duplicate("Fuck you!"));
  })
};
