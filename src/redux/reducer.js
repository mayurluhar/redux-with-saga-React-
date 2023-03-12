import { ADD_TO_CART, REMOVE_TO_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ACTION REDUCER", action);
      return [...data, action.data];
    case REMOVE_TO_CART:
      return data.filter((data) => data.id !== action.data);
    default:
      return data;
  }
};
