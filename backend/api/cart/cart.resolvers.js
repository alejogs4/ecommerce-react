/**
 * @description Establishing all carts functions to resolve the petitions propertly.
 */

module.exports = {
  async addProductCart(_, { id, productId }, ctx) {
    const cart = await ctx.database.query(`INSERT INTO cart(id_user, product_id)
       VALUES($1, $2) returning *`, [id, productId])

    return cart.rows[0]
  },
  async deleteProductCart(_, { id }, ctx) {
    const cart = await ctx.database.query('DELETE FROM cart WHERE id=$1 returning *', [id])
    return cart.rows[0]
  },
  async deleteUserCart(_, { userId }, ctx) {
    const cart = await ctx.database.query('DELETE FROM cart WHERE id_user=$1 returning *', [userId])
    console.log(cart.rows)
    return cart.rows
  }
}