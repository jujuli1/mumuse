const dataMapper = require("../dataMapper");

const joueurController = {
     joueur: async (req, res)=> {

        

            const joueurName = await dataMapper.getFirstname(); 
            console.log(joueurName);
            res.render(`index`, { joueurName })
            res.end()

            
        
        

        

        
    
    },
}

module.exports = joueurController;