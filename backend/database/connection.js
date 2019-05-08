/**
 * @description Setting up the database connection (PostgreSQL).
 */

const { Pool } = require('pg')
const databaseSettings = require('../config/database')

let pool = null

module.exports = function handlePoolDatabeConnection() {
  if (!pool) {
    pool = new Pool(databaseSettings)
  }

  return pool
}