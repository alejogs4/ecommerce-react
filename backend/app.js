/**
 * @description Setting up the API for backend's Vantablack.
 * 
 * @author Alejandro Garcia <https://github.com/alejogs4>
 * @author Mauricio Garzon <https://github.com/maugarbru>
 * @author Miguel Angel Velez <https://github.com/mvelezg99>
 * @version 1.1
 * @license MIT
 */

const express = require('express')
const app = express()
// Setup functions
const setupGraphql = require('./graphql.config')

setupGraphql(app)

module.exports = app