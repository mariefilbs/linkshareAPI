const Users = require("../models").Users;
const bcrypt = require("bcryptjs");

 module.exports = {
   register (req, res) {
     var salt = bcrypt.genSaltSync(10);
     var hashedPassword = bcrypt.hashSync(req.body.password, salt);
     Users.create({
       name: req.body.name,
       email: req.body.email,
       password: hashedPassword,
       salt: salt
     })
       .then(users => res.status(201).send(users))
       .catch(error => res.status(400).send(error));
   }
 };
