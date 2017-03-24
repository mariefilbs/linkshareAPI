// Require your controllers here
const UsersController = require("../controllers/users");
const LinkController = require("../controllers/link");
const CommentController = require("../controllers/comment");



module.exports = (app) => {
  //Users
  app.post('/Users', UsersController.register);
  app.get('/Users/:id', UsersController.listusers)
  app.post('/login', UsersController.login);


  //Links
  app.post('/:userId/addLink', LinkController.create);
  app.get('/links', LinkController.listLinks)

  //Comments
  app.post('/:userId/:postId/addComment', CommentController.create);
  app.get('/comment/:id', CommentController.getOneComment);
  app.get('/comments', CommentController.getComments);
};
