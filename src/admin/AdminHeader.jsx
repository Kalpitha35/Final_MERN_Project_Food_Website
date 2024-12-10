import React, { useContext } from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { tokenAuthContext } from '../contexts/AuthContextApi';

const AdminHeader = () => {
  const {isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    // Clear user session (localStorage/sessionStorage/cookies)
    sessionStorage.removeItem('token'); // Example: remove token
    sessionStorage.removeItem('user');  // Example: remove user data
    setIsAuthorised(false)
    // Redirect to login or home page
    navigate('/login');
  };

    
  return (
    <nav style={{backgroundColor:'orange'}} className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid">
        <Link to={'/admindashboard'} className="navbar-brand" href="#">Admin Dashboard</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <form className="d-flex mx-auto">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">
              <FaSearch />
            </button>
          </form>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="btn btn-link text-light nav-link">
                <FaBell />
              </button>
            </li>
            <li className="nav-item">
              <Link to={'/'} className="btn btn-link text-light nav-link">
               Home
              </Link>
            </li>
            <li>
              <Dropdown>
                 <Dropdown.Toggle variant="light" id="dropdown-basic">
                 <FaUserCircle className="me-1" /> Admin</Dropdown.Toggle>
  
                 <Dropdown.Menu>
                 {/* <Dropdown.Item href="#">Profile</Dropdown.Item>
                 <Dropdown.Item href="#">Settings</Dropdown.Item>
                 <Dropdown.Divider /> */}
                 <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                 </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminHeader;
