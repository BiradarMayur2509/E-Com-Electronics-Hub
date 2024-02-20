import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import LoginComp from './components/LoginComp';
import ConsumerHome from './components/ConsumerHome';
import AdminHome from './components/AdminHome';
import SellerHome from './components/SellerHome';
<<<<<<< Updated upstream
=======
import { useSelector } from 'react-redux';
import SellerReg from './components/SellerReg';
import ConsumerReg from './components/ConsumerReg'
import UpdateProfile from './components/UpdateProfile';
import SearchProducts from './components/SearchProducts';
import AddToCart from './components/AddToCart';
import ConfirmOrder from './components/ConfirmOrder';
import ApproveSeller2 from './components/ApproveSeller2';
import UpdatePass from './components/UpdatePass';
import HomeSlideShow from './components/HomeSlideShow';
import NavBar from './components/NavBar';
import AnimatedHeading from './components/AnimatedHeading';
import AddProductPage from './components/AddProductPage';
import ViewUsers from './components/ViewProducts';
import ViewProducts from './components/ViewProducts';
import ShowProducts from './components/ShowProducts';

>>>>>>> Stashed changes


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
        <Route path="/consumer_home" element={<ConsumerHome />} >
          <Route path="searchproducts" element={<ViewProducts />} />
          <Route path="showProducts" element={<ShowProducts />} />

        </Route>
        <Route path="/seller_home" element={<SellerHome />} />
<<<<<<< Updated upstream
=======
        <Route path="/updateprofile" element={<UpdatePass />} />
        {/* <Route path="/updateprofile" element={<UpdateProfile />} /> */}
        {/* <Route path="/searchproducts" element={<SearchProducts />} /> */}
        <Route path="/addcart" element={<AddToCart />} />
        <Route path="/confirmorder" element={<ConfirmOrder />} />
        <Route path="/approveSeller" element={<ApproveSeller2 />} />
        <Route path="/logout" element={<LoginComp />} />
        <Route path="/AddProductPage" element={<AddProductPage />} />
        

>>>>>>> Stashed changes

      </Routes>
    </div>
  );
}

export default App;
