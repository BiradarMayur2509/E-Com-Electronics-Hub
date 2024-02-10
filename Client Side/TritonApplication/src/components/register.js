import React, { useState } from 'react';
import './RegisterForm.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

const RegisterForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    Shop_name: '',
    email: '',
    phone_no: '',
    License_id: '',
    GST_No: '',
    city: '',
    local_area: '',
    pincode: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      username: '',
      password: '',
      Shop_name: '',
      email: '',
      phone_no: '',
      License_id: '',
      GST_No: '',
      city: '',
      local_area: '',
      pincode: ''
    });
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // Reset submission status after 3 seconds
  };

  return (
    <div className={`register-container${isSubmitted ? ' submitted' : ''}`}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label><br />
        <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} className="register-input" required pattern="" placeholder="Username must be at least 5 characters and contain only letters, numbers, and @" /><br />
        
        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} className="register-input" required /><br />
        
        <label htmlFor="Shop_name">Shop Name:</label><br />
        <input type="text" id="Shop_name" name="Shop_name" value={formData.Shop_name} onChange={handleInputChange} className="register-input" required /><br />
        
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="register-input" required /><br />
        
        <label htmlFor="phone_no">Phone Number:</label><br />
        <input type="tel" id="phone_no" name="phone_no" value={formData.phone_no} onChange={handleInputChange} className="register-input" required pattern="[0-9]{10}" /><br />
        
        <label htmlFor="License_id">License ID:</label><br />
        <input type="text" id="License_id" name="License_id" value={formData.License_id} onChange={handleInputChange} className="register-input" required /><br />
        
        <label htmlFor="GST_No">GST Number:</label><br />
        <input type="text" id="GST_No" name="GST_No" value={formData.GST_No} onChange={handleInputChange} className="register-input" required pattern="^[A-Z]{3}\d{3}$" placeholder="12ABCDE1234F1Z5" /><br />
        
        <label htmlFor="city">City:</label><br />
        <select id="city" name="city" value={formData.city} onChange={handleInputChange} className="register-input" required>
          <option value="">Select City</option>
          <option value="1">Mumbai</option>
          <option value="2">Pune</option>
          <option value="3">Nagpur</option>
          <option value="4">Nashik</option>
        </select><br />
        
        <label htmlFor="local_area">Local Area:</label><br />
        <input type="text" id="local_area" name="local_area" value={formData.local_area} onChange={handleInputChange} className="register-input" required /><br />
        
        <label htmlFor="pincode">Pincode:</label><br />
        <input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleInputChange} className="register-input" required pattern="[0-9]{6}" /><br />
        
        <input type="submit" value="Register" className={`register-btn${isSubmitted ? ' submitted' : ''}`} />
      </form>
      {isSubmitted && <p className="submit-message">Registration Successful!</p>}
    </div>
  );
};

export default RegisterForm;
