const corser = require('corser');
const express = require('express');
const app = express();

const server = (dbInstance = null) => {
  //remove x-powered-by from response( this is to improve performance a little bit in the server)
  app.disable('etag').disable('x-powered-by');


  // parse application/json
  app.use(express.json())
  //initialize body parser to receive parameters within a request
  app.use(express.urlencoded({ extended: true }));

  //enable cors
  app.use(corser.create());

  //pass the sequelize instance through the request object
  if (dbInstance) {
    app.use((req, _, next) => {
      req['db'] = dbInstance;
      next();
    })
  }

  // Routes
  require('./TasksList/routes')(app);

  app.listen(4000);

  console.log('server running at localhost:4000')
}

module.exports = server;
