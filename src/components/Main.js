import { addToCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";

function Main() {
  const dispatch = useDispatch();
  const dataObject = {
    name: "mayur",
    age: 23,
  };

  return (
    <div className="App">
      <button onClick={() => dispatch(addToCart(dataObject))}>AddData</button>
      <button
        onClick={() => {
          dispatch(productList());
        }}
      >
        Product List
      </button>
    </div>
  );
}

export default Main;
