import React, { useState, useContext, useEffect } from 'react';
import './App.css';
import TableItem from './components/TableItem';
import Form from './components/Form/Form';
import Spinner from './components/Spinner';
import { productsContext } from './context/products/productsContext'

function App() {
  const [showForm, setShowForm] = useState(true)
  const { products, getProducts, loading, creating, deleting } = useContext(productsContext)

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
  }, [loading])

  // console.log('Products: ', products)
  // console.log('loading: ', loading)
  return (
    <div className="App">
      <p>Product list</p>
      {showForm && <Form handleClose={() => setShowForm(false)} />}
      {(loading || creating || deleting) && <Spinner />}
      {/* <Spinner /> */}
      <button onClick={() => setShowForm(true)}>Add a Product</button>
      <table>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Vendor</th>
          <th>Type</th>
          <th>Created at</th>
          <th>action</th>
        </tr>
      {products.map((product, index) => <TableItem product={product} key={index} />)}
      </table>
    </div>
  );
}

export default App;
