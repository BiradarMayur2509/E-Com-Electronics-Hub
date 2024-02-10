import React, { useState } from 'react';
import './RegisterForm.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

const RegisterFormForCustomer = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phone_no: '',
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
      email: '',
      phone_no: '',
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
        <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} className="register-input" required pattern="[a-zA-Z0-9@]{5,}" placeholder="Username must be at least 5 characters and contain only letters, numbers, and @" /><br />
        
        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} className="register-input" required /><br />
        
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="register-input" required /><br />
        
        <label htmlFor="phone_no">Phone Number:</label><br />
        <input type="tel" id="phone_no" name="phone_no" value={formData.phone_no} onChange={handleInputChange} className="register-input" required pattern="[0-9]{10}" /><br />
        
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

export default RegisterFormForCustomer;
