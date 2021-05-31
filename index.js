// @vendors
require('dotenv').config()
const { getDbConfigMysql, getMongoDbConfig } = require('./utils/dbConnection')
const mongoose = require('mongoose');

// @config
const server = require('./server');

if (process.env.DB_TYPE === 'mysql') {
  const sequelizeInstance = getDbConfigMysql()

  //authenticate to the db
  return sequelizeInstance
    .authenticate()
    .then(() => server(sequelizeInstance))
    .catch(err => {
      //set this flag to indicate that the connection is not available
      console.error('Unable to connect to the data base', err);
    });
}

if (process.env.DB_TYPE === 'mongo') {
  const mongoConfig = getMongoDbConfig()
  mongoose.connect(mongoConfig.connectionString, mongoConfig.configOptions)
    .then(() => {
      console.log('connection success...')
      server(mongoose)
    })
    .catch(err => console.log('error in connection ', err))
  return true;
}


