import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import ProductList from "./components/productList";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <ProductList />
    </div>
  );
}

export default App;
