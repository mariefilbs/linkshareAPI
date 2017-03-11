// Require your controllers here
const Users = require("../models").Users;
const UsersController = require("../controllers/users");


module.exports = (app) => {
  app.post('/Users', UsersController.register);
};
