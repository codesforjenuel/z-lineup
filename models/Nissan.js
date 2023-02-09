const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Nissan extends Model {}

Nissan.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      model: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      motor: {
        type: DataTypes.STRING(1000),
      },
      horsepower: {
        type: DataTypes.INTEGER,
      },
      torque: {
        type: DataTypes.INTEGER,
      },
      cylinders: {
        type: DataTypes.INTEGER,
      },
      mpgs: {
        type: DataTypes.STRING(1000),
      },
      msrp: {
        type: DataTypes.INTEGER,
      },
      info: {
        type: DataTypes.STRING(10000),
      },
      videoEmbed: {
        type: DataTypes.STRING(1000),
      },
      photoUrl: {
        type: DataTypes.STRING(1000),
      },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'nissan',
  }
);

module.exports = Nissan