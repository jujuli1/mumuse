const { Client } = require("pg");

/// connexion à ma bdd
// le client me permet d'envoyer des requêtes
// le format de la chaine de connexion est le suivant :
// postgresql://utilisateur:password@server/bdd
const client = new Client(process.env.PG_URL);

// je lance la connexion
client.connect();

// le client est le tunnel d'accès à la BDD
module.exports = client;

/*require('dotenv').config();
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

module.exports = sequelize;*/