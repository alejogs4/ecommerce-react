const express = require('express')
const cors = require('cors')

module.exports = function setupExpress(app) {
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cors())
}