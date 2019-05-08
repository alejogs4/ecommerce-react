/**
 * @description Establishing all users functions to resolve the petitions propertly.
 */

const crypto = require('crypto')
const { generateToken  } = require('../../services/auth')

module.exports = {
  async getUsers(_, args, ctx) {
    const users = await ctx.database.query('SELECT id, name, lastname, email, admin FROM users')

    return users.rows
  },
  async getSingleUser(_, args, ctx) {
    const { id } = args

    const user = await ctx.database.query(`SELECT id, name, lastname, email, admin FROM users WHERE id=$1`, [id])

    if (!user.rows[0]) {
      throw new Error('User was not found')
    }

    return user.rows[0]
  },
  async login(_, args, ctx) {
    args.password = crypto.createHmac('sha256', args.password).digest('hex')
    const { email, password } = args

    const user = await ctx.database.query(`SELECT id, name, lastname, email, admin FROM users WHERE email=$1 AND password=$2`, [email, password])

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

    const { name, lastname, email, password } = input
    const userData = [name, lastname, email, password]

    const user = await ctx.database.query(`INSERT INTO users(name, lastname, email, password) values
      ($1, $2, $3, $4) returning *`, userData)
    
    return user.rows[0]
  },
  async editUser(_, { password, id }, ctx) {
    const newPassword = crypto.createHmac('sha256', password).digest('hex')

    const userData = [newPassword, id]
    const user = await ctx.database.query(`UPDATE users SET password=$1 WHERE id=$2
      returning *`, userData)

    return user.rows[0]
  },
  async becomeAdmin(_, { id }, ctx) {
    const user = await ctx.database.query('UPDATE users SET admin=TRUE WHERE id=$1', [id])
    return user.rows[0]
  },
  async deleteUserById(_, { id }, ctx) {
    const user = await ctx.database.query('DELETE FROM users WHERE id=$1 returning *', [id])
    return user.rows[0]
  },
  async getProductsByUserDni({ id }, _, ctx) {
    const products = await ctx.database.query(`SELECT cart.id, cart.product_id FROM cart WHERE cart.id_user = $1`, [id])
    return products.rows
  },
  async getProductsByCartId({product_id}, _, ctx) {
    const products = await ctx.database.query(`SELECT name, description, price, id FROM 
    products WHERE id = $1`, [product_id])

    return products.rows[0]
  }
}