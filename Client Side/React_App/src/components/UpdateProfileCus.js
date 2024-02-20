import React, { useState } from 'react';
import './UpdateProfileCus.css';

function UpdateProfileCus() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    phone_no: 0,
    email: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here before submitting
    console.log('Form submitted with data:', formData);
    // You can submit the form data to your backend here
  };

  return (
    <div className='updateprofile container'> {/* Added Bootstrap container class */}
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group"> {/* Added Bootstrap form-group class */}
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-control" 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            id="firstName"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            id="lastName"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNo">Phone Number: </label>
          <input
            type="number"
            id="phoneNo"
            name="phone_no"
            value={formData.phone_no}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        {/* Add more fields as needed */}
        <button type="submit" className="btn btn-primary">Submit</button> {/* Added Bootstrap btn and btn-primary classes */}
      </form>
    </div>
  );
}

export default UpdateProfileCus;
