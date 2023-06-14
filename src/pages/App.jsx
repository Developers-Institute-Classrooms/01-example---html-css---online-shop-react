import Header from "../components/Header";
import Products from "../components/Products";

import products from "../data/products.json";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Products products={products} />
    </div>
  );
}

export default App;
