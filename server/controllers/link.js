const User = require("../models").users;
const Links = require("../models").links;


module.exports = {
   create (req, res) {
     Links.create({
       linkURL: req.body.linkURL,
       linkTitle: req.body.linkTitle,
       userId: req.params.userId
     })
       .then(link => res.status(201).send(link))
       .catch(error => res.status(400).send(error));
   }
 };
