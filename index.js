require('dotenv').config();
const PORT = process.env.PORT || 3002;
const app = require('../api-server/server.js');
const {sequelize} = require('./src/auth/models');

// make sure our tables are created, start up the HTTP server.
sequelize.sync()
  .then(() => {
    app.listen(3000, () => console.log('server up'));
  }).catch(e => {
    console.error('Could not start server', e.message);
  });

  // create error handling 
  // in the future if I add more routes 