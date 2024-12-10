import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { addToCartAPI, getSingleFoodAPI } from '../services/allAPI';
import SERVER_URL from '../services/serverUrl';
import Otherfoods from '../components/Otherfoods';
import { CartContext } from '../contexts/CartProvider';
import { useUserContext } from '../contexts/UserContext';

const View = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [showCartPopup, setShowCartPopup] = useState(false); // Popup visibility state
  const [food, setFood] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { currentUser, setCurrentUser } = useUserContext();

  // Populate currentUser from sessionStorage on mount
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const userId = sessionStorage.getItem('userId');
    if (token && userId) {
      setCurrentUser({ id: userId });
    }
  }, []);

  useEffect(() => {
    viewFoodDetails();
  }, [id]);

  useEffect(() => {
    setSuccessMessage('');
    setShowCartPopup(false);
  }, [id]);

  const viewFoodDetails = async () => {
    try {
      const result = await getSingleFoodAPI(id);
      if (result.status === 200) {
        setFood(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

 
  const handleAddToCart = async () => {
    const token = sessionStorage.getItem('token');
    const user = sessionStorage.getItem('user');
    const userId = currentUser?.id || (user && JSON.parse(user).id);
  
    if (!token) {
      alert('Please sign in to your account!');
      navigate('/login');
      return;
    }
  
    if (!userId) {
      alert('User ID is not available. Please refresh or re-login.');
      return;
    }
  
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');
  
    const reqBody = { userId, foodId: food?._id, quantity: 1 };
    const reqHeader = { Authorization: `Bearer ${token}` };
  
    try {
      const response = await addToCartAPI(reqBody, reqHeader);
      
      // Make sure the response contains the updated cart data
      if (response?.cart) {
        setSuccessMessage('Item added to cart successfully!');
        setShowCartPopup(true);
  
        // Optionally update the cart context or local state to reflect the new cart
        addToCart(response.cart);
      } else {
        setErrorMessage('Failed to add item to cart.');
      }
    } catch (error) {
      setErrorMessage(error.message || 'Unable to add item to cart.');
    } finally {
      setLoading(false);
    }
  };
  
 
  
  return (
    <>
      <Header />
      <br /><br />
      <div className="container-fluid py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center">
            <img
              src={`${SERVER_URL}/uploads/${food?.foodImg}`}
              alt={food?.foodName || 'Food Item'}
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>
          <div className="col-lg-6 mt-4">
            <div className="d-flex flex-column gap-3">
              <h1 className="fw-bold">{food?.foodName || 'Delicious Food'}</h1>
              <p className="text-danger fw-bold">₹ {food?.price || '0'}</p>
              <p>
                <i className="fa-solid fa-star text-success me-2"></i>
                <span>4.5 (1200+ Ratings)</span>
              </p>
              <p>{food?.description || 'Enjoy this tasty dish!'}</p>
              <button
                onClick={handleAddToCart}
                // disabled={!currentUser || loading}
                className="btn btn-warning text-white fw-bold"
              >
                {loading ? 'Adding to Cart...' : 'Add to Cart'}
              </button>
              {successMessage && <p className="text-success">{successMessage}</p>}
              {errorMessage && <p className="text-danger">{errorMessage}</p>}
            </div>
          </div>
        </div>
        <hr />
        <Otherfoods id={id} />
      </div>
      {showCartPopup && (
        <div
          className="cart-popup"
          style={{
            position: 'fixed',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#28a745',
            color: '#fff',
            padding: '15px 30px',
            borderRadius: '10px 10px 0 0',
            textAlign: 'center',
            boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.2)',
            zIndex: '1000',
            transition: 'bottom 0.3s ease-in-out',
          }}
        >
          <i className="fa-solid fa-check me-2"></i>
          Item successfully added to cart!
          <button
            onClick={() => navigate('/cart')}
            className="btn btn-light mt-2"
            style={{
              fontSize: '0.9rem',
              padding: '8px 16px',
              color: '#28a745',
              border: '1px solid #28a745',
              borderRadius: '5px',
            }}
          >
            View Cart
          </button>
        </div>
      )}
    </>
  );
};

export default View;


//test

