import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { productData } from "./productReducer";
console.log("ROOT REDUCER");
export default combineReducers({
  cartData,
  productData,
});
