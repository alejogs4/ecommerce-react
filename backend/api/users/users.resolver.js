const crypto = require('crypto')
const { generateToken  } = require('../../services/auth')

module.exports = {
  async getUsers(_, args, ctx) {
    const users = await ctx.database.query('SELECT dni, name, lastname, email, admin FROM users')

    return users.rows
  },
  async getSingleUser(_, args, ctx) {
    const { dni } = args

    const user = await ctx.database.query(`SELECT dni, name, lastname, email, admin FROM users WHERE dni=$1`, [dni])

    if (!user.rows[0]) {
      throw new Error('User was not found')
    }

    return user.rows[0]
  },
  async login(_, args, ctx) {
    args.password = crypto.createHmac('sha256', args.password).digest('hex')
    const { email, password } = args

    const user = await ctx.database.query(`SELECT dni, name, lastname, email, admin FROM users WHERE email=$1 AND password=$2`, [email, password])

    if (user.rows[0]) {
      const token = generateToken(user.rows[0])
      return {
        token,
        user: user.rows[0]
      }
    }

    throw new Error(`User doesn't exits`)
  },
  async addUser(_, { input }, ctx) {
    input.password = crypto.createHmac('sha256', input.password).digest('hex')

    const { dni, name, lastname, email, password } = input
    const userData = [dni, name, lastname, email, password]

    const user = await ctx.database.query(`INSERT INTO users(dni, name, lastname, email, password) values
      ($1, $2, $3, $4, $5) returning *`, userData)
    
    return user.rows[0]
  },
  async getProductsByUserDni({ dni }, _, ctx) {
    const products = await ctx.database.query(`SELECT p.name, p.description, p.price, p.id FROM 
      products as p INNER JOIN cart ON cart.product_id = p.id WHERE cart.dni_user = $1`, [dni])

    return products.rows
  }
}