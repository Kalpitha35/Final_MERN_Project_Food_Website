import React from 'react'
import AdminHeader from './AdminHeader'

const AdminAddFood = () => {
  return (
    <>
    <AdminHeader/>
    <div className="add-food-container">
      <h2>Add New Food Item</h2>
      <form  className="add-food-form">
        <div className="form-group">
          <label htmlFor="foodName">Food Name:</label>
          <input
            type="text"
            id="foodName"
            value="foodname"
            
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value="category"
           
            required
          >
            <option value="">Select Category</option>
            <option value="Appetizers">Appetizers</option>
            <option value="Main Course">Main Course</option>
            <option value="Desserts">Desserts</option>
            <option value="Beverages">Beverages</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price ($):</label>
          <input
            type="number"
            id="price"
            value="price"
            
            min="0"
            step="0.01"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            
          />
        </div>
        <button type="submit" className="submit-button">Add Food Item</button>
      </form>
    </div>

    </>
  )
}

export default AdminAddFood