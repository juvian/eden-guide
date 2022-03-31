module.exports = function(app) {
  app.get("/utils/commands", function(request, response, next) {
    return response.render("commands");
  });

  app.get("/utils/script-commands", function(req, res) {
    return res.render("script-commands");
  });

  app.get("/utils/script-list-file", function(req, res) {
    return res.render("script-list-file");
  });

  app.get("/utils/translate", function(req, res) {
    return res.render("translate");
  });
};
