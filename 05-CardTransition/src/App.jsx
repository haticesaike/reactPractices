import "./App.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:3000/products");
    setProducts(response.data);
    console.log("product", response.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const leftButton = () => {
    count > 0 ? setCount(count - 1) : setCount(products.length - 1);
  };
  const rightButton = () => {
    count < products.length - 1 ? setCount(count + 1) : setCount(0);
  };
  const randomButton = () => {
    setCount(Math.floor(Math.random() * products.length));
  };

  return products.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <>
      <div className="cover">
        <div className="headText">Products</div>
        <button className="randomCardButton" onClick={randomButton}>
          Random Card
        </button>
      </div>
      <div className="container">
        <button className="buttonLeft" onClick={leftButton}>
          <FaChevronLeft />
        </button>
        <div className="card">
          <div className="title">{products[count].title}</div>
          <div className="price">{products[count].price}$</div>
          <div className="description">{products[count].description}</div>
        </div>
        <button className="buttonRight" onClick={rightButton}>
          <FaChevronRight />
        </button>
      </div>
    </>
  );
}

export default App;
