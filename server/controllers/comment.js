const Comments = require("../models").comment;
const Users = require("../models").users;
const Links = require("../models").links;

module.exports = {
   create (req, res) {
     Comments.create({
       content: req.body.content,
       userId: req.params.userId,
       linkId: req.params.linkId
     })
       .then(comment => res.status(201).send(comment))
       .catch(error => res.status(400).send(error));
   }
 };
