import React, { useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [isCheckoutClicked, setIsCheckoutClicked] = useState(false);

  const handleCheckoutClick = () => {
    setIsCheckoutClicked(true);
  };

  return (
    <>
      <Header insideCart={true} />
      <div style={{ paddingTop: '100px',paddingBottom:'50px' }} className="container-fluid px-4 mx-auto">
        <h1 style={{fontFamily:'"Playfair Display", serif',fontSize:'35px'}} className="display-4 text-center text-dark fw-bold mb-5">Cart Summary</h1>
        <div className="row mt-4">
          {/* Left Side: Cart Table */}
          <div className="col-12 border rounded shadow-lg p-4 mb-4">
            <table className="table table-hover">
              <thead className="thead-light">
                <tr>
                  <th scope="col" className="fw-semibold">#</th>
                  <th scope="col" className="fw-semibold">Name</th>
                  <th scope="col" className="fw-semibold">Image</th>
                  <th scope="col" className="fw-semibold">Quantity</th>
                  <th scope="col" className="fw-semibold">Price</th>
                  <th scope="col" className="fw-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td>Cheeseburger</td>
                  <td>
                    <img 
                      width="70" 
                      height="70" 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqVUKiNFLkMObi4Lu14GMRhReGvTJEVDWcg&s" 
                      alt="Product Image" 
                      className="rounded-circle shadow-sm"
                    />
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <button className="btn btn-outline-dark fw-bold px-3 py-2">-</button>
                      <input 
                        type="number" 
                        className="form-control mx-2" 
                        style={{ width: '60px' }} 
                        value={1}
                      />
                      <button className="btn btn-outline-dark fw-bold px-3 py-2">+</button>
                    </div>
                  </td>
                  <td>$15.99</td>
                  <td>
                    <button className="btn text-danger">
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex justify-content-end mt-3">
              <button className="btn btn-danger me-2 px-4 py-2">EMPTY CART</button>
              <a className="btn btn-primary px-4 py-2" href="/landing">SHOP MORE</a>
            </div>
          </div>
        </div>

        {/* Checkout Section: Now at the bottom */}
        <div className="row justify-content-center">
  {/* Checkout Section with Half Width, Centered */}
  <div className="col-12 col-md-6 border rounded shadow-lg p-4 text-center">
    <h2 className="fw-bold">Total Amount: <span className="text-danger">$1000</span></h2>
    <hr />
    {/* Link to Checkout Page with smaller button */}
    <Link
      to="/checkout"
      style={{
        width: 'auto', // Automatically adjust width
        fontSize: '16px', // Smaller font size for the button
        padding: '10px 20px', // Adjust padding for a smaller button
      }}
      className="btn btn-success mt-4"
    >
      Proceed to Checkout
    </Link>
  </div>
</div>


      </div>
    </>
  );
};

export default Cart;
