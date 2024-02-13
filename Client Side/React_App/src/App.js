import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import LoginComp from './components/LoginComp';
import ConsumerHome from './components/ConsumerHome';
import AdminHome from './components/AdminHome';
import SellerHome from './components/SellerHome';


function App() {
  return (
    <div className="App">
      <nav className='navbar navbar-expand-sm bg-light mb-3'>
        <div className='container-fluid'> 
          <ul className="nav navbar">
            <li className="nav-item">
              <Link to="/register" className="nav-link px-3">Seller Registration</Link>
            </li>
            <li className="nav-item">
              <Link to="/registercustomer" className="nav-link px-3">Consumer Registration</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link px-3">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
      
      <h1 className='bg-primary text-white'>Website Home Page</h1>

      <Routes>
        <Route path='/login' element={<LoginComp />} />
        <Route path="/admin_home" element={<AdminHome />} />
        <Route path="/consumer_home" element={<ConsumerHome />} />
        <Route path="/seller_home" element={<SellerHome />} />

      </Routes>
    </div>
  );
}

export default App;
