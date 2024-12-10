import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { tokenAuthContext } from '../contexts/AuthContextApi';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';



const Header = ({ insideHome, insideCart, insideWishlist, insideLanding, insideAuth, insideCheckout }) => {

  const [show, setShow] = useState(false);
  const navigate = useNavigate()
  const { isAuthorised, setIsAuthorised } = useContext(tokenAuthContext)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = () => {
    // Clear user session (localStorage/sessionStorage/cookies)
    sessionStorage.removeItem('token'); // Example: remove token
    sessionStorage.removeItem('user');  // Example: remove user data
    setIsAuthorised(false)
    // Redirect to login or home page
    navigate('/login');
  };
  return (
    <section className='header-section'>
      <nav className="navbar navbar-expand-lg header" data-bs-theme="light">
        <div className="container-fluid">
          <a className="navbar-brand logo-head" href="/"><i className="fa-solid fa-utensils icons text-light"></i><h1 style={{ display: 'inline-block', fontFamily: '"Cookie", serif' }}>Everyday Eats</h1></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul style={{ marginRight: '280px' }} className="navbar-nav mt-2">
              <li className="nav-item ">
                <a className="nav-link active " href="#"><p className='header-menu'>Home</p>
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#about"><p className='header-menu'>About</p></a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#service"><p className='header-menu'>Service</p></a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="menu"><p className='header-menu'>Menu</p></a>
              </li>

             
            </ul>
            {
              insideHome && 
              <form style={{ marginLeft: '-200px' }} className="d-flex">
                <input className="form-control text-white me-2" style={{ opacity: '1',backgroundColor: 'transparent', border: '1px solid #ced4da',  borderRadius: '4px' }} type="search" placeholder="Search"/>

              <button className="btn btn-light text-light" type="submit" style={{ backgroundColor:'transparent', border: '1px solid #ced4da', borderRadius: '4px'}}>Search</button>




            </form>}
            

            {
              !insideCart && !insideWishlist && !insideLanding && !insideAuth && !insideCheckout &&
              <Link to="/login" className="sign-in-btn" style={{ display: 'inline-block', textDecoration: 'none', backgroundColor: '#f8f9fa', color: 'orange', padding: '2px', border: '2px solid orange', borderRadius: '5px', fontWeight: 'bold', textAlign: 'center', width: '80px', marginLeft: '20px', transition: 'all 0.3s ease', }}>Sign In</Link>
            }

            {
              insideLanding &&
              <div style={{ marginLeft: '300px' }}>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    <FaUserCircle className="me-1" /> </Dropdown.Toggle>

                  <Dropdown.Menu>

                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            }

          </div>
        </div>
      </nav>
    </section>
  )
}

export default Header