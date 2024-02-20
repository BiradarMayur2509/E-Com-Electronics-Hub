import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ConfirmOrder.css'; // Import your custom CSS file


const ConfirmOrder = () => {
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    // Fetch order data from local storage
    const storedOrderData = localStorage.getItem('orderData');
    if (storedOrderData) {
      setOrderData(JSON.parse(storedOrderData));
    }
  }, []);

  const handleConfirmOrder = () => {
    // Perform any actions necessary to confirm the order
    alert('Order confirmed successfully!');
    // Optionally, you can clear the order data from local storage or perform other actions
    localStorage.removeItem('orderData');
    setOrderData(null);
  };

  return (
    <div className="confirm-order-container">
      <h2>Confirm Order</h2>
      {orderData ? (
        <div className="order-details">
          <h3>Order Details:</h3>
          <p>Product: {orderData.product}</p>
          <p>Quantity: {orderData.quantity}</p>
          <p>Total Price: {orderData.totalPrice}</p>
          <button className="btn btn-primary" onClick={handleConfirmOrder}>Confirm Order</button>
        </div>
      ) : (
        <p>No order data found.</p>
      )}
    </div>
  );
};
export default ConfirmOrder;