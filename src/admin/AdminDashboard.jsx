import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllFoodAPI, getRecentOrdersAPI, getAdminStatsAPI, foodRemoveAPI } from '../services/allAPI';
import EditFood from './EditFood';
import { editFoodResponseContext } from '../contexts/ContextApi';

const AdminDashboard = () => {
  const { editFoodResponse, setEditFoodResponse } = useContext(editFoodResponseContext);
  const [allFoods, setAllFoods] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [recentOrders, setRecentOrders] = useState([]);
  const [adminStats, setAdminStats] = useState({ totalOrders: 0, totalUsers: 0, totalRevenue: 0 });
  const [selectedOrder, setSelectedOrder] = useState(null); // State to store selected order

  useEffect(() => {
    getAllFoodDetails();
    getRecentOrders();
    fetchAdminStats();
  }, [editFoodResponse]);

  const getAllFoodDetails = async () => {
    const token = sessionStorage.getItem('token');
    if (token) {
      const reqHeader = { 'Authorization': `Bearer ${token}` };
      try {
        const result = await getAllFoodAPI(reqHeader);
        if (result.status === 200) {
          setAllFoods(result.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const getRecentOrders = async () => {
    const token = sessionStorage.getItem('token');
    if (token) {
      const reqHeader = { Authorization: `Bearer ${token}` };
      try {
        const result = await getRecentOrdersAPI(reqHeader);
        setRecentOrders(result.data); // Assuming `result` contains the orders array
      } catch (error) {
        console.error('Error fetching recent orders:', error);
      }
    }
  };

  const fetchAdminStats = async () => {
    const token = sessionStorage.getItem('token');
    if (token) {
      const reqHeader = { Authorization: `Bearer ${token}` };
      try {
        const stats = await getAdminStatsAPI(reqHeader);
        setAdminStats(stats.data);
      } catch (error) {
        console.error('Error fetching admin stats:', error);
      }
    }
  };

  const deleteFood = async (id) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      const reqHeader = { 'Authorization': `Bearer ${token}` };
      try {
        await foodRemoveAPI(id, reqHeader);
        getAllFoodDetails();
      } catch (error) {
        console.error(error);
      }
    }
  };

  // Show modal with selected order details
  const handleShowOrderDetails = (order) => {
    setSelectedOrder(order); // Set the selected order
    setShowModal(true); // Show the modal
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedOrder(null); // Clear selected order when closing modal
  };
  
  return (
    <>
      <AdminHeader />
      <div style={{ backgroundColor: 'rgb(234, 235, 237)' }} className="container-fluid p-4">
        <h1 className="text-center mb-4">Admin Dashboard</h1>
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3">
            <div className="list-group">
              <a style={{ backgroundColor: 'orange' }} href="#overview" className="list-group-item list-group-item-action active">
                Overview
              </a>
              <a href="#manage-foods" className="list-group-item list-group-item-action">Manage Foods</a>
              <a href="#orders" className="list-group-item list-group-item-action">View Orders</a>
              <a href="#users" className="list-group-item list-group-item-action">User Management</a>
              <a href="#reports" className="list-group-item list-group-item-action">Reports</a>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-md-9">
            {/* Overview Section */}
            <section id="overview">
              <div className="card mb-4">
                <div style={{ backgroundColor: 'orange' }} className="card-header">
                  <h2>Overview</h2>
                </div>
                <div style={{ backgroundColor: 'rgb(234, 235, 237)' }} className="card-body">
                  <p>Total Orders: <strong>{adminStats.totalOrders}</strong></p>
                  <p>Total Users: <strong>{adminStats.totalUsers}</strong></p>
                  <p>Total Revenue: <strong>₹{adminStats.totalRevenue.toFixed(2)}</strong></p>
                </div>
              </div>
            </section>

            {/* Manage Foods Section */}
            <section id="manage-foods">
              <div className="card mb-4">
                <div style={{ backgroundColor: 'orange' }} className="card-header">
                  <h2>Manage Foods</h2>
                  <Link style={{ textDecoration: 'none', color: 'orangered' }} to={'/adminaddfood'} className="btn bg-white float-end">
                    Add New Food
                  </Link>
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
                      {allFoods.length > 0 ? (
                        allFoods.map((food, index) => (
                          <tr key={food._id}>
                            <td>{index + 1}</td>
                            <td>{food.foodName}</td>
                            <td>₹{food.price}</td>
                            <td>20</td>
                            <td>
                              <div style={{ display: 'inline-block' }}>
                                <EditFood food={food} />
                              </div>
                              <button onClick={() => deleteFood(food._id)} className="btn text-danger">
                                <i className="fa-solid fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr><td colSpan="5" className="text-center">No Foods Available</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Orders Section */}
            <section id="orders">
              <div className="card mb-4">
                <div style={{ backgroundColor: 'orange' }} className="card-header">
                  <h2>Recent Orders</h2>
                </div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Customer Email</th>
                        <th>Total Amount</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.length > 0 ? (
                        recentOrders.map((order) => (
                          <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.name || 'Unknown'}</td>
                            <td>{order.userId?.email || 'N/A'}</td>
                            <td>₹{order.totalAmount.toFixed(2)}</td>
                            <td>
                              <span className={`badge bg-${order.status === 'Completed' ? 'success' : 'warning'}`}>
                                {order.status}
                              </span>
                            </td>
                            <td>
                              <button onClick={() => handleShowOrderDetails(order)} className="btn btn-info btn-sm">
                                Details
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr><td colSpan="6" className="text-center">No recent orders found</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Modal for Order Details */}
      {showModal && selectedOrder && (
        <div style={{ backgroundColor: 'orange' }} className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Order Details</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <p>Order ID: {selectedOrder._id}</p>
                <p>Customer Name: {selectedOrder.name}</p>
                <p>Order Date: {new Date(selectedOrder.createdAt).toLocaleDateString()}</p>
                <p>Status: {selectedOrder.status}</p>
                <p>Items:</p>
                <ul>
                  {selectedOrder.items.map((item, index) => (
                    <li key={index}>
                      {item.name} - ${item.price} x {item.quantity}
                    </li>
                  ))}
                </ul>
                <p>Total Amount: ${selectedOrder.totalAmount.toFixed(2)}</p>
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
