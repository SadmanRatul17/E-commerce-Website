import React from 'react';
import './cart.css'

const Cart = ({cart}) => {
    console.log(cart);
    let total= 0;
    let shipping=0;
    let quantity=0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
       
    }
     const  tax=total*.15;
     const grandTotal = total+shipping+tax;

    return (
        <div className='cart'>
            <h2 id='order'>Order Summary</h2>
            <p>selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal}</h4>
        </div>
    );
};

export default Cart;