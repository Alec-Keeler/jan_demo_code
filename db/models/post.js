'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    content: DataTypes.TEXT,
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    link: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    subbreadditId: DataTypes.INTEGER,
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    // Task 10b
    Post.belongsTo(models.User, {foreignKey: 'userId', as: 'postusers'})
    Post.belongsTo(models.Subbreaddit, { foreignKey: 'subbreadditId'})
    Post.belongsToMany(models.User, {
      through: 'Vote',
      foreignKey: 'postId',
      otherKey: 'userId',
      as: 'postvoteusers'
    })
  };
  return Post;
};