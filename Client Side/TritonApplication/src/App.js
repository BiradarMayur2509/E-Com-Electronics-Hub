// src/App.js

import React from 'react';
import { BrowserRouter, Route,Link,Routes } from 'react-router-dom';
import MyComponent from './components/MyComponent'; // Import your component
import RegisterComp from './components/register';
import RegisterFormForCustomer from './components/registerformforcustomer';
import LoginForm from './components/login';



const App = () => {
  return (
    <div className="App">
      <MyComponent></MyComponent>
      
      <ul className="nav navbar">
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              SELLER REGISTER
            </Link>    
          </li>
          <li className="nav-item">
            <Link to="/registercustomer" className="nav-link">
              CUSTOMER REGISTER
            </Link>    
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              LOGIN
            </Link>    
          </li>
      </ul>
      <Routes>
      <Route path="/MyComponent" element={<MyComponent />} />
      <Route path="/register" element={<RegisterComp />} />
      <Route path="/registercustomer" element={<RegisterFormForCustomer />} />
      <Route path="/login"element={<LoginForm />}/>
      </Routes>
      
    </div>
  );
};

export default App;
