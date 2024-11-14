import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';



const Header = ({insideHome,insideCart,insideWishlist,insideLanding,insideAuth,insideCheckout}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className='header-section'>
     <nav className="navbar navbar-expand-lg header" data-bs-theme="light">
  <div className="container-fluid">
    <a className="navbar-brand logo-head" href="/"><i  className="fa-solid fa-utensils icons text-light"></i><h1 style={{display:'inline-block',fontFamily:'"Cookie", serif'}}>Everyday Eats</h1></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul style={{marginRight:'280px'}} className="navbar-nav mt-2">
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
          <a className="nav-link " href="#menu"><p className='header-menu'>Menu</p></a> 
        </li>
        
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><p>Dropdown</p></a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Separated link</a>
          </div>
        </li> */}
      </ul>
      { insideHome && <form style={{marginLeft:'-200px'}} className="d-flex">
        <input className="form-control " type="search" placeholder="Search"/>
        <button className="btn btn-light " type="submit" fdprocessedid="ocxvp">Search</button>

        
       
      </form>}
        <div className='d-flex flex-row'>
          <div className='d-flex flex-row mt-2 ms-5'>
              <Link to={'/wishlist'} style={{fontFamily:'"Playfair Display", serif',fontSize:'15px',width:'100px',display:'inline-block',textDecoration:'none'}} className='text-light fw-bolder'> 
              <i className="fa-solid fa-heart text-red"></i> Wishlist <span className="rounded bg-black ">0</span> </Link>
           </div>
           <div className='d-flex flex-row mt-2 ms-3'>
              <Link to={'/cart'} style={{fontFamily:'"Playfair Display", serif',fontSize:'15px',width:'100px',display:'inline-block',textDecoration:'none'}} className='text-light  fw-bolder'> 
              <i className="fa-solid fa-cart-plus text-green"></i> Cart <span className="rounded bg-black ">0</span> </Link>
           </div>
        </div>

      { !insideCart && !insideWishlist && !insideLanding && !insideAuth && !insideCheckout && <Link to={'/login'} className='bg-light ps-3  rounded border' style={{textDecoration:'none',width:'80px',color:'orange'}}  >Sign In</Link>}

        { insideLanding &&
        <div className="ms-auto">
          <button  className="btn btn-link fw-bolder">Logout <i className="fa-solid fa-right-from-bracket ms-1"></i> </button>
        </div>
      }

       
    </div>
  </div>
      </nav>
    </section>
  )
}

export default Header