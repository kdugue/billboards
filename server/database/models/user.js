const Sequelize = require("sequelize");
const db = require("../database");

const User = db.DeferredPermissionRequest("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = User;
