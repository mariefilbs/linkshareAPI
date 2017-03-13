'use strict';
module.exports = function(sequelize, DataTypes) {
  var comment = sequelize.define('Comment', {
    linkId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return comment;
};
