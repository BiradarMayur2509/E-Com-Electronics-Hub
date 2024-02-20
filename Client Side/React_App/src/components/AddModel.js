import React, { useState, useEffect } from 'react';

const AddModel = () => {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [modelName, setModelName] = useState('');
  const [basePrice, setBasePrice] = useState('');
  const [description, setDescription] = useState('');

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
    // Make API call to save the model
    const modelData = {
      brandId: selectedBrand,
      modelName: modelName,
      basePrice: basePrice,
      description: description
    };

    fetch('http://localhost:8080/api/models', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(modelData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Model saved successfully:', data);
        // Optionally, update UI or show a success message
      })
      .catch(error => {
        console.error('Error saving model:', error);
        // Optionally, handle error and display an error message
      });
  };

  return (
    <div>
      <h2>Add Model</h2>
      <div className="form-group">
        <label htmlFor="brand">Select Brand:</label>
        <select id="brand" className="form-control" value={selectedBrand} onChange={e => setSelectedBrand(e.target.value)}>
          <option value="">Select Brand</option>
          {brands.map(brand => (
            <option key={brand.id} value={brand.id}>{brand.name}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="modelName">Model Name:</label>
        <input type="text" id="modelName" className="form-control" value={modelName} onChange={e => setModelName(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="basePrice">Base Price:</label>
        <input type="number" id="basePrice" className="form-control" value={basePrice} onChange={e => setBasePrice(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea id="description" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={handleSave}>Save</button>
    </div>
  );
};

export default AddModel;
