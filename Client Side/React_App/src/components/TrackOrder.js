import React from 'react';
import './TrackOrder.css';

const TrackOrder = () => {
  // Get current date
  const currentDate = new Date();

  // Calculate date of delivery (5 days from current date)
  const deliveryDate = new Date(currentDate);
  deliveryDate.setDate(deliveryDate.getDate() + 5);

  // Array of Indian city names
  const indianCities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Kolkata', 'Chennai', 'Hyderabad', 'Ahmedabad', 'Pune', 'Surat', 'Jaipur', 
    'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam', 'Patna', 'Vadodara', 'Ghaziabad'
  ];

  // Function to get a random Indian city name
  const getRandomIndianCity = () => {
    const randomIndex = Math.floor(Math.random() * indianCities.length);
    return indianCities[randomIndex];
  };

  // Generate random Indian city names for the path of traveling
  const pathOfTraveling = `${getRandomIndianCity()} - ${getRandomIndianCity()} - ${getRandomIndianCity()}`;

  return (
    <div className="track-order">
      <div className="order-card">
        <h2>Order Tracking</h2>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
        <div className="order-details">
          <p><strong>Date of Booking:</strong> {formatDate(currentDate)}</p>
          <p><strong>Date of Path of Traveling:</strong> {pathOfTraveling}</p>
          <p><strong>Estimated Delivery Date:</strong> {formatDate(deliveryDate)}</p>
        </div>
      </div>
    </div>
  );
}

// Function to format date as "Month Day, Year" (e.g., "January 20, 2024")
const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

export default TrackOrder;
