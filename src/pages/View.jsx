import React from 'react'
import Header from '../components/Header'

const View = () => {
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='container-fluid'>
      <div className="row overflow-hidden">
        <div style={{width:'450px'}} className="col-lg-6 mt-4 ">
          <img className='ms-3'  width={'400px'} height={'450px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqVUKiNFLkMObi4Lu14GMRhReGvTJEVDWcg&s" alt="" />
        </div>
        <div style={{height:'100px'}} className="col-lg-6 mt-4 ms-5">
          <div className="d-flex text-left justify-content-center fw-bolder flex-column">
            <h1 className='fw-bolder'>Burger</h1>
            <p style={{fontSize:'25px'}} className="fw-bolder ">₹ 180</p>
            <p> <i className='fa-solid fa-star text-success'></i> Rating </p>
            <p>Premium burger with crunchy chicken, Mexican Habanero sauce, cheese, tomato & onion</p>
          </div>

          <div className="d-flex text-left justify-content-between justify-between mt-5">
                <button style={{backgroundColor:'orange'}}  className="text-white  rounded p-2">Add To Wishlist</button>
                <button style={{backgroundColor:'orange'}}  className="text-white  rounded p-2">Add To Cart</button>
              </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default View