/**
 * @description Defining main graphql schemas.
 */
const { gql } = require('apollo-server-express')
const fs = require('fs')

const query = fs.readFileSync(`${__dirname}/query.schema.graphql`, { encoding: 'utf8' })
const mutations = fs.readFileSync(`${__dirname}/mutations.schema.graphql`, { encoding: 'utf8' })

const users = fs.readFileSync(`${__dirname}/users/user.schema.graphql`, { encoding: 'utf8' })
const products = fs.readFileSync(`${__dirname}/products/product.schema.graphql`, { encoding: 'utf8' })
const cart = fs.readFileSync(`${__dirname}/cart/cart.schema.graphql`, { encoding: 'utf8' })


const schema = gql`
  ${users}
  ${products}
  ${cart}
  ${query}
  ${mutations}
`

module.exports = schema