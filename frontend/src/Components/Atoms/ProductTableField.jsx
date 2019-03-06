import React from 'react'
import { Link } from 'react-router-dom'

const ProductTableField = ({ item, handleDelete }) => (
  <tr>
    <td>{item.name}</td>
    <td>{item.type}</td>
    <td>{item.IMG}</td>
    <td>{item.price}</td>
    <td><Link to={`/admin/edit/${item.name}`}>Edit</Link></td>
    <td><button onClick={handleDelete}>Delete</button></td>
  </tr>
)


export default ProductTableField
