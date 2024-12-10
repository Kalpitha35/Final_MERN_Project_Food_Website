import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchFoodDetailsAPI } from '../services/allAPI';

const OrderConfirm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [foodDetails, setFoodDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const order = location.state?.order;

  useEffect(() => {
    if (!order) {
      navigate('/'); // If no order exists, navigate to the homepage
      return;
    }
    fetchFoodDetails(); // Call to fetch the food details when order exists
  }, [order, navigate]);

  const fetchFoodDetails = async () => {
    const foodId = order.items.map((item) => item.foodId); // Extract food IDs from the order items
    const details = await fetchFoodDetailsAPI(foodId); // Fetch food details using the API
    console.log(`details : ${details}`);
    
    if (details) {
      setFoodDetails(details); // Update state with the fetched food details
    } else {
      console.error('Failed to load food details.');
    }

    setLoading(false); // Set loading to false once the details are fetched
  };

  if (!order) {
    return null; // If no order is available, return null to prevent rendering
  }
  console.log(`order and order.items : ${order}, ${order.items}`);
  console.log('Order:', JSON.stringify(order, null, 2)); // Pretty-print the object
  console.log('Order Items:', JSON.stringify(order.items, null, 2)); // Log order items
  console.log(`foodDetails : ${foodDetails}`);
  
  var orderDetails = JSON.stringify(order, null, 2);
  var orderItemsDetails = JSON.stringify(order.items, null, 2)

  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
      <h2 className="text-center mb-4">Order Confirmation</h2>
      <div className="card shadow">
        <div className="card-header bg-success text-white">
          <h4 className="mb-0">Thank You for Your Order!</h4>
        </div>
        <div className="card-body">
          <h5>Order ID: {order._id}</h5>
          <p>
            <strong>Name:</strong> {order.name}
          </p>
          <p>
            <strong>Email:</strong> {order.email}
          </p>
          <p>
            <strong>Address:</strong> {order.shippingAddress}
          </p>
          <p>
            <strong>Total Amount:</strong> ₹ {order.totalAmount}
          </p>

          <h5 className="mt-4">Ordered Items:</h5>
          {/* <ul>
            {loading ? (
              <li>Loading food details...</li> // Show loading text while fetching
            ) : (
              order.items.map((item, index) => {
                console.log('Order item:', JSON.stringify(item, null, 2)); // Debug each item
                const food = foodDetails.find((food) => food._id === item.foodId);
                return (
                  <li key={index}>
                    {food ? (
                      <>
                        {food.foodName} - ₹{food.price} x {item.quantity}
                      </>
                    ) : (
                      'Food details not available'
                    )}
                  </li>
                );
              }))}
              

              
            
          </ul> */}

          <button
            className="btn btn-primary mt-3"
            onClick={() => navigate('/landing')}
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirm;
