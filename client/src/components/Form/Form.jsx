import React, { useState, useContext } from "react";
import './style.css'

import { productsContext } from '../../context/products/productsContext'

function Form({ handleClose }) {
  const [form, setForm] = useState({
    title: "",
    body_html: "",
    vendor: "",
    product_type: "",
    tags: ""
  });

  const { createProduct } = useContext(productsContext)

  const handleInputChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div onClick={(e) => {
      if(e.target.className === 'form__container') {
        handleClose(true)
      }
    }} className="form__container">
    <form className="form__content">
      <div
        style={{
          width: "100%",
          padding: 20
        }}
      >
        <div>
          <span>Title:</span><span><input type="text" name="title" onChange={handleInputChange} /></span>
        </div>
        <label htmlFor="body_html">
          description:{" "}
          <input type="text" name="body_html" onChange={handleInputChange} />
        </label><br />
        <label htmlFor="vendor">
          Vendor:{" "}
          <input type="text" name="vendor" onChange={handleInputChange} />
        </label><br />
        <label htmlFor="product_type">
          product type:{" "}
          <input type="text" name="product_type" onChange={handleInputChange} />
        </label><br />
        <label htmlFor="product_type">
          tags:{" "}
          <input type="text" name="tags" onChange={handleInputChange} />
        </label><br />
        <button onClick={() => handleClose(true)}>close</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            createProduct(form)
            handleClose(true)
          }}
        >
          add product
        </button>
      </div>
    </form>
    </div>
  );
}

export default Form;
