import { Link, Outlet } from "react-router-dom";
import "./AdminHome.css";
export default function SellerHome() {

    return (
        <div>
        <nav className="navbar navbar-expand-sm bg-light mb-3" >
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/updateprofile" className="nav-Link px-3" > Update Profile </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/manageproducts" className="nav-Link px-3" > Manage Products </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/updateoffers" className="nav-Link px-3" > Update Offers </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/orderhistory" className="nav-Link px-3" > Order History </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/orderstatus" className="nav-Link px-3" > Order Status </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/feedback" className="nav-Link px-3" > Feedback </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/AddProductPage" className="nav-Link px-3" >  AddProductPage</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/logout" className="nav-Link px-3" > Logout </Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
            <h1>Seller Home</h1>
        </div>
    )
}