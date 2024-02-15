import React, { useState, useEffect } from 'react';

function ConsumerRegistration() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [cityName, setCityName] = useState('');
  // Other form fields state

  useEffect(() => {
    // Fetch cities from backend API
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      const response = await fetch('/api/cities');
      if (!response.ok) {
        throw new Error('Failed to fetch cities');
      }
      const data = await response.json();
      setCities(data);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  const handleCityChange = async (e) => {
    const selectedCityId = e.target.value;
    setSelectedCity(selectedCityId);
    // Fetch city name based on selectedCityId
    try {
      const response = await fetch(`/api/cities/${selectedCityId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch city name');
      }
      const data = await response.json();
      setCityName(data.c_name);
    } catch (error) {
      console.error('Error fetching city name:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <h1>Consumer Registration</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="city">Select City:</label>
          <select id="city" value={selectedCity} onChange={handleCityChange}>
            <option value="">Select a city</option>
            {cities.map(city => (
              <option key={city.c_id} value={city.c_id}>{city.city_name}</option>
            ))}
          </select>
          {cityName && <p>Selected City: {cityName}</p>}
        </div>
        {/* Other form fields */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default ConsumerRegistration;
