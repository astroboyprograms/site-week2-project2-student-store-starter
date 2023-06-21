import * as React from "react";
import "./CheckoutForm.css";

export default function CheckoutForm({
  isOpen,
  shoppingCart,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
}) {
  // CheckoutForm component accepts isOpen, shoppingCart, checkoutForm, handleOnCheckoutFormChange,
  // and handleOnSubmitCheckoutForm as props

  // Local state for storing error and success messages
  const [message, setMessage] = React.useState("");
  const [isError, setIsError] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleOnSubmitCheckoutForm();
      setIsError(false);
      setMessage("Success!");
      // Clear the shoppingCart and checkoutForm in App.jsx file, where you have access to their state
    } catch (err) {
      setIsError(true);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="checkout-form">
      <input
        className="checkout-form-input"
        type="email"
        name="email"
        placeholder="student@codepath.org"
        value={checkoutForm.email}
        onChange={handleOnCheckoutFormChange} // update checkoutForm state
      />
      <input
        className="checkout-form-input"
        type="text"
        name="name"
        placeholder="Student Name"
        value={checkoutForm.name}
        onChange={handleOnCheckoutFormChange} // update checkoutForm state
      />
      <button className="checkout-button" onClick={handleSubmit}>
        Checkout
      </button>
      {message && (
        <p className={isError ? "error" : "success"}>{message}</p>
      )}
    </div>
  );
}
