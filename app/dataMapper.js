const client = require('./dataB/database')
const clientS = require('./dataB/sequelize_client')



dataMapper = {

    async getAllWeaponThrall ()  {
        const query =  "SELECT * FROM thrall";
        const results = await client.query(query);
        
        return results.rows;
    },

    async getAllWeaponSylvanas  ()  {

        
        const query =  "SELECT * FROM sylvanas";
        const results = await client.query(query);
      
        
        return results.rows;
    },

    /*async getFirstname  ()  {

        
        const query =  "SELECT firstname FROM joueur";
        const results = await clientS.query(query);
        console.log('Data from getFirstname:', results.rows);
      
        
        return results.rows;

       
    },*/

    async getFirstname() {
        console.log('Starting getFirstname');
        const query = "SELECT firstname FROM joueur";
        try {
          const results = await clientS.query(query);
          console.log('Data from getFirstname:', results.rows);
          return results.rows;
        } catch (error) {
          console.error('Error in getFirstname:', error);
          throw error;
        }
      }

   
 
}

module.exports = dataMapper;