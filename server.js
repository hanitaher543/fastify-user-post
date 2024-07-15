// IMPORTS
const fastify = require ('fastify') ({logger : true});
const sequelize = require ('./config/database');
require('dotenv').config();
const PORT = 3000;



// Routing
//fastify.register (require (''));




// Run server and connect to db
const start = async () => {
    try {
      await fastify.listen ({ port: PORT });
      console.log(`Server is running on port ${PORT}`);
      await sequelize.authenticate();
      console.log('Connection to database has been established successfully!!');
      //await sequelize.sync(); 

    } catch (error) {
      console.log(`Server failed to start on port ${PORT}`)
      fastify.log.error(error);
      process.exit(1);
    }
  };
    
  start();
