import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddBrand.css';

const AddBrand = () => {
  const [brands, setBrands] = useState([]);
  const [brandName, setBrandName] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/brands')
      .then(response => response.json())
      .then(data => {
        setBrands(data);
      })
      .catch(error => {
        console.error('Error fetching brands:', error);
      });
  }, []);

  const handleSave = () => {
    fetch('http://localhost:8080/api/brands', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: brandName }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Brand saved successfully:', data);
        // Optionally, update UI or show a success message
      })
      .catch(error => {
        console.error('Error saving brand:', error);
        // Optionally, handle error and display an error message
      });
  };

  return (
    <div className="add-brand-container">
      <h2>Add Brand</h2>
      <input
        type="text"
        value={brandName}
        onChange={e => setBrandName(e.target.value)}
        placeholder="Enter brand name"
        className="form-control add-brand-input"
      />
      <button onClick={handleSave} className="btn btn-primary">Save</button>
    </div>
  );
};

export default AddBrand;
