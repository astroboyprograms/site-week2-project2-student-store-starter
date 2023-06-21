import React from 'react';
import { useParams } from 'react-router-dom';
import ProductView from '../ProductView/ProductView';

export default function ProductDetail({ products, onAddItemToCart, onRemoveItemFromCart }) {
  let { productId } = useParams();
  productId = parseInt(productId);
  
  const product = products.find(product => product.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <ProductView 
      product={product} 
      handleAddItemToCart={onAddItemToCart} 
      handleRemoveItemFromCart={onRemoveItemFromCart} 
    />
  );
}
