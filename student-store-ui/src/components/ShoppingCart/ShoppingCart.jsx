import * as React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart({ isOpen, products, shoppingCart }) {
  // ShoppingCart component accepts isOpen, products, and shoppingCart as props

  // Calculate subtotal and total price
  const taxRate = 0.0875;
  let subtotal = 0;
  
  shoppingCart.forEach(item => {
    const product = products.find(prod => prod.id === item.itemId);
    if (product) {
      subtotal += product.price * item.quantity;
    }
  });

  const total = subtotal + subtotal * taxRate;

  return (
    <div className="shopping-cart">
      {shoppingCart.length > 0 ? (
        <>
          {shoppingCart.map(item => {
            const product = products.find(prod => prod.id === item.itemId);
            return product ? (
              <div key={item.itemId}>
                {/* Display the name of the item */}
                <span className="cart-product-name">{product.name}</span>
                {/* Display the quantity of the item */}
                <span className="cart-product-quantity">{item.quantity}</span>
              </div>
            ) : null;
          })}
          {/* Render subtotal and total price */}
          <p className="subtotal">Subtotal: ${subtotal.toFixed(2)}</p>
          <p className="total-price">Total: ${total.toFixed(2)}</p>
        </>
      ) : (
        <p className="notification">
          No items added to cart yet. Start shopping now!
        </p>
      )}
    </div>
  );
}
