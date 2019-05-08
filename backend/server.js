/**
 * @description Begin server petitions, and start listening the given port.
 */

const app = require('./app')
const { PORT } = require('./config/variables')

app.listen(PORT, function handleServerListen() {
  console.log(`Server is running on port ${PORT}`)
})