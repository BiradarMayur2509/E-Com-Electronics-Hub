import { Link, Outlet } from "react-router-dom"
export default function AdminHome() {

    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-light mb-3" >
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="approveSeller" className="nav-Link px-3" > Approve Seller </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="manageUsers" className="nav-Link px-3" > Manage Users </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="viewFeedback" className="nav-Link px-3" > View Feedback </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="addCategory" className="nav-Link px-3" > Add Category </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="vieworders" className="nav-Link px-3" > View Orders </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="addProduct" className="nav-Link px-3" > Add Product </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="logout" className="nav-Link px-3" > Logout </Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
            <h1>Admin Home</h1>
            <Outlet />
        </div>
    )
}