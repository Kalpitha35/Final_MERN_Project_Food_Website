import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
const Landing = () => {
  return (
    <>
  <section style={{marginTop:'-50px'}}>  <Header insideLanding={true}/></section>
    <div style={{paddingTop:'120px'}}  className="container-fluid my-5">
  <h1 className="text-center mb-4">Our Delicious Menu</h1>
  <div  className="row g-4">
    {/* Food Item 1  */}
    <div  className="col-lg-3 col-md-4 col-sm-6 imgcard">
      <div className=" card shadow-sm h-100">
        <img width={'300px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQIigRH8QkERhJyf1FpB3Djm7-tboP60WLA&s" className="card-img-top p-4" alt="Food Item 1"/>
        <div className="card-body text-center">
          <h5 className="card-title">Cheese Pizza</h5>
          <p className="card-text">$12.99</p>
          <button style={{backgroundColor:'orange'}} className="btn w-100">Add to Cart</button>
        </div>
      </div>
    </div>
    
    {/* <!-- Food Item 2 --> */}
    <div className="col-lg-3 col-md-4 col-sm-6 imgcard">
      <div className="card shadow-sm h-100">
        <img width={'300px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ZobqGc_iYbtuLOswx0VaPoGS8aHsqB3CnQ&s" className="card-img-top p-4" alt="Food Item 2"/>
        <div className="card-body text-center">
          <h5 className="card-title">classNameic Burger</h5>
          <p className="card-text">$9.99</p>
          <button style={{backgroundColor:'orange'}} className="btn w-100">Add to Cart</button>
        </div>
      </div>
    </div>

    {/* <!-- Food Item 3 --> */}
    <div className="col-lg-3 col-md-4 col-sm-6 imgcard">
      <div className="card shadow-sm h-100">
        <img width={'300px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqXPFhYA9iogfkLuzmDW6hhM-6jvffYFuCrg&s" className="card-img-top p-4" alt="Food Item 3"/>
        <div className="card-body text-center">
          <h5 className="card-title">Pasta Alfredo</h5>
          <p className="card-text">$14.99</p>
          <button style={{backgroundColor:'orange'}} className="btn  w-100">Add to Cart</button>
        </div>
      </div>
    </div>

    {/* <!-- Food Item 4 --> */}
    <div className="col-lg-3 col-md-4 col-sm-6 imgcard">
      <div className="card shadow-sm h-100">
        <img width={'300px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOixFfnEnpv9-gJO7tMZQ_QBsv7M6tOlU4pg&s" className="card-img-top p-4" alt="Food Item 4"/>
        <div className="card-body text-center">
          <h5 className="card-title">Taco Platter</h5>
          <p className="card-text">$11.99</p>
          <button style={{backgroundColor:'orange'}} className="btn  w-100">Add to Cart</button>
        </div>
      </div>
    </div>
     {/* <!-- Food Item 4 --> */}
     <div className="col-lg-3 col-md-4 col-sm-6 imgcard">
      <div className="card shadow-sm h-100">
        <img width={'300px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOixFfnEnpv9-gJO7tMZQ_QBsv7M6tOlU4pg&s" className="card-img-top p-4" alt="Food Item 4"/>
        <div className="card-body text-center">
          <h5 className="card-title">Taco Platter</h5>
          <p className="card-text">$11.99</p>
          <button  style={{backgroundColor:'orange'}}className="btn  w-100">Add to Cart</button>
        </div>
      </div>
    </div>
     {/* <!-- Food Item 4 --> */}
     <div className="col-lg-3 col-md-4 col-sm-6 imgcard">
      <div className="card shadow-sm h-100">
        <img width={'300px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOixFfnEnpv9-gJO7tMZQ_QBsv7M6tOlU4pg&s" className="card-img-top p-4" alt="Food Item 4"/>
        <div className="card-body text-center">
          <h5 className="card-title">Taco Platter</h5>
          <p className="card-text">$11.99</p>
          <button style={{backgroundColor:'orange'}} className="btn w-100">Add to Cart</button>
        </div>
      </div>
    </div>
     {/* <!-- Food Item 4 --> */}
     <div className="col-lg-3 col-md-4 col-sm-6 imgcard">
      <div className="card shadow-sm h-100">
        <img width={'300px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOixFfnEnpv9-gJO7tMZQ_QBsv7M6tOlU4pg&s" className="card-img-top p-4" alt="Food Item 4"/>
        <div className="card-body text-center">
          <h5 className="card-title">Taco Platter</h5>
          <p className="card-text">$11.99</p>
          <button style={{backgroundColor:'orange'}} className="btn w-100">Add to Cart</button>
        </div>
      </div>
    </div>
     {/* <!-- Food Item 4 --> */}
     <div className="col-lg-3 col-md-4 col-sm-6 imgcard">
      <div className="card shadow-sm h-100">
        <img width={'300px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOixFfnEnpv9-gJO7tMZQ_QBsv7M6tOlU4pg&s" className="card-img-top p-4" alt="Food Item 4"/>
        <div className="card-body text-center">
          <h5 className="card-title">Taco Platter</h5>
          <p className="card-text">$11.99</p>
          <button style={{backgroundColor:'orange'}} className="btn  w-100">Add to Cart</button>
        </div>
      </div>
    </div>

  </div>
    </div>

    <Menu/>

</>
  )
}

export default Landing