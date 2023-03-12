import { GET_PRODUCT_LIST, PRODUCT_LIST } from "./constant";

export const productData = (data = [], action) => {
  console.log("PRODUCT REDUCER", action);
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return [...action.data];
    default:
      return data;
  }
};
