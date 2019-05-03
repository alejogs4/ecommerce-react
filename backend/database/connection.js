const { Pool } = require('pg')
const databaseSettings = require('../config/database')

let pool = null
/**
 * Singleton function that allow us have only one instance of pool connection through the app
 */
module.exports = function handlePoolDatabeConnection() {
  if (!pool) {
    pool = new Pool(databaseSettings)
  }

  return pool
}