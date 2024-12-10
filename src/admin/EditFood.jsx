import React, { useState, useEffect, useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { updateFoodAPI } from "../services/allAPI";
import { editFoodResponseContext } from "../contexts/ContextApi";

const EditFood = ({ food }) => {

    const {editFoodResponse,setEditFoodResponse} = useContext(editFoodResponseContext)
  const [show, setShow] = useState(false);
  const [foodDetails, setFoodDetails] = useState({
    id: food._id,
    foodName: food.foodName,
    category: food.category,
    price: food.price,
    description: food.description,
    fudImg: food.fudImg || "", // Use existing image if available
  });
  const [preview,setPreview] = useState("")


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFoodDetails({
        ...foodDetails,
        foodImg: file, // File for backend upload
        fudImg: URL.createObjectURL(file), // Generate preview
      });
    }
  };

  useEffect(() => {
    // Clean up the generated preview URL when component unmounts
    return () => {
      if (foodDetails.fudImg && typeof foodDetails.fudImg === "string" && !food.fudImg) {
        URL.revokeObjectURL(foodDetails.fudImg);
      }
    };
  }, [foodDetails.fudImg, food.fudImg]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdateFood = async ()=>{
    const {id,foodName,category,price,description,foodImg} = foodDetails
    if(foodName && category && price && description && foodImg){
        const reqBody = new FormData()
        reqBody.append("foodName",foodName)
        reqBody.append("category",category)
        reqBody.append("price",price)
        reqBody.append("description",description)
       preview? reqBody.append("foodImg",foodImg) : reqBody.append("foodImg",food.foodImg)

       const token = sessionStorage.getItem("token")
      if(token){
        // api call
        const reqHeader = {
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
        try {
            const result = await updateFoodAPI(id,reqBody,reqHeader)
            if(result.status==200){
              alert("Food Details Updated Successfully!!!")
              handleClose()
              setEditFoodResponse(result)
            }
          } catch (err) {
            console.log(err);
            
          }
        }
      }else{
        alert("Please fill the form completely!!!")
      }
  }

  return (
    <>
      <button onClick={handleShow} className="btn">
        <i className="fa-solid fa-edit"></i>
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Food Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="add-food-form">
            <div className="form-group">
              <label htmlFor="foodName">Food Name:</label>
              <input onChange={e=>setFoodDetails({...foodDetails,foodName:e.target.value})} value={foodDetails.foodName} type="text" id="foodName" required />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <select onChange={e=>setFoodDetails({...foodDetails,category:e.target.value})} value={foodDetails.category} id="category" required>
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
              <input onChange={e=>setFoodDetails({...foodDetails,price:e.target.value})} value={foodDetails.price} type="number" id="price" min="0" step="0.01" required />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <input onChange={e=>setFoodDetails({...foodDetails,description:e.target.value})} value={foodDetails.description} type="text" id="description" required />
            </div>
            <div className="form-group">
              <label htmlFor="image">Upload Image:</label>
              <input  onChange={handleImageChange} type="file" id="image" accept="image/*" />
              <img
                src={foodDetails.fudImg || "https://via.placeholder.com/100"} // Placeholder if no image
                width="100px"
                height="100px"
                alt="Preview"
              />
            </div>
            {/* <button type="button" className="submit-button">
              Save Changes
            </button> */}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUpdateFood} variant="primary" >
            Update Food
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditFood;
