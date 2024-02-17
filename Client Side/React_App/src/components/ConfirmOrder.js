import React from 'react';
import './ConfirmOrder.css'; // Import the CSS file

const ConfirmOrder = ({ orderDetails, onConfirm }) => {
  const handleConfirm = () => {
    onConfirm();
  };

  return (
    <div className="confirm-order-container">
      <h2>Confirm Order</h2>
      <div className="order-details">
        <p><strong>Product:</strong> {orderDetails.productName}</p>
        <p><strong>Brand:</strong> {orderDetails.brand}</p>
        <p><strong>Model:</strong> {orderDetails.selectedModel}</p>
        <p><strong>Quantity:</strong> {orderDetails.quantity}</p>
      </div>
      <button className="confirm-button" onClick={handleConfirm}>Confirm Order</button>
    </div>
  );
};

export default ConfirmOrder;

