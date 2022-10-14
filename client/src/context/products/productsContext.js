import React, { createContext, useReducer } from "react";
import * as types from "./types";
import ProductReducer from "./productsReducer";
import {
  getProducts as getProductsService,
  createProduct as createProductService,
  deleteProduct as deleteProductService,
} from "../../services/products";

const INITIAL_STATE = {
  loading: false,
  creating: false,
  deleting: false,
  products: [],
  loading_error: "",
  creating_msg: "",
  deleting_msg: "",
};

export const productsContext = createContext(INITIAL_STATE);

export const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, INITIAL_STATE);

  async function getProducts() {
    dispatch({
      type: types.GET_PRODUCTS_REQUEST
    })
    const data = await getProductsService();
    console.log('DaTA: ', data)
    if(data.success) {
      dispatch({
        type: types.GET_PRODUCTS_SUCCESS,
        payload: data.data.products
      })
    }else{
      dispatch({
        type: types.GET_PRODUCTS_FAILURE,
        payload: 'Failed to get products'
      })
    }
  }


  async function createProduct(form) {
    console.log('formState: ', form)
    dispatch({
      type: types.CREATE_PRODUCT_REQUEST
    })
    const data = await createProductService(form)
    if(data.success) {
      console.log('Create: ', data)
      dispatch({
        type: types.CREATE_PRODUCT_SUCCESS,
      })
      // dispatch({
      //   type: types.GET_PRODUCTS_REQUEST
      // })
      getProducts()
    }else{
      dispatch({
        type: types.CREATE_PRODUCT_FAILURE
      })
    }
  }

  async function deleteProduct(id) {
    dispatch({
      type: types.DELETE_PRODUCT_REQUEST
    })

    const data = await deleteProductService(id);
    console.log('Delete: ', data)
    if(data.success) {
      console.log('Here: ')
      dispatch({
        type: types.DELETE_PRODUCT_SUCCESS
      })
      // dispatch({
      //   type: types.GET_PRODUCTS_REQUEST
      // })
      getProducts()
    }else{
      dispatch({
        type: types.DELETE_PRODUCT_FAILURE
      })
    }
  }

  return (
    <productsContext.Provider value={{
      getProducts,
      createProduct,
      deleteProduct,
      products: state.products,
      loading: state.loading,
      creating: state.creating,
      deleting: state.deleting,
    }}>
      {children}
    </productsContext.Provider>
  );
};
