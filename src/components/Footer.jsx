import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div style={{ backgroundColor: 'rgb(255, 123, 0)', color: 'black' }} className="mt-1 container-fluid">
      <div className="container pt-5 pb-4">
        <div className="d-flex justify-content-between flex-wrap">
          {/* Brand Section */}
          <div style={{ maxWidth: '400px' }} className="mb-4">
            <Link style={{ textDecoration: "none", color: "black", fontWeight: "700", fontSize: "25px" }} to={'/'}>
              <h2>
                <i className="fa-solid fa-utensils icons me-2 text-light"></i>
                Everyday Eats
              </h2>
            </Link>
            <p className="mt-3">
              "Experience the joy of delicious meals at your fingertips! Everyday Eats offers a wide range of dishes to satisfy your cravings, whether you're dining in or on the go."
            </p>
          </div>

          {/* Links Section */}
          <div className="mb-4">
            <h4 style={{ fontWeight: "600", fontSize: "20px" }}>Quick Links</h4>
            <ul className="list-unstyled">
              <li><Link style={{ textDecoration: "none", color: "black" }} to={'/'}>Home</Link></li>
              <li><Link style={{ textDecoration: "none", color: "black" }} to={'/menu'}>Menu</Link></li>
              <li><Link style={{ textDecoration: "none", color: "black" }} to={'/about'}>About Us</Link></li>
              <li><Link style={{ textDecoration: "none", color: "black" }} to={'/contact'}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="mb-4">
            <h4 style={{ fontWeight: "600", fontSize: "20px" }}>Resources</h4>
            <ul className="list-unstyled">
              <li><Link style={{ textDecoration: "none", color: "black" }} to={'/docs/react'}>React</Link></li>
              <li><Link style={{ textDecoration: "none", color: "black" }} to={'/docs/bootstrap'}>React Bootstrap</Link></li>
              <li><Link style={{ textDecoration: "none", color: "black" }} to={'/docs/router'}>React Router</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mb-4">
            <h4 style={{ fontWeight: "600", fontSize: "20px" }}>Stay Connected</h4>
            <div className="d-flex align-items-center mb-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control me-2"
                style={{ maxWidth: '200px', color: 'black' }}
              />
              <button className="btn btn-light"><i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="d-flex gap-3">
              <a href="mailto:support@everydayeats.com" className="text-black"><i className="fa-solid fa-envelope"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black"><i className="fa-brands fa-twitter"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-black"><i className="fa-brands fa-github"></i></a>
              <a href="tel:+1234567890" className="text-black"><i className="fa-solid fa-phone"></i></a>
            </div>
          </div>
        </div>
        <hr style={{ borderColor: 'black' }} />
        <div className="text-center pt-2">
          <p className="mb-0">&copy; 2024 Everyday Eats. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
