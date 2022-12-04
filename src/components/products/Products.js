import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Products.css'

const Products = (props) => {
    const {img,name,seller,price,ratings} =props.children[1];
   
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className="p-info">
            <p> {name}</p>
            <p>price: ${price}</p>
            <p>Seller: {seller}</p>
            <p>Ratings: {ratings} Star</p>
           </div>
            <button onClick={()=>props.children[3](props.children[1])}  className='button-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
             
            </button>  
        </div>
    );
};

export default Products;