import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Table, Button } from 'react-bootstrap';
import './Navbarapprove.css';

export default function ApproveSeller2() {
  const [sellers, setSellers] = useState([]);
  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    // Fetch data for pending sellers
    fetchPendingSellers();
  }, []);

  const fetchPendingSellers = async () => {
    try {
      const response = await fetch("http://localhost:8080/pendingSellers"); // Assuming this endpoint returns pending sellers
      const data = await response.json();

      setSellers(data);
    } catch (error) {
      console.error("Error fetching pending sellers:", error);
    }
  };

  const handleApprove = async (id) => {
    try {
      // Update seller status to approved (1) in the backend
      await fetch(`http://localhost:8080/approveSeller/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: 1 }),
      });

      // Fetch updated list of pending sellers after approval
      fetchPendingSellers();
    } catch (error) {
      console.error("Error approving seller:", error);
    }
  };

  const handleReject = async (id) => {
    try {
      // Update seller status to rejected (0) in the backend
      await fetch(`http://localhost:8080/rejectSeller/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: 0 }),
      });

      // Fetch updated list of pending sellers after rejection
      fetchPendingSellers();
    } catch (error) {
      console.error("Error rejecting seller:", error);
    }
  };

  return (
    <div>
     <nav className="navbar navbar-expand-sm navbar-light bg-dark">
  <div className="container-fluid">
    <div className="navbar-nav">
      <div className="nav-item">
        <input className="form-control form-control-sm me-2" type="text" placeholder="Search" />
      </div>
      <div className="nav-item">
        <Link className="nav-link" to="/removeseller">Remove seller</Link>
      </div>
      <div className="nav-item">
        <Link className="nav-link" to="/editseller">Edit seller details</Link>
      </div>
      <div className="nav-item">
        <Link className="nav-link" to="/logout">Logout</Link>
      </div>
    </div>
  </div>
</nav>


      <h1 className="text-center mt-4">System Admin Homepage</h1>

      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Shop Name</th>
            <th>Phone No</th>
            <th>License No</th>
            <th>Seller Email</th>
            <th>Seller Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sellers.map((seller) => (
            <tr key={seller.id}>
              <td>{seller.shop_name}</td>
              <td>{seller.phone_no}</td>
              <td>{seller.license_no}</td>
              <td>{seller.email}</td>
              <td>{seller.address}</td>
              <td>
                <Button variant="success" onClick={() => handleApprove(seller.id)}>Approve</Button>{' '}
                <Button variant="danger" onClick={() => handleReject(seller.id)}>Reject</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );}
