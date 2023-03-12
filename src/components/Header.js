import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const resultData = useSelector((state) => state.cartData);
  console.log(resultData);

  return (
    <>
      <div>
        <p>Cart Result{resultData.length}</p>
      </div>
    </>
  );
};

export default Header;
