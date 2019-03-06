import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Admin from './Pages/Admin'
import Signup from './Pages/Signup'
import AdminProducts from './Pages/AdminProducts'
import EditProduct from './Pages/EditProduct';
import ShoppingCart from './Pages/ShoppingCart';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/admin' component={Admin} />
    <Route exact path='/admin/products' component={AdminProducts} />
    <Route exact path='/admin/edit/:name' component={EditProduct} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/shopping" component={ShoppingCart} />
  </Switch>
)

export default Routes
