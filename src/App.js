import React, { useEffect, useState } from 'react';
import { Products, Navbar } from './components';

const App = () => {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try{
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    setProducts(data);
    }
    catch(err) {
      // throw err;
      console.log(err);
    }
  }


  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data));
    fetchProducts();
  }, []);

  // console.log(products);

  return (
    <div>
      <Navbar />
      <Products products={products}/>
    </div>
  );
};

export default App;