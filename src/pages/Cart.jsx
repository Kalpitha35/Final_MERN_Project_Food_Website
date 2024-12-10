import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Link, useNavigate } from 'react-router-dom';
import { getCartListAPI, removeItemFromCartAPI, updateCartQuantityAPI } from '../services/allAPI';
import { useUserContext } from '../contexts/UserContext';
import SERVER_URL from '../services/serverUrl'; // Ensure the correct import

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const { currentUser } = useUserContext(); // Assuming you have user context that provides the logged-in user data
  const navigate = useNavigate();

  useEffect(() => {
    // if (!currentUser) {
    //   navigate('/login'); // Redirect to login if the user is not logged in
    //   return;
    // }
    getCartDetails();
  }, [currentUser, navigate]);

  const getCartDetails = async () => {
    const token = sessionStorage.getItem('token'); // Retrieve token
    if (!token) {
      setErrorMessage('User not logged in');
      setLoading(false);
      return;
    }
  
    try {
      console.log("Fetching cart details with token:", token);
  
      const response = await getCartListAPI(token); // Call the API function
      console.log("API Response:", response);
  
      if (response?.cartItems?.length > 0) {
        setCartItems(response.cartItems); // Update state with cart items
        console.log("Cart items set in state:", response.cartItems);
        console.log(cartItems);
        
      } else {
        setCartItems([]); // Clear state if no items
        setErrorMessage('No items in the cart');
      }
    } catch (error) {
      console.error('Error fetching cart data:', error);
      setErrorMessage('Your Cart Is Empty!!!');
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = async (foodId) => {
    const token = sessionStorage.getItem("token"); // Retrieve token
    if (!token) {
      setErrorMessage("User not logged in");
      return;
    }
  
    try {
      await removeItemFromCartAPI(foodId, token); // Pass foodId and token
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.foodId._id !== foodId)
      ); // Remove item locally
      getCartDetails()
    } catch (error) {
      console.error("Error deleting item:", error.message);
      setErrorMessage("Error deleting item");
    }
  };
  
  const updateQuantity = async (foodId, newQuantity) => {
    const token = sessionStorage.getItem("token"); // Retrieve token
    if (!token) {
      setErrorMessage("User not logged in");
      return;
    }
  
    try {
      await updateCartQuantityAPI(foodId, newQuantity, token); // Call API
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.foodId._id === foodId
            ? { ...item, quantity: newQuantity } // Update quantity
            : item
        )
      );
    } catch (error) {
      console.error("Error updating quantity:", error.message);
      setErrorMessage("Error updating quantity");
    }
  };
  

  

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      const price = item.foodId.price || 0; // Extract price from foodId
      const quantity = item.quantity || 0; // Ensure quantity is valid
      return total + price * quantity;
    }, 0);
  };
  
  

  return (
    <>
      <Header insideCart={true} />
      <div className="container-fluid px-4 mx-auto" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
        <h1 className="display-4 text-center text-dark fw-bold mb-5">Cart Summary</h1>
        <Link style={{color:'orangered'}} to={'/landing'}>Go to Menu</Link>
        <div className="row mt-4">
          <div className="col-12 border rounded shadow-lg p-4 mb-4">
            {loading ? (
              <div>Loading cart items...</div>
            ) : errorMessage ? (
              <div className="text-danger">{errorMessage}</div>
            ) : (
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
  {cartItems.map((item, index) => (
    <tr key={item.foodId._id || index}>
      <td>{index + 1}</td>
      <td>{item.foodId.foodName || 'N/A'}</td>
      <td>
        <img
          src={item.foodId.foodImg ? `${SERVER_URL}/uploads/${item.foodId.foodImg}` : 'placeholder.jpg'}
          alt={item.foodId.foodName || 'Food'}
          width="70"
          height="70"
          className="rounded-circle shadow-sm"
        />
      </td>
      <td>
  <button
    onClick={() => updateQuantity(item.foodId._id, item.quantity - 1)}
    className="btn btn-sm btn-outline-secondary"
    disabled={item.quantity <= 1} // Disable if quantity is 1
  >
    -
  </button>
  <span className="mx-2">{item.quantity}</span>
  <button
    onClick={() => updateQuantity(item.foodId._id, item.quantity + 1)}
    className="btn btn-sm btn-outline-secondary"
  >
    +
  </button>
</td>

<td>₹ {item.foodId.price * item.quantity || 0}</td>
      <td>
        <button onClick={() => deleteItem(item.foodId._id)} className="btn text-danger">
          <i className="fas fa-trash"></i>
        </button>
      </td>
    </tr>
  ))}
</tbody>

              </table>
            )}
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-6 border rounded shadow-lg p-4 text-center">
            <h2>Total Amount: ₹ {calculateTotalAmount()}</h2>
            <Link to="/checkout" className="btn btn-success mt-4">Proceed to Checkout</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;


//test 




