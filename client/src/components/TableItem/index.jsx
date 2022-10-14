import React, { useContext } from 'react'
import { productsContext } from '../../context/products/productsContext'

function TableItem({ product }) {
  const { deleteProduct } = useContext(productsContext)
  return (
    <tr>
        <td>{product.title}</td>
        <td><div dangerouslySetInnerHTML={{ __html: product.body_html }}/></td>
        <td>{product.vendor}</td>
        <td>{product.product_type}</td>
        <td>{product.created_at}</td>
        <td><button onClick={() => deleteProduct(product.id)}>delete</button></td>
      </tr>
  )
}

export default TableItem