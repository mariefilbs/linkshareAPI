const Comments = require("../models").Comment;
const Users = require("../models").Users;
const Links = require("../models").Links;

module.exports = {
   create (req, res) {
     Comments.create({
       content: req.body.content,
       userId: req.params.userId,
       linkId: req.params.linkId
     })
       .then(comment => res.status(201).send(comment))
       .catch(error => res.status(400).send(error));
   },
   getLinkComments (req, res) {
      Comments.findById(req.params.linkId)
        .then(comment => res.status(201).send(comment))
        .catch(error => res.status(400).send(error));
    },

    getComments (req, res) {
      Comments.findAll()
        .then(comment => res.status(201).send(comment))
        .catch(error => res.status(400).send(error));
    }
 };
