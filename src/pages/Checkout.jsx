import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';

const Checkout = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order Submitted');
    // You can add further actions here, like API calls or navigating to a confirmation page
  };

  return (
    <>
       <section style={{marginTop:'-50px'}}> <Header insideCheckout={true}/></section>
        <div style={{paddingTop:'100px'}} className="container my-5">
          <h2>Checkout</h2>
    
          {/* Customer Information Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Shipping Address</label>
              <textarea
                className="form-control"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows="3"
                required
              ></textarea>
            </div>
    
            {/* Payment Method */}
            <div className="mb-3">
              <label className="form-label">Payment Method</label>
              <select
                className="form-select"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              >
                <option value="credit">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="cash">Cash on Delivery</option>
              </select>
            </div>
    
            {/* Checkout Button */}
            <button style={{backgroundColor:'orange'}} type="submit" className="btn  w-100">Complete Purchase</button>
          </form>
        </div>
    </>
  );
};

export default Checkout;
