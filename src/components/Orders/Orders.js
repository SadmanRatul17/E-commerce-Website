import React from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItems from "../ReviewItems/ReviewItems";

const Orders = () => {
  const { products, initialCart } = useLoaderData(); //{ products: products, initialCart: initialCart }
  const [cart, setCart] = useState(initialCart);
  const handleReviewItems = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="orders-container">
        {cart.map((product) => (
          <ReviewItems
            key={product.id}
            product={product}
            handleReviewItems={handleReviewItems}
          ></ReviewItems>
        ))}
        {cart.length === 0 && (
          <h2>
            No Item for Review.Please, <Link to="/">Shop more</Link>
          </h2>
        )}
      </div>
      <div className="cart-container">
        <Cart clearCart={clearCart} cart={cart}>
          <Link to="/shipping">
            <button>Proceed Shipping</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
