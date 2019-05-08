/**
 * @description Establishing all products functions to resolve the petitions propertly.
 */

module.exports = {
  async getProducts(_, args, ctx) {
    const products = await ctx.database.query('SELECT id, name, description, price, image FROM products')

    return products.rows
  },
  async getSingleProduct(_, args, ctx) {
    const { id } = args
    const product = await ctx.database.query(`SELECT id, name, description, price, image FROM products WHERE id=$1`, [id])

    if (!product.rows[0]) {
      throw new Error(`The product with the id ${id} doesn't exists`)
    }

    return product.rows[0]
  },
  async addProduct(_, { input }, ctx) {
    const { name, description, price, image } = input
    const productData = [name, description, price, image]
    try {
      const product = await ctx.database.query(`INSERT INTO products(name, description, price, image)
       VALUES($1, $2, $3, $4) returning *`, productData)

      return product.rows[0]
    }
    catch (err) {
      new Error(err)
    }
  },
  async editProduct(_, { id, input }, ctx) {
    const { name, description, price } = input
    const productData = [name, description, price]

    try {
      const product = await ctx.database.query(`UPDATE products SET name=$1, description=$2, price=$3
         WHERE id=${id} returning *`, productData)

      return product.rows[0]
    }
    catch(err) {
      throw new Error(err)
    }
  },
  async deleteProduct(_, { id }, ctx) {
    const product = await ctx.database.query('DELETE FROM products WHERE id=$1 returning *', [id])

    if (!product.rows[0]) {
      throw new Error(`The product doesn't exits`)
    }

    return product.rows[0]
  }
}