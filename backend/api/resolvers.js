const { addUser, getUsers, login, getSingleUser } = require('./users/users.resolver')
const { getProducts, addProduct, getSingleProduct, editProduct, deleteProduct } = require('./products/products.resolver')

module.exports = {
  Query: {
    users: getUsers,
    user: getSingleUser,
    products: getProducts,
    product: getSingleProduct
  },
  Mutation: {
    addUser,
    login,
    addProduct,
    editProduct,
    deleteProduct
  }
}