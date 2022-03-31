'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    faveBread: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    // Task 10b
    User.hasMany(models.Post, { foreignKey: 'userId', as: 'postusers'})
    User.belongsToMany(models.Post, {
      through: 'Vote',
      foreignKey: 'userId',
      otherKey: 'postId',
      as: 'postvoteusers'
    })
  };
  return User;
};