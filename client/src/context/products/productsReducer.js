import * as types from "./types";

function ProductReducer(state, action) {
  switch (action.type) {
    case types.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case types.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        loading_error: action.payload,
      };

    case types.CREATE_PRODUCT_REQUEST:
      return {
        ...state,
        creating: true,
      };
    case types.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        creating: false,
        creating_msg: action.payload,
      };
    case types.CREATE_PRODUCT_FAILURE:
      return {
        ...state,
        creating: false,
        creating_msg: action.payload,
      };

    case types.DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        deleting: true,
        deleting_msg: action.payload,
      };
    case types.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        deleting: false,
        deleting_msg: action.payload,
      };
    case types.DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        deleting: false,
        deleting_msg: action.payload,
      };
    default:
      return state;
  }
}

export default ProductReducer;
