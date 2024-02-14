import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import LoginComp from './components/LoginComp';
import ConsumerHome from './components/ConsumerHome';
import AdminHome from './components/AdminHome';
import SellerHome from './components/SellerHome';
import { useSelector } from 'react-redux';
import SellerReg from './components/SellerReg';
import CusReg from './components/CusReg'



function App() {
  //initial state of logged 
  const mystate=useSelector(state=> state.logged);

  return (
    <div className="App">
      <div style={{display: mystate.loggedIn?"none":"block"}}>
        <nav className='navbar navbar-expand-sm bg-light mb-3'>
          <div className='container-fluid'> 
            <ul className="nav navbar">
              <li className="nav-item">
                <Link to="/sellerreg" className="nav-link px-3">Seller Registration</Link>
              </li>
              <li className="nav-item">
                <Link to="/cusreg" className="nav-link px-3">Consumer Registration</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link px-3">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
        <marquee behavior="scroll" direction="left">
  <h1 className='bg-primary text-white'>Welcome to Tritron</h1>
</marquee>  
        {/* <h1 className='bg-primary text-white'>Welcome to Tritron</h1> */}
      </div>
      <Routes>
        <Route path='/login' element={<LoginComp />} />
        <Route path='/sellerreg' element={<SellerReg />} />
        <Route path='/cusreg' element={<CusReg />} />
        <Route path="/admin_home" element={<AdminHome />} />
        <Route path="/consumer_home" element={<ConsumerHome />} />
        <Route path="/seller_home" element={<SellerHome />} />

      </Routes>
    </div>
  );
}

export default App;