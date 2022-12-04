import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../products/Products';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setcart] = useState([]);
     useEffect( ()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
     } , []);

     useEffect( ()=>{
        const storedCart= getStoreCart();
        const savedCart =[];
        for(const id in storedCart){
           const addedProduct = products.find(product => product.id===id);
           if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity =quantity;
            savedCart.push(addedProduct);
            
           }
        }
        setcart(savedCart);
        
     }, [products]);

    const handleAddToCart = (product) =>{
              
        console.log(product);
        const newCart = [...cart,product];
        setcart(newCart);
        addToDb(product.id);

    }

    return (
        <div className='shop-container'>
            <div className="products-container">
               {
                 products.map(product=><Products key={product.id}>
                    products ={product};
                    handleAddToCart={handleAddToCart}
                 </Products>)
               }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;