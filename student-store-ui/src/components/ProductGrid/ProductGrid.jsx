import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

export default function ProductGrid({ products, handleAddItemToCart, handleRemoveItemFromCart }) {
  return (
    <div className="product-grid">
      <div className = "content">
      <h3>Best Selling Products</h3>
      <div className="grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            productId={product.id} // Pass the product ID to ProductCard
            quantity={product.quantity} // Pass the quantity to ProductCard
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
            showDescription={false}
          />
        ))}
      </div> 
      </div>
    </div>
  );
}




