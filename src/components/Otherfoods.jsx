import React, { useEffect, useState } from 'react'
import { getOtherFoodAPI } from '../services/allAPI';
import SERVER_URL from '../services/serverUrl';
import { Link } from 'react-router-dom';

const Otherfoods = ({id}) => {

    console.log(id+"in otherfoods");
    const [food,setFood] = useState([])

    useEffect(()=>{
        viewOtherFoods()
  },[])

  
  const viewOtherFoods =async()=> {
   try{
      const result = await getOtherFoodAPI(id)
      if(result.status==200){
        setFood(result.data.data)
      }
   }catch(err){
      console.log(err);
      
   }
  }
  console.log(food);
  console.log(`type of food ${typeof food}`);
  // console.log(`foodname ${food.foodName}`);
  
    
  return (
    <>
     <div className="row">
          {/* Sidebar */}
          <div className="col-md-3">
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"> <span className="badge bg-secondary rounded-pill">count</span></a>
             
            </div>
          </div>

          {/* Main Content */}
          <div className="col-md-9">
            <h3 className="fw-bold mb-3">Order Online</h3>
            {/* <p className="text-muted mb-4">
              <i className="fa fa-clock me-2"></i> Live track your order &nbsp; | &nbsp; 61 min
            </p> */}
            <div className="form-check mb-4">
              {/* <input className="form-check-input" type="checkbox" value="" id="vegOnly" />
              <label className="form-check-label" htmlFor="vegOnly"> Veg only</label> */}
            </div>

            <div className="card p-3 shadow-sm">
  <div className="row">
    {
      food?.length > 0 ? (
        food?.map((foods, index) => (
          <div key={index} className="col-12 mb-3">
            <div className="row align-items-center">
              {/* Food Image */}
              <div className="col-md-4 text-center">
               <Link to={`/view/${foods?._id}`}> <img src={`${SERVER_URL}/uploads/${foods?.foodImg}`} alt={foods?.foodName || "Food"} className="img-fluid rounded" style={{ maxHeight: '200px', objectFit: 'cover' }}/></Link>
              </div>
              {/* Food Details */}
              <div className="col-md-8">
                <h4 className="fw-bold">{foods?.foodName}</h4>
                <p className="text-muted mb-2">{foods?.description || "No description available"}</p>
                <p className="text-danger fw-bold mb-2">₹ {foods?.price || "N/A"}</p>
                <p className="mb-0">
                  <span className="text-warning">
                    <i className="fa fa-star"></i> {foods?.rating || "N/A"}
                  </span>{' '}
                  ({foods?.votes || 0} votes)
                </p>
                <p className="text-muted">Serves 1</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1>No foods found</h1>
      )
    }
  </div>
</div>

          </div>
        </div></>
  )
}

export default Otherfoods