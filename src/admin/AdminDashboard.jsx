import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const AdminDashboard = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (

   <>
   <AdminHeader/>
      <div style={{backgroundColor:'rgb(234, 235, 237)'}} className="container-fluid p-4">
        <h1 className="text-center mb-4">Admin Dashboard</h1>
        <div className="row">
          {/* Sidebar */}
          <div  className="col-md-3">
            <div  className="list-group">
              <a style={{backgroundColor:'orange'}}  href="#overview" className="list-group-item list-group-item-action active">Overview</a>
              <a href="#manage-foods" className="list-group-item list-group-item-action">Manage Foods</a>
              <a href="#orders" className="list-group-item list-group-item-action">View Orders</a>
              <a href="#users" className="list-group-item list-group-item-action">User Management</a>
              <a href="#reports" className="list-group-item list-group-item-action">Reports</a>
            </div>
          </div>
  
          {/* Main Content */}
          <div className="col-md-9">
            {/* Overview Section */}
            <section  id="overview">
              <div className="card mb-4 ">
                <div style={{backgroundColor:'orange'}} className="card-header">
                  <h2>Overview</h2>
                </div>
                <div style={{backgroundColor:'rgb(234, 235, 237)'}} className="card-body">
                  <p>Total Orders: <strong>150</strong></p>
                  <p>Total Revenue: <strong>$5000</strong></p>
                  <p>Registered Users: <strong>300</strong></p>
                </div>
              </div>
            </section>
  
            {/* Manage Foods Section */}
            <section id="manage-foods">
              <div className="card mb-4">
                <div style={{backgroundColor:'orange'}}  className="card-header">
                  <h2>Manage Foods</h2>
                  <Link style={{textDecoration:'none',color:'orangered'}} to={'/adminaddfood'} className="btn bg-white  float-end">Add New Food</Link>
                </div>
                <div className="card-body">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Food Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Sample Data */}
                      <tr>
                        <td>1</td>
                        <td>Cheese Pizza</td>
                        <td>$12.99</td>
                        <td>20</td>
                        <td>
                          <button className="btn btn-primary btn-sm me-2">Edit</button>
                          <button className="btn btn-danger btn-sm">Delete</button>
                        </td>
                      </tr>
                      {/* Additional rows can be added here */}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
  
            {/* Orders Section */}
            <section id="orders">
              <div className="card mb-4">
                <div style={{backgroundColor:'orange'}}  className="card-header">
                  <h2>Recent Orders</h2>
                </div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Total Amount</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Sample Order Data */}
                      <tr>
                        <td>101</td>
                        <td>John Doe</td>
                        <td>$45.00</td>
                        <td><span className="badge bg-success">Completed</span></td>
                        <td>
                          <button onClick={handleShowModal} className="btn btn-info btn-sm">Details</button>
                        </td>
                      </tr>
                      {/* Additional rows can be added here */}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

       {/* Modal */}
       {showModal && (
        <div style={{backgroundColor:'orange'}} className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Order Details</h5>
                <button type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <p>Order ID: 12345</p>
                <p>Customer Name: John Doe</p>
                <p>Order Date: 2024-11-12</p>
                <p>Status: Delivered</p>
                <p>Items:</p>
                <ul>
                  <li>Item 1 - $10.00</li>
                  <li>Item 2 - $15.00</li>
                  {/* Add more items as needed */}
                </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
   </>
  );
};

export default AdminDashboard;
