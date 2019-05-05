const jwt = require('jsonwebtoken')
const SECRET_KEY = 'UDEM2019'

const generateToken = (payload) => {
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '15d' })
  return token
}

const isValidToken = (token) => {
  return new Promise((resolve) => {
    jwt.verify(token, SECRET_KEY, (err) => {
      resolve(!err)
    })
  })
}

module.exports = {
  generateToken,
  isValidToken
}