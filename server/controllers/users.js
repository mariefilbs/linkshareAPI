const Users = require("../models").Users;
const bcrypt = require("bcryptjs");
const jwt = require("jwt-simple");
const appSecrets = require("../config/secrets");
const Comment = require("../models").Comment;

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
       .then(user => res.status(200).send(user))
       .catch(error => res.status(400).send(error));
    },

   login (req, res) {
     Users.findOne({
      where: {
       email: req.body.email
     }
    })
       .then(user => {
         console.log(user);
         if (!user) {
           return res.status(401).send({ message: "No such email/wrong password." });
         }
         var input = bcrypt.hashSync(req.body.password, user.salt);
         console.log(user.salt, 'this is the salt')
         console.log("input is: ", input, "user pass is: ", req.body.password);
         console.log('user.password is:', req.body.password)
         if (input === user.password) {
           console.log(input, 'from inside input')
           var token = jwt.encode({ id: user.id, email: user.email  }, appSecrets.jwtSecret);
           //return token as a JSON object and not as a sting
           return res.status(200).send({ token: token });
         } else {
           return res.status(401).send({ message: "No such email/wrong password." });
         }
       })
       .catch(error => res.status(400).send(error));
    }
 };
