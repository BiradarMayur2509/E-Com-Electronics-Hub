import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import MyComponent from './components/MyComponent'; // Import your component
import RegisterComp from './components/register';

const Navbar = () => {
  return (
    <div className="App">
      <ul className="nav navbar">
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            REGISTER
          </Link>
        </li>
      </ul>
      <Routes>
        <Route path="/MyComponent" element={<MyComponent />} />
        <Route path="/register" element={<RegisterComp />} />
      </Routes>
      <MyComponent></MyComponent>
    </div>
  );
};

export default Navbar;
