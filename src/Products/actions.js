import { ADD_PRODUCT, POPULATE_PRODUCTS_FROM_LOCAL_STORAGE } from "./constants";

export const addProduct = (payload) => {
  return {
    type: ADD_PRODUCT,
    payload,
  };
};

export const populateProducts = () => {
  return {
    type: POPULATE_PRODUCTS_FROM_LOCAL_STORAGE,
  };
};
