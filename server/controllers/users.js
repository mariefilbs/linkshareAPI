const Users = require("../models").Users;
const bcrypt = require("bcryptjs");
const jwt = require("jwt-simple");
const appSecrets = require("../config/secrets");

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
       .then(user => res.status(201).send(user))
       .catch(error => res.status(400).send(error));
   },

   listusers (req, res) {
     Users.findAll({
      where: {
         id: req.params.id
       }
     })
       .then(users => res.status(200).send(users))
       .catch(error => res.status(400).send(error));
    },

   login (req, res) {
     Users.findOne({
       where: {
         email: req.body.email
       }
     })
       .then(user => {
         if (!user) {
           return res.status(401).send({ message: "No such email/wrong password." });
         }
         var input = bcrypt.hashSync(req.body.password, user.salt);
         if (input === user.password) {
           var token = jwt.encode({ id: user.id, name: user.name }, appSecrets.jwtSecret);
           return res.status(200).send(token);
         } else {
           return res.status(401).send({ message: "No such email/wrong password." });
         }
       })
       .catch(error => res.status(400).send(error));
    }
 };
