'use strict';
module.exports = function(sequelize, DataTypes) {
  var Links = sequelize.define('Links', {
    linkURL: DataTypes.STRING,
    linkTitle: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Links;
};