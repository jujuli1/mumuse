const bcrypt = require('bcrypt');
const { Joueur } = require('../models/V2/Joueur');

const authController = {
    renderSignupPage(req, res) {
        res.render('signup');
      },




      renderLoginPage(req, res) {
        res.render('login');
      },





    async signupAndRedirect(req, res) {
        
        const {
          firstname, lastname, email, password, confirmation,
        } = req.body;
        
        console.log('req.body:', req.body);
        console.log('password:', password);

         
    if (!firstname || !lastname || !email || !password || !confirmation) {
        res.render('signup', { errorMessage: 'Tous les champs sont obligatoires' });
        return;
      }
      if (password !== confirmation) {
        res.render('signup', { errorMessage: 'Les mots de passe ne correspondent pas' });
        return;
      } 

    const nbOfSaltRounds = 10; 

    
    const passwordHashed =  await bcrypt.hash(password, nbOfSaltRounds);
  
    console.log('Mot de passe haché :', passwordHashed);
   
    if (!passwordHashed) {
     
      res.render('signup', { errorMessage: 'Erreur lors de la création du mot de passe' });
      return;
    }

    

    await Joueur.create({
      firstname,
      lastname,
      email,
      password: passwordHashed,
    });

    res.redirect('/login');

},






  async loginAndRedirect(req, res) {
    
    const { firstname, email, password } = req.body;

    console.log(firstname);
    

    
    const userFound = await Joueur.findOne({
      where: {
        email,
      },
    });

    
    
  
    
    if (!userFound) {
      res.render('login', { errorMessage: 'Email ou mot de passe incorrect' });
      return;
    }

    
    const isSamePassword = await bcrypt.compare(password, userFound.password);
    if (!isSamePassword) {
      res.render('login', { errorMessage: 'Email ou mot de passe incorrect' });
      return;
    }

    if (userFound && isSamePassword) {
      res.render('index');
      return;
    }

    

    
    req.session.userId = userFound.id; 
    
    res.render('index', { firstname });

    res.redirect('/');
  },


  







  logoutAndRedirect(req, res) {
    // Je détruit la session
    req.session.destroy();

    // Je redirige vers la page d'accueil
    res.redirect('/');
  },
};

module.exports = authController;




 