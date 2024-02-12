import React from 'react';
import { products } from '../../data/products';
import Products from './Products';
import { addToCart, removeFromCart } from '../../helpers';

export default function Showcase() {
  console.log(products);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '100px' }}>
      {/* {products.map((product) => (
        <div>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
          <p>Amount left: {product.amountLeft}</p>
          <img src={product.img} alt='img' style={{ width: '250px' }} />
        </div>
      ))} */}

      {products.map((product, ind) => (
        <Products
          item={product}
          addToCart={addToCart}
          key={ind}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
}
