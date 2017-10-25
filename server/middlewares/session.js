module.exports = function(req, res, next){
  const { session, meth } = req;
  if(!session.user){
    session.user = {
      messages: []
    };
  }
  next();
}