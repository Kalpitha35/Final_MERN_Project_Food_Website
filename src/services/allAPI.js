import axios from "axios"
import commonAPI from "./commonAPI"
import SERVER_URL from "./serverUrl"

// registerAPI called by Auth
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}

// loginAPI called by Auth component when user click login here
export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
} 

// addFoodAPI called by AdminAddFood component, when user click add button
export const addFoodAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-food`,reqBody,reqHeader)
    
}

//getAllFoodAPI called by AdminDashboard component when page loaded in browser
export const getAllFoodsFromDbAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/all-foodsDb`,{})
}

//getAllFoodAPI called by AdminDashboard component when page loaded in browser
export const getAllFoodAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/all-foods`,{},reqHeader)
}
// foodRemoveAPI called by View component when user clicks delete btn
export const foodRemoveAPI = async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/foods/${id}`,{},reqHeader)
}

// updateFoodAPI called by Edit component when user clicks update btn, 
export const updateFoodAPI = async (id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/edit-food/${id}/edit`,reqBody,reqHeader)
}

// getSingleFoodAPI
export const getSingleFoodAPI = async (id,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/view/${id}`,reqHeader)
}

//getOtherFoodAPI
export const getOtherFoodAPI = async (id,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/otherfood/${id}`,reqHeader)
}


export const addToCartAPI = async (reqBody, reqHeader) => {
  try {
    if (!reqHeader?.Authorization) {
      throw new Error('Authorization token is missing.');
    }

    const response = await commonAPI('POST', `${SERVER_URL}/cart`, reqBody, reqHeader);
    if (response.error) {
      throw new Error(response.message || 'Failed to add item to cart.');
    }

    return response.data;
  } catch (error) {
    console.log(error.message); // Log only the error message
    // or
    console.log(JSON.stringify(error)); // Log the full error object as a string
    console.error('Error in addToCartAPI:', error.message);
    throw new Error(error.message || 'An error occurred while adding to the cart.');
  }
};



export const getCartListAPI = async (token) => {
    try {
      // Log token and URL to verify
      console.log("Fetching cart with token:", token);
      console.log("Server URL:", `${SERVER_URL}/cart-details`);
      
      const response = await axios.get(`${SERVER_URL}/cart-details`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token here
        },
      });
  
      console.log("Cart data fetched:", response.data);  // Log the response data
      return response.data; // Return the cart data
    } catch (error) {
      // Log additional error information
      console.error('Error fetching cart list:', error.response || error.message);
      throw error; // Re-throw the error to be handled in the calling function
    }
  };

//removeItemFromCartAPI
export const removeItemFromCartAPI = async (id, token) => {
  try {
    return await commonAPI(
      "DELETE",
      `${SERVER_URL}/cart/${id}`,
      {}, // Body is not needed for DELETE requests
      { Authorization: `Bearer ${token}` } // Pass token in headers
    );
  } catch (error) {
    console.error("Error in removeItemFromCartAPI:", error.message);
    throw error;
  }
};


export const updateCartQuantityAPI = async (foodId, quantity, token) => {
  console.log("Inside updateCartQuantityAPI");
  
  try {
    const response = await fetch(`${SERVER_URL}/quantity/${foodId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Pass token in headers
      },
      body: JSON.stringify({ newQuantity: quantity }), // Send new quantity in the body
    });

    if (!response.ok) {
      throw new Error('Failed to update quantity');
    }

    return await response.json();
  } catch (error) {
    console.error("Error in updateCartQuantityAPI:", error.message);
    throw error;
  }
};


export const createOrderAPI = async (reqBody, token) => {
  console.log('Order Data:', reqBody);
  console.log(`Token in allAPI: ${token}`);
  
  try {
    const reqHeader = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };
    
    const response = await axios.post(`${SERVER_URL}/orders`, reqBody, { headers: reqHeader });
    console.log('Full Response:', response); // Log the full response for debugging

    if (response?.status === 200) { // Optional chaining to avoid crashing
      return response.data;
    } else {
      throw new Error('Failed to place order');
    }
  } catch (error) {
    console.error('Error placing order:', error);
    if (error.response) {
      console.error('Error Response Data:', error.response.data); // Logs server error response
      console.error('Error Status:', error.response.status); // Logs status from server response
    }
    throw error;
  }
};

export const fetchFoodDetailsAPI = async (foodId) => {
  try {
    // Send a POST request with an array of foodIds
    const response = await fetch(`${SERVER_URL}/order-details/foods`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ foodId: foodId }), // Ensure the body is correctly formatted
    });

    // Check if the response is OK (status 200)
    if (!response.ok) {
      throw new Error('Failed to fetch food details');
    }

    const data = await response.json();

    // If response is successful, return the food details
    if (data.success) {
      return data.foodDetails; // Return the food details if the request was successful
    } else {
      console.error('Failed to fetch food details');
      return null;
    }
  } catch (error) {
    console.error('Error fetching food details:', error);
    return null; // Return null in case of error
  }
};

export const clearCartAPI = async (token) => {
  const response = await fetch(`${SERVER_URL}/clear-cart`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to clear cart');
  }

  return await response.json();
};

export const getRecentOrdersAPI = async (reqHeader) => {
  return await commonAPI("GET", `${SERVER_URL}/recent-orders`, {}, reqHeader);
};

export const getAdminStatsAPI = async (reqHeader) => {
  return await commonAPI("GET", `${SERVER_URL}/admin-stats`, {}, reqHeader);
};




