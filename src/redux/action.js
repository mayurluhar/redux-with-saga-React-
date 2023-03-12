import { ADD_TO_CART, REMOVE_TO_CART } from "./constant";

export const addToCart = (data) => {
  console.log("data added called", data);

  return { type: ADD_TO_CART, data };
};

export const removeFromCart = (data) => {
  console.log("action cart", data);
  return { type: REMOVE_TO_CART, data };
};
