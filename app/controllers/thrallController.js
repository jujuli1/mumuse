const dataMapper = require('../dataMapper');

const thrallController = {
    async thrall  (req, res)  {

        

        try{

            const weaponThrall = await dataMapper.getAllWeaponThrall() || [];
            res.render(`thrall`, {weaponThrall})
        res.end()
            }

        
        

        
    
        catch (err) {
            console.log(err);
            res.status(500).send('Erreur lors de la récupération des niveaux');
          }
    }
}

module.exports = thrallController;