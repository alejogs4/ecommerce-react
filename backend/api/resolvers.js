/**
 * @description Establishing graphql resolvers, which will make the database petitions 
 * returns to user queries and mutations responses.
 */

const { addUser, getUsers, login, getSingleUser, getProductsByUserDni, editUser, getProductsByCartId, deleteUserById, becomeAdmin } = require('./users/users.resolver')
const { getProducts, addProduct, getSingleProduct, editProduct, deleteProduct } = require('./products/products.resolver')
const { addProductCart, deleteProductCart, deleteUserCart } = require('./cart/cart.resolvers')

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
    addProductCart,
    deleteProductCart,
    editUser,
    becomeAdmin,
    finishBuy: deleteUserCart,
    deleteUser: deleteUserById
  },
  Users: {
    cart: getProductsByUserDni,
  },
  Cart: {
    product: getProductsByCartId 
  }
}