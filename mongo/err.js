module.exports = (Users, List)=>{
  Users.post('save', (error, res, next)=>{
    if (error.name === 'MongoError' && error.code === 11000) next(new user_duplicate("duplicate error"));
    else if(error.name === "ValidationError") next(new ValidationError(error.message));
    else next(error);
  });
  Users.post('update', (error, res, next)=>{
   if (error.name === 'MongoError' && error.code === 11000) next(new user_duplicate("duplicate error"));
   else if(error.name === "ValidationError") next(new ValidationError(error.message));
   else next(error);
 });
};
