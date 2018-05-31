module.exports = function(app){

  function clientErrorHandler (err, req, res, next) {
    if (req.xhr) {
      res.status(500).send({ error: 'Something failed!' })
    } else {
      next(err)
    }
  }

  function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    
    res.status(500)
    res.locals.errors = res.locals.errors || []
    res.locals.errors.push(err.message);
    if (req.xhr || req.headers.accept.indexOf('json') > -1) res.send({error: err.message})
    else res.render('error');
    console.log(err.stack)
  }

  app.use(clientErrorHandler)
  app.use(errorHandler)  
}