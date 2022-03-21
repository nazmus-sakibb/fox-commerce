import React, { useEffect, useState } from 'react';
import { Products, Navbar } from './components';
import Cart from './components/Cart/Cart';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  async function fetchProducts() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setProducts(data);
    }
    catch (err) {
      // throw err;
      console.log(err);
    }
  }


  const handleAddToCart = (product) => {
    cart.push = product;
    setCart(cart);
    console.log(cart);
  }


  useEffect(() => {
    fetchProducts();
    // fetchCart();
  }, []);

  return (
    <div>
      <Navbar />
      <Cart cart={cart}/>
      <Products products={products} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default App;