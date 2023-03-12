import { GET_PRODUCT_LIST, PRODUCT_LIST, REMOVE_TO_CART } from "./constant";

export const productList = () => {
  console.log("ACTION");
  return { type: PRODUCT_LIST };
};
