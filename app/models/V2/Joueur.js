const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../dataB/sequelize_client');

class Joueur extends Model{}

Joueur.init({
  firstname: {
    type: DataTypes.TEXT,
    allowNull: false,// empêche d'avoir une collone vide
  },
  lastname: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  /*role: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: 'joueur',
  },*/
}, {
  // Par défautl, Sequelize va écrire comme nom de table le nom du modèle
  tableName: 'joueur',
  // On fournit notre instance de connexion sequelize à ce modèle
  sequelize,
});

module.exports = { Joueur };

