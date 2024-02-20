import { Link, Outlet } from "react-router-dom";
import "./AdminHome.css";
import logo from "./Images/WhatsApp Image 2024-02-19 at 12.12.18_0027a1ac.jpg";
export default function AdminHome() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark mb-3">
                <div className="container-fluid">
                <li className="navbar-brand">
    <Link to="/">
        <img src={logo} alt="Logo" style={{ width: '50px', height: 'auto' }} />
    </Link>
</li>
                    <ul className="navbar-nav">
                  

                        <li className="nav-item">
                            <Link to="approveSeller" className="nav-link px-3">Approve Seller</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="/manageUsers" className="nav-link px-3">Manage Users</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="/viewFeedback" className="nav-link px-3">View Feedback</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="addBrand" className="nav-link px-3">Add Brand</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="addModel" className="nav-link px-3">Add Model</Link> 
                        </li>
                       
                        <li className="nav-item">
                            <Link to="/logout" className="nav-link px-3">Logout</Link> 
                        </li>
                    </ul>
                </div>
            </nav>

            <h1>Admin Home</h1>
            <Outlet />
        </div>
    );
}
