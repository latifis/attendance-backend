'use strict';
module.exports = (sequelize, DataTypes) => {
  const Presence = sequelize.define('Presence', {
    date: DataTypes.DATE,
    arriveHour: DataTypes.STRING,
    goHomeHour: DataTypes.STRING,
    workingHour: DataTypes.STRING,
    id_user: DataTypes.INTEGER
  }, {});
  Presence.associate = function(models) {
    // associations can be defined here
  };
  return Presence;
};