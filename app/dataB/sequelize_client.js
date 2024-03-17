require('dotenv').config();
const { Sequelize } = require('sequelize');

// Je créer mon client sequelize (qui se connecte à ma bdd postgres)
const sequelize = new Sequelize(process.env.PG_URL, {
  // Sequelize de base utilise le camelCase pour les noms de colonnes
  // Je lui demande d'utiliser le snake_case
  define: {
    underscored: true,
  },
  logging: false, // Pour ne pas afficher les logs SQL dans la console
});

module.exports = sequelize;