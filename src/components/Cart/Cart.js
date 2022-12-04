import React from 'react';
import './cart.css'

const Cart = ({cart}) => {
    let total= 0;
    let tax=0,shipping=0,grandTotal=0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
        tax=total*.15;
        grandTotal = total+shipping+tax;

    }
    return (
        <div className='cart'>
            <h2 id='order'>Order Summary</h2>
            <p>selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal}</h4>
        </div>
    );
};

export default Cart;