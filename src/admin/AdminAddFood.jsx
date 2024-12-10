import React, { useState } from 'react'
import AdminHeader from './AdminHeader'
import { addFoodAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';

const AdminAddFood = () => {
  const navigate = useNavigate();
  const [FoodDetails, setFoodDetails] = useState({
    foodName: "", category: "", price: 0, description: "", foodImg: "", fudImg: "",foodType:""
  });

  const handleAddFood = async (e) => {
    e.preventDefault(); // Prevent page reload
    const { foodName, category, price, description, foodImg ,foodType} = FoodDetails;
    
    if (!foodImg) {
      alert("Please upload an image.");
      return;
    }

    if (foodName && category && price && description && foodImg && foodType) {
      const reqBody = new FormData();
      reqBody.append("foodName", foodName);
      reqBody.append("category", category);
      reqBody.append("price", price);
      reqBody.append("description", description);
      reqBody.append("foodImg", foodImg);
      reqBody.append("foodType", foodType);


      const token = sessionStorage.getItem("token");

      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        };

        // API call
        try {
          const result = await addFoodAPI(reqBody, reqHeader);
          if (result?.status === 200) {
            alert("Food Details Added Successfully!!!");
            navigate('/admindashboard');
          } else {
            alert(result.response.data);
          }
        } catch (error) {
          console.error(error);
          alert("An error occurred while adding the food details. Please try again.");
        }
      }
    } else {
      alert("Please Add the Food Details completely!!!");
    }
  };

  return (
    <>
      <AdminHeader />
      <div className="add-food-container">
        <h2>Add New Food Item</h2>
        <form className="add-food-form">
          <div className="form-group">
            <label htmlFor="foodName">Food Name:</label>
            <input
              onChange={e => setFoodDetails({ ...FoodDetails, foodName: e.target.value })}
              type="text"
              id="foodName"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              onChange={e => setFoodDetails({ ...FoodDetails, category: e.target.value })}
              required
            >
              <option value="">Select Category</option>
              <option value="no category">No Category</option>
              <option value="Biriyani">Biriyani</option>
              <option value="Desserts">Desserts</option>
              <option value="Fast Food">Fast Food</option>
              <option value="Chinese Dishes">Chinese Dishes</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price ($):</label>
            <input
              onChange={e => setFoodDetails({ ...FoodDetails, price: parseFloat(e.target.value) })}
              type="number"
              id="price"
              min="0"
              step="0.01"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              onChange={e => setFoodDetails({ ...FoodDetails, description: e.target.value })}
              type="text"
              id="description"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Upload Image:</label>
            <input
              onChange={e => {
                const file = e.target.files[0];
                if (file) {
                  setFoodDetails({
                    ...FoodDetails,
                    foodImg: file,
                    fudImg: URL.createObjectURL(file),
                  });
                }
              }}
              type="file"
              id="image"
              accept="image/*"
            />
            {FoodDetails.fudImg && <img src={FoodDetails.fudImg} width="100px" height="100px" alt="Preview" />}
          </div>
          <div className="form-group">
            <label htmlFor="foodType">Type of Food:</label>
            <select
              id="category"
              onChange={e => setFoodDetails({ ...FoodDetails, foodType: e.target.value })}
              required
            >
              <option value="">Select Category</option>
              <option value="Sweets">Sweets</option>
              <option value="Veg">Veg</option>
              <option value="NonVeg">Non-Veg</option>
              
            </select>
          </div>
          <button onClick={handleAddFood} type="button" className="submit-button">
            Add Food Item
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminAddFood;
