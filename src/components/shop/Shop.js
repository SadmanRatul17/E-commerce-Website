import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  addToDb,
  deleteShoppingCart,
  getStoreCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Products from "../products/Products";
import "./Shop.css";

const Shop = () => {
  const products = useLoaderData();
  const [cart, setcart] = useState([]);
  const clearCart = () => {
    setcart([]);
    deleteShoppingCart();
  };

  useEffect(() => {
    const storedCart = getStoreCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setcart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    let newCart = [];
    const exists = cart.find((sProducts) => sProducts.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter((sProducts) => sProducts.id !== product.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setcart(newCart);
    addToDb(product.id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Products key={product.id}>
            products ={product}; handleAddToCart={handleAddToCart}
          </Products>
        ))}
      </div>
      <div className="cart-container">
        <Cart clearCart={clearCart} cart={cart}>
          <Link to="/orders">
            <button>Review items</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
