'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    voteType: DataTypes.BOOLEAN
  }, {});
  Vote.associate = function(models) {
    // associations can be defined here
  };
  return Vote;
};