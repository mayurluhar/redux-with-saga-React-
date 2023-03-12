import React, { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../redux/productAction";
import { addToCart, removeFromCart } from "../redux/action";

const ProductList = () => {
  const productResult = useSelector((state) => state.productData);

  useEffect(() => {
    dispatch(productList());
  }, []);

  const dispatch = useDispatch();
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
            </tr>
          </thead>
          <tbody>
            {productResult.map((data, index) => (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.productName}</td>
                <td>
                  <button onClick={() => dispatch(addToCart(data))}>
                    Add to cart
                  </button>
                </td>
                <td>
                  <button onClick={() => dispatch(removeFromCart(data.id))}>
                    Remove to cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductList;
