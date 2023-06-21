import React from 'react';
import { Link } from "react-router-dom";


export default function ProductView({ product, handleAddItemToCart, handleRemoveItemFromCart }) {
  const handleAddClick = () => {
    handleAddItemToCart(product.id);
  }

  const handleRemoveClick = () => {
    handleRemoveItemFromCart(product.id);
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{`Price: $${product.price}`}</p>
      <button onClick={handleAddClick}>Add to Cart</button>
      <button onClick={handleRemoveClick}>Remove from Cart</button>
      <Link to={`/`}><span className="red">Back to list</span></Link>
    </div>
  );
}