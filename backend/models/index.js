const sequelize = require("../db");

let models = ["User", "Request", "Category", "Location", "Reply"];

models.forEach(function (model) {
  module.exports[model] = require(__dirname + "/" + model);
});

(function (m) {
  m.Request.belongsTo(m.User);
  m.Request.belongsTo(m.Category);
  m.Request.belongsTo(m.Location);
  m.Reply.belongsTo(m.User);
  m.Reply.belongsTo(m.Request);
  m.Request.hasMany(m.Reply);
  m.User.hasMany(m.Reply);
  m.User.hasMany(m.Request);
  m.Category.hasMany(m.Request);
  m.Location.hasMany(m.Request);
})(module.exports);
