import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Header from './Header';

const Menu = () => {
  return (
    // <div className='container-fluid'>
    //     <h1 className='text-center text-black'>Our Specials</h1>
    //     <div className="menu-list">
    //         <ul className="cuisine-list">
    //             <li>All</li>
    //             <li>Burger</li>
    //             <li>Pizza</li>
    //             <li>Pasta</li>
    //             <li>Fries</li>
    //         </ul>
    //     </div>
    //     <div className="row g-4">
    //                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" style={{visibility:'visible',animationDelay:'0.1s',animationName:'fadeInUp'}} >
    //                     <div className="team-item text-center rounded overflow-hidden">
    //                         <div className="overflow-hidden m-4">
    //                             <img width={'250px'} className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqVUKiNFLkMObi4Lu14GMRhReGvTJEVDWcg&s" alt=""/>
    //                         </div>
    //                         <h5 className="mb-3">Burger</h5>
    //                       <Link to={'/view'} className='border rounded p-2' style={{textDecoration:'none', color:'white',backgroundColor:'orange', fontWeight:'600'}} >View More</Link>
                          
    //                     </div>
    //                 </div>
    //                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s" style={{visibility:'visible',animationDelay:'0.3s',animationName:'fadeInUp'}}>
    //                     <div className="team-item text-center rounded overflow-hidden">
    //                         <div className=" overflow-hidden m-4">
    //                         <img width={'250px'} className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqVUKiNFLkMObi4Lu14GMRhReGvTJEVDWcg&s" alt=""/>
    //                         </div>
    //                         <h5 className="mb-3">Burger</h5>
    //                         <Link to={'/view'} className='border rounded p-2' style={{textDecoration:'none', color:'white',backgroundColor:'orange', fontWeight:'600'}} >View More</Link>
                           
    //                     </div>
    //                 </div>
    //                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s" style={{visibility:'visible',animationDelay:'0.5s',animationName:'fadeInUp'}}>
    //                     <div className="team-item text-center rounded overflow-hidden">
    //                         <div className=" overflow-hidden m-4">
    //                         <img width={'250px'} className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqVUKiNFLkMObi4Lu14GMRhReGvTJEVDWcg&s" alt=""/>
    //                         </div>
    //                         <h5 className="mb-3">Burger</h5>
    //                         <Link to={'/view'} className='border rounded p-2' style={{textDecoration:'none', color:'white',backgroundColor:'orange', fontWeight:'600'}} >View More</Link>
                           
    //                     </div>
    //                 </div>
    //                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s" style={{visibility:'visible',animationDelay:'0.7s',animationName:'fadeInUp'}}>
    //                     <div className="team-item text-center rounded overflow-hidden">
    //                     <div className="team-item text-center rounded overflow-hidden">
    //                         <div className=" overflow-hidden m-4">
    //                         <img width={'250px'} className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqVUKiNFLkMObi4Lu14GMRhReGvTJEVDWcg&s" alt=""/>
    //                         </div>
    //                         <h5 className="mb-3">Burger</h5>
    //                         <Link to={'/view'} className='border rounded p-2' style={{textDecoration:'none', color:'white',backgroundColor:'orange', fontWeight:'600'}} >View More</Link>
                           
    //                     </div>
                            
    //                     </div>
    //                 </div>
    //                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s" style={{visibility:'visible',animationDelay:'0.7s',animationName:'fadeInUp'}}>
    //                     <div className="team-item text-center rounded overflow-hidden">
    //                     <div className="team-item text-center rounded overflow-hidden">
    //                         <div className=" overflow-hidden m-4">
    //                         <img width={'250px'} className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqVUKiNFLkMObi4Lu14GMRhReGvTJEVDWcg&s" alt=""/>
    //                         </div>
    //                         <h5 className="mb-3">Burger</h5>
    //                         <Link to={'/view'} className='border rounded p-2' style={{textDecoration:'none', color:'white',backgroundColor:'orange', fontWeight:'600'}} >View More</Link>
                           
    //                     </div>
                      
                           
    //                     </div>
    //                 </div>
    //                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s" style={{visibility:'visible',animationDelay:'0.7s',animationName:'fadeInUp'}}>
    //                     <div className="team-item text-center rounded overflow-hidden">
    //                     <div className="team-item text-center rounded overflow-hidden">
    //                         <div className=" overflow-hidden m-4">
    //                         <img width={'250px'} className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqVUKiNFLkMObi4Lu14GMRhReGvTJEVDWcg&s" alt=""/>
    //                         </div>
    //                         <h5 className="mb-3">Burger</h5>
    //                         <Link to={'/view'} className='border rounded p-2' style={{textDecoration:'none', color:'white',backgroundColor:'orange', fontWeight:'600'}} >View More</Link>
                           
    //                     </div>
                           
                           
    //                     </div>
    //                 </div>
    //                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s" style={{visibility:'visible',animationDelay:'0.7s',animationName:'fadeInUp'}}>
    //                     <div className="team-item text-center rounded overflow-hidden">
    //                     <div className="team-item text-center rounded overflow-hidden">
    //                         <div className=" overflow-hidden m-4">
    //                         <img width={'250px'} className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqVUKiNFLkMObi4Lu14GMRhReGvTJEVDWcg&s" alt=""/>
    //                         </div>
    //                         <h5 className="mb-3">Burger</h5>
    //                         <Link to={'/view'} className='border rounded p-2' style={{textDecoration:'none', color:'white',backgroundColor:'orange', fontWeight:'600'}} >View More</Link>
                           
    //                     </div>
                          
                            
    //                     </div>
    //                 </div><div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s" style={{visibility:'visible',animationDelay:'0.7s',animationName:'fadeInUp'}}>
    //                     <div className="team-item text-center rounded overflow-hidden">
    //                     <div className="team-item text-center rounded overflow-hidden">
    //                         <div className=" overflow-hidden m-4">
    //                         <img width={'250px'} className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqVUKiNFLkMObi4Lu14GMRhReGvTJEVDWcg&s" alt=""/>
    //                         </div>
    //                         <h5 className="mb-3">Burger</h5>
    //                         <Link to={'/view'} className='border rounded p-2' style={{textDecoration:'none', color:'white',backgroundColor:'orange', fontWeight:'600'}} >View More</Link>
                           
    //                     </div>
                          
                            
    //                     </div>
    //                 </div>
    //             </div>
    // </div>
   <>
      {/* <Header /> */}
      <div  className="container-fluid">
    <h1 className="text-center text-dark">Our Specials</h1>
    <div className="menu-list mb-4">
      <ul className="nav justify-content-center">
        <li className="nav-item"><a href="#" className="nav-link active">All</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Burger</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Pizza</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Pasta</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Fries</a></li>
      </ul>
    </div>
  
    <div className="row g-4">
      {[...Array(8)].map((_, index) => (
        <div  className="col-lg-3 col-md-6" key={index}>
          <div  className="card text-center shadow-sm position-relative">
            <div className="m-3 position-relative">
              {/* Wishlist icon */}
              <div className="position-absolute top-0 end-0 m-2">
              <a href=''> <i className="fas fa-heart text-light" style={{ fontSize: '24px' }}></i></a>
              </div>
              <img className="img-fluid" style={{ width: '100%', height: '200px', objectFit: 'cover' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqVUKiNFLkMObi4Lu14GMRhReGvTJEVDWcg&s" 
                alt="Special"/>
            </div>
            <div  className="card-body">
              <h5 className="card-title">Burger</h5>
              <a href="/view" className="btn  text-white fw-semibold"  style={{ textDecoration: 'none',backgroundColor:'orange' }}> View More</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
   </>

  )
}

export default Menu