/**
 * @description Importing apollo server and graphql schemas.
 */

const { ApolloServer } = require('apollo-server-express')

const typeDefs = require('./api/typeDefs')
const resolvers = require('./api/resolvers')
const database = require('./database/connection')()

module.exports = function handleApolloServer(app) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    context: {
      database
    },
  })

  server.applyMiddleware({ app })
}