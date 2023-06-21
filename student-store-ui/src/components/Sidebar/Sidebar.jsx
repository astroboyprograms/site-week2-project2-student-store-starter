import React from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import "./Sidebar.css";

export default function Sidebar({
  isOpen,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
}) {
  const handleOnToggle = () => {
    setIsOpen(!isOpen);
  };

  const sidebarStyle = isOpen ? "sidebar open" : "sidebar";
  const buttonStyle = isOpen ? "toggle-button open" : "toggle-button";

  return (
    <section className={sidebarStyle}>
      <div className="wrapper">
        <button className={buttonStyle} onClick={handleOnToggle}>
          {isOpen ? (
            <i className="material-icons md-48">arrow_back</i>
          ) : (
            <i className="material-icons md-48">arrow_forward</i>
          )}
        </button>

        {isOpen && (
          <div className="shopping-cart">
            <div className="cart-icons">
              <span className="cart-icon icon button">
                <i className="material-icons md-48">add_shopping_cart</i>
              </span>
              <span className="cart-icon icon button">
                <i className="material-icons md-48">monetization_on</i>
              </span>
              <span className="cart-icon icon button">
                <i className="material-icons md-48">fact_check</i>
              </span>
            </div>
            <ShoppingCart shoppingCart={shoppingCart} products={products} />
            <CheckoutForm
              checkoutForm={checkoutForm}
              onFormChange={handleOnCheckoutFormChange}
              onSubmitForm={handleOnSubmitCheckoutForm}
            />
          </div>
        )}
      </div>
    </section>
  );
} 
