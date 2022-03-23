'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    content: DataTypes.TEXT,
    title: DataTypes.STRING,
    link: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    // Task 10b
    Post.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Post;
};