const express = require('express')
const app = express()
// Setup functions
const setupGraphql = require('./graphql.config')

setupGraphql(app)

module.exports = app