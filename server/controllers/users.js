const Users = require("../models").Users;

module.exports = {
   register (req, res) {
     Users.create({
       name: req.body.name,
       email: req.body.email,
      password: req.body.password,
      salt: req.body.salt
     })
       .then(user => res.status(201).send(user))
       .catch(error => res.status(400).send(error));
   }
 };
