const dataMapper = require("../dataMapper");

const sylvanasController = {
     sylvanas: async (req, res)=> {

        

            const WeaponSylvanas = await dataMapper.getAllWeaponSylvanas() ;
            res.render(`sylvanas`, {WeaponSylvanas})
            res.end()
        
        

        

        
    
    },
}

module.exports = sylvanasController;