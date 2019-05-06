module.exports = {
  async addProductCart(_, { userDni, productId }, ctx) {
    const cart = await ctx.database.query(`INSERT INTO cart(dni_user, product_id)
       VALUES($1, $2) returning *`, [userDni, productId])

    return cart.rows[0]
  }
}