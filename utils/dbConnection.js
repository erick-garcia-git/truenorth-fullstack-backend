const Sequelize = require('sequelize');
// receive db connection params from environment variables
const {
  ENVIRONMENT,
  DB,
  DB_PASS,
  DB_USER,
} = process.env

const getDbConfigMysql = () => {
  //get  sequelize instance with a connection to a db
  return new Sequelize(DB, DB_USER, DB_PASS, {
    dialect: 'mysql',
    host: 'localhost',
    define: { freezeTableName: true, timestamps: false }
  })
}

const getMongoDbConfig = () => {
  const {
    MONGO_DB_NAME = 'tasklist-project',
    MONGO_DB_USER,
    MONGO_DB_PASSWORD
  } = process.env
  const connectionString = `mongodb://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@localhost:27017/${MONGO_DB_NAME}?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false`
  return {
    connectionString: connectionString,
    configOptions: { useNewUrlParser: true, dbName: MONGO_DB_NAME, useUnifiedTopology: true }
  }
}

module.exports = {
  getDbConfigMysql,
  getMongoDbConfig
}
