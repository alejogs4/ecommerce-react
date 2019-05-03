const app = require('./app')
const { PORT } = require('./config/variables')

/**
 * Begin server petitions listening
 */
app.listen(PORT, function handleServerListen() {
  console.log(`Server is running on port ${PORT}`)
})