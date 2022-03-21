import React, { useEffect, useState } from 'react';
import { Products, Navbar } from './components';

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


  const fetchCart = async () => {
    fetch('https://fakestoreapi.com/carts',{
            method:"POST",
            body:JSON.stringify(
                {
                    userId:5,
                    products:[{productId:5,quantity:1},{productId:1,quantity:5}]
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

    setCart(cart);
  };


  const handleAddToCart = async (productId, quantity) => {
    const item = await cart.add(productId, quantity);

    setCart(item);
  }


  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart)

  return (
    <div>
      <Navbar />
      <Products products={products} onAddToCart={handleAddToCart}/>
    </div>
  );
};

export default App;