import React from 'react';

export default function Products(props) {
  const { name, price, amountLeft, img, id } = props.item;
  return (
    <div
      style={{
        border: '1px solid black',
        width: '300px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>Amount left: {amountLeft}</p>
      <img src={img} alt='img' style={{ width: '250px' }} />
      <button onClick={() => props.addToCart(id)}>Add to cart</button>
      <button onClick={() => props.removeFromCart(id)}>Remove from cart</button>
    </div>
  );
}

// export default function Products({ item, addToCart }) {
//   const { name, price, amountLeft, img, id } = item;
//   console.log(addToCart);
//   return (
//     <div>
//       <p>Name: {name}</p>
//       <p>Price: {price}</p>
//       <p>Amount left: {amountLeft}</p>
//       <img src={img} alt='img' style={{ width: '250px' }} />
//       <button onClick={() => addToCart(id)}>Add to cart</button>
//       <button onClick={() => removeFromCart(id)}>Remove from cart</button>
//     </div>
//   );
// }
