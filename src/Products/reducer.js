import { ADD_PRODUCT, POPULATE_PRODUCTS_FROM_LOCAL_STORAGE } from "./constants";

const INITIAL_STATE = {
  products: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      let updatedProducts = [
        ...state.products,
        {
          ...action.payload,
          key: Math.ceil(Math.random() * Math.random() * 1000000),
        },
      ];

      localStorage.setItem("products", JSON.stringify(updatedProducts));
      return {
        ...state,
        products: updatedProducts,
      };

    case POPULATE_PRODUCTS_FROM_LOCAL_STORAGE:
      let products = [];
      let hasLocalStorageProducts = localStorage.getItem("products");
      if (hasLocalStorageProducts) {
        products = JSON.parse(hasLocalStorageProducts);
      }
      return {
        ...state,
        products: products,
      };

    default:
      return state;
  }
};

export default reducer;
