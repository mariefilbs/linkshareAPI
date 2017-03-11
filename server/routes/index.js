// Require your controllers here
const Users = require("../models").Users;
const UsersController = require("../controllers/Users");
const LinkController = require("../controllers/link")
const Link = require("../models").Link;


module.exports = (app) => {
  //Users
  app.post('/Users', UsersController.register);

  //Links
  app.post('/:userId/addLink', LinkController.create);
};
