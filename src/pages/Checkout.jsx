import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import { getCartListAPI, createOrderAPI, clearCartAPI } from '../services/allAPI'; // Ensure createOrderAPI is imported
import SERVER_URL from '../services/serverUrl'; // Ensure correct import
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [orderSubmitted, setOrderSubmitted] = useState(false); // For success state

  useEffect(() => {
    fetchCartDetails();
  }, []);

  const navigate = useNavigate()

  const fetchCartDetails = async () => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      setErrorMessage('User not logged in');
      setLoading(false);
      return;
    }

    try {
      const response = await getCartListAPI(token);
      if (response?.cartItems?.length > 0) {
        setCartItems(response.cartItems);
      } else {
        setErrorMessage('Your cart is empty!');
      }
    } catch (error) {
      console.error('Error fetching cart details:', error);
      setErrorMessage('Failed to load cart details');
    } finally {
      setLoading(false);
    }
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      const price = item.foodId.price || 0;
      const quantity = item.quantity || 0;
      return total + price * quantity;
    }, 0);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validation: Ensure all fields are filled
    if (!name || !email || !address || !cartItems.length) {
      alert('Please fill out all the fields and ensure your cart is not empty.');
      return;
    }
  
    const token = sessionStorage.getItem('token');
    if (!token) {
      alert('User not logged in');
      return;
    }
  
    // Fetch user details from the session storage
    const loggedInUser = JSON.parse(sessionStorage.getItem('user')); // Assuming user details are stored like this
    if (!loggedInUser || !loggedInUser.username || !loggedInUser.email) {
      alert('User details are missing or invalid.');
      return;
    }
  
    // Check if the name or email matches the logged-in user details
    if (loggedInUser.username !== name || loggedInUser.email !== email) {
      alert('You cannot place an order with a different name or email.');
      return;
    }
  
    // Prepare the order data
    const orderData = {
      name,
      email,
      shippingAddress: address,
      cartItems: cartItems.map(item => ({
        foodId: item.foodId._id,
        quantity: item.quantity,
      })),
      totalAmount: calculateTotalAmount(),
      paymentMethod,
    };
  
    console.log("Order Data:", JSON.stringify(orderData, null, 2));
  
    try {
      const result = await createOrderAPI(orderData, token);
      if (result && result.order) {
        alert('Order placed successfully!');
        // Clear the cart
      await clearCartAPI(token);

        setCartItems([]);
        setOrderSubmitted(true);
        setErrorMessage('');
        // Redirect to confirmation page with order details
      navigate('/order-confirm', { state: { order: result.order } });
      } else {
        alert('Failed to place the order. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the order:', error);
      alert('Failed to place the order. Please try again.');
    }
  };
  
  
  

  
  
    
  
  return (
    <>
      <Header insideCheckout={true} />
      <div style={{ paddingTop: '100px', paddingBottom: '50px' }} className="container-fluid">
        <h2 className="text-center mb-4">Checkout</h2>
        {loading ? (
          <div className="text-center">Loading billing details...</div>
        ) : errorMessage ? (
          <div className="alert alert-danger text-center">{errorMessage}</div>
        ) : (
          <>
            {/* Billing Details Section */}
            <div className="card shadow mb-4">
              <div className="card-header bg-warning text-white">
                <h4 className="mb-0">Billing Details</h4>
              </div>
              <div className="card-body">
                {cartItems.map((item, index) => (
                  <div
                    key={item.foodId._id || index}
                    className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2"
                  >
                    <div className="d-flex align-items-center">
                      <img
                        src={item.foodId.foodImg ? `${SERVER_URL}/uploads/${item.foodId.foodImg}` : 'placeholder.jpg'}
                        alt={item.foodId.foodName || 'Food'}
                        className="img-fluid rounded"
                        style={{ width: '80px', height: '80px', objectFit: 'cover', marginRight: '15px' }}
                      />
                      <div>
                        <h5 className="mb-1">{item.foodId.foodName || 'N/A'}</h5>
                        <p className="mb-0 text-muted">
                          ₹ {item.foodId.price || 0} x {item.quantity || 0}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-primary">₹ {(item.foodId.price || 0) * (item.quantity || 0)}</h5>
                    </div>
                  </div>
                ))}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <h4>Total:</h4>
                  <h4 className="text-success">₹ {calculateTotalAmount()}</h4>
                </div>
              </div>
            </div>

            {/* Customer Information Form */}
            <div className="card shadow">
              <div className="card-header bg-warning text-white">
                <h4 className="mb-0">Customer Information</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
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
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
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
                    <label htmlFor="address" className="form-label">
                      Shipping Address
                    </label>
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

                  {/* Submit Button */}
                  <button
                    style={{ backgroundColor: 'orange' }}
                    type="submit"
                    className="btn w-100 btn-lg text-white"
                  >
                    Complete Purchase
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Checkout;
