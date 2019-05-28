module.exports = function (req, res, next) {
  if (req.query && req.query.lang) {
    res.locals.lang = req.query.lang;
  } else {
    res.locals.lang = req.session.lang || 'eng';
  }
  
  req.session.lang = res.locals.lang;
  res.locals.errors = res.locals.errors || []
  res.locals.loggedIn = !!req.session.token && !!req.session.username
  res.locals.isAdmin = !!req.session.isAdmin
  res.locals.isMod = !!req.session.isMod
  res.locals.session = req.session
  res.locals.url = req.url.replace("/", "")
  
  if (req.url.indexOf("roselinde") != -1) return res.redirect(req.url.replace("roselinde", "darkness"))
  console.log(req.url, req.session.lang, req.session.username || "")
  next();
}