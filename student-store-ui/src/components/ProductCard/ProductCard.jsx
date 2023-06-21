import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription,
}) {
  const formatPrice = (price) => `$${price.toFixed(2)}`;

  return (
    <div className="product-card">
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">{formatPrice(product.price)}</p>
      {showDescription && <p className="product-description">{product.description}</p>}
      <div className="media">
        <Link to={`/products/${productId}`}>
          <img src={product.image} alt={product.name} />
        </Link>
      </div>
      <button className="add" onClick={() => handleAddItemToCart(productId)}>
        Add to Cart
      </button>
      <button className="remove" onClick={() => handleRemoveItemToCart(productId)}>
        Remove from Cart
      </button>
      {quantity > 0 && <p className="product-quantity">Quantity: {quantity}</p>}
    </div>
  );
}

