import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import LoginComp from './components/LoginComp';
import ConsumerHome from './components/ConsumerHome';
import AdminHome from './components/AdminHome';
import SellerHome from './components/SellerHome';
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



function App() {
  //initial state of logged 
  const mystate=useSelector(state=> state.logged);

  return (
    <div className="App">
      <div style={{display: mystate.loggedIn?"none":"block"}}>
        <NavBar/>
        <AnimatedHeading />
        


        {/* <marquee behavior="scroll" direction="left">
        <h1 style={{ backgroundColor: '#f0f0f1', padding: '10px' }}>Welcome to Tritron</h1>

</marquee>   */}
        {/* <h1 className='bg-primary text-white'>Welcome to Tritron</h1> */}
        <HomeSlideShow/>
      </div>
      <Routes>
        <Route path='/login' element={<LoginComp />} />
        <Route path='/sellerreg' element={<SellerReg />} />
        <Route path='/consumerreg' element={<ConsumerReg />} />
        <Route path="/admin_home" element={<AdminHome />} />
        <Route path="/consumer_home" element={<ConsumerHome />} />
        <Route path="/seller_home" element={<SellerHome />} />
        <Route path="/updateprofile" element={<UpdatePass />} />
        {/* <Route path="/updateprofile" element={<UpdateProfile />} /> */}
        {/* <Route path="/searchproducts" element={<SearchProducts />} /> */}
        <Route path="/addcart" element={<AddToCart />} />
        <Route path="/confirmorder" element={<ConfirmOrder />} />
        <Route path="/approveSeller" element={<ApproveSeller2 />} />
        <Route path="/logout" element={<LoginComp />} />
        <Route path="/AddProductPage" element={<AddProductPage />} />
        <Route path="/searchproducts" element={<ViewUsers />} />


      </Routes>
    </div>
  );
}

export default App;