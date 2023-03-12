import { takeEvery, put, take } from "redux-saga/effects";
import { GET_PRODUCT_LIST, PRODUCT_LIST, REMOVE_TO_CART } from "./constant";

function* getProduct() {
  console.log("SAGA GET PRODUCT FUNCTION");

  let data = yield fetch("http://localhost:3001/product");
  data = yield data.json();

  yield put({ type: GET_PRODUCT_LIST, data });
}

export function* productSaga() {
  console.log("SAGA  PRODUCT FUNCTION");
  yield takeEvery(PRODUCT_LIST, getProduct);
}
