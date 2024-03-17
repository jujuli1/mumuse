const { Router } = require('express');

const dataMapper = require('./dataMapper');
const mainController = require('./controllers/mainController');
const thrallController = require('./controllers/thrallController');
const sylvanasController = require('./controllers/sylvanasController');
const authController = require('./controllers/authController');
const joueurController = require('./controllers/joueurController');
const middleware404 = require('./middleWares/middleware404');



const router = Router();

router.get('/', mainController.home);

router.get('/figurineSylvanas', sylvanasController.sylvanas);
router.get('/figurineThrall', thrallController.thrall);
router.get('/index', joueurController.joueur);

router.get('/signup', authController.renderSignupPage);
router.post('/signup', authController.signupAndRedirect);
router.get('/login', authController.renderLoginPage);
router.post('/login', authController.loginAndRedirect);
router.get('/logout', authController.logoutAndRedirect);
router.use(middleware404);


module.exports = router;