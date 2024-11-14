import React from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const AdminHeader = () => {

    
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
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-light" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <FaUserCircle className="me-1" />
                Admin
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminHeader;
