const { addUser, getUsers, login, getSingleUser, getProductsByUserDni } = require('./users/users.resolver')
const { getProducts, addProduct, getSingleProduct, editProduct, deleteProduct } = require('./products/products.resolver')
const { addProductCart } = require('./cart/cart.resolvers')

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
    deleteProduct,
    addProductCart
  },
  Users: {
    products: getProductsByUserDni
  }
}