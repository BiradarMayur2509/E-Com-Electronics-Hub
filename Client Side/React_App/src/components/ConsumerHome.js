import { Link, Outlet } from "react-router-dom";
import "./AdminHome.css";
export default function ConsumerHome() {

    return (
        <div>
        <nav className="navbar navbar-expand-sm bg-light mb-3" >
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="updateprofileCus" className="nav-Link px-3" > Update Profile </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="searchproducts" className="nav-Link px-3" > Search Products </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="addcart" className="nav-Link px-3" > Add Cart </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="confirmorder" className="nav-Link px-3" > Confirm Order </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="trackorder" className="nav-Link px-3" > Track Order </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="feedback" className="nav-Link px-3" > Feedback </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/logout" className="nav-Link px-3" > Logout </Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
            <h1>Consumer Home</h1>
            <Outlet/>
        </div>
    )
}