import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5095/api/Products");
    setProducts(response.data);
  };

  return (
    <>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>Item: {product.name}</h2>
          <h2>Rs. {product.price}</h2>
          <h2>Netwt. {product.quantity}GM</h2>
        </div>
      ))}
    </>
  );
}

export default App;
