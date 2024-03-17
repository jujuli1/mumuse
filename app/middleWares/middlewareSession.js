
const session = require('express-session');

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET || 'shhhhh', // Pour générer les SID (clé de session)
  resave: false, // Pour ne pas sauvegarder la session si rien n'a changé
  saveUninitialized: true, // Pour sauvegarder une session vide
  cookie: { secure: false }, // secure false pour pouvoir utiliser http
});

// Ce middleware va générer un id de session pour chaque utilisateur (navigateur)
// Et il va relier cette identifiant à un objet session
// qui contiendra les informations de l'utilisateur

module.exports = sessionMiddleware;


