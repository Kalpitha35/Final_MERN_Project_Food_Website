import React from 'react'
import Header from '../components/Header'

const Wishlist = () => {
  return (
    <>
    <Header insideWishlist="true"/>
    <div style={{ paddingTop: '120px', paddingBottom:'50px' }} className="container-fluid px-4 ms-auto">
  <>
    <h1 style={{fontFamily:'"Playfair Display", serif',fontSize:'35px'}} className="display-4 text-black text-center">My Wishlist</h1>
    <div className="row mt-4">
      <div className="col-md-3">
        <div className="card shadow border">
          <img className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqVUKiNFLkMObi4Lu14GMRhReGvTJEVDWcg&s" alt="" />
          <div className="card-body text-center">
            <h5 className="card-title fw-bold">title</h5>
            <div className="d-flex justify-content-around mt-3">
              <button className="btn">
                <i className="fas fa-heart-circle-xmark text-danger"></i>
              </button>
              <button className="btn">
                <i className="fas fa-cart-plus text-success"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card shadow border">
          <img className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqVUKiNFLkMObi4Lu14GMRhReGvTJEVDWcg&s" alt="" />
          <div className="card-body text-center">
            <h5 className="card-title fw-bold">title</h5>
            <div className="d-flex justify-content-around mt-3">
              <button className="btn">
                <i className="fas fa-heart-circle-xmark text-danger"></i>
              </button>
              <button className="btn">
                <i className="fas fa-cart-plus text-success"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>

  {/* <div className="d-flex flex-column justify-content-center align-items-center mt-5">
    <img src="https://www.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif" alt="" />
    <h1 className="text-danger fw-bold display-6 mt-4">Your Wishlist is Empty!!!</h1>
  </div> */}
</div>

    </>
  )
}

export default Wishlist