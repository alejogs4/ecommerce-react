const express = require('express')
const app = express()
// Setup functions
const setupExpress = require('./config/express')
const setupApplicationRoutes = require('./config/routes')

setupExpress(app)
setupApplicationRoutes(app)

module.exports = app