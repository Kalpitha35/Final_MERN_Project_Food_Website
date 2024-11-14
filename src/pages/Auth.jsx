import React from 'react'

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Header from '../components/Header';


const Auth = ({insideRegister}) => {

  
  return (
    <>
   <section style={{marginTop:'80px'}}> <Header insideAuth={true}/></section>
    <div style={{backgroundColor:'rgb(255, 123, 0)',height:'600px',marginTop:'-80px',paddingLeft:'10px'}} className="container-fluid p-4">
      
      <div className="row">
        <div className="col-lg-5">
        <img width={'1200px'} className='mt-5' height={'500px'}  src="https://images2.alphacoders.com/901/thumb-1920-901414.jpg" alt="" />

        </div>
        <div className="col-lg-7">
        <div className='d-flex flex-column' style={{marginTop:'170px',marginLeft:'-350px'}}>
       {
        insideRegister &&
        <FloatingLabel style={{width:'400px'}} controlId="floatingInputName" label="Username"  className="mb-3">
          <Form.Control  style={{width:'400px'}} type="text" placeholder="Username" />
                </FloatingLabel>}
          <FloatingLabel style={{width:'400px'}} controlId="floatingInput" label="Email address" className="mb-3" >
          <Form.Control style={{width:'400px'}}  type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel style={{width:'400px'}}  controlId="floatingPassword" label="Password">
          <Form.Control style={{width:'400px'}}  type="password" placeholder="Password" />
        </FloatingLabel>
      

                {
                  insideRegister ?
                  <div className="mt-3">
                    <button style={{textDecoration:'none',backgroundColor:'orangered',color:'white',marginLeft:'120px',width:'100px'}}   className="btn  mb-2">Register</button>
                    <p className=' text-light mt-3'>Already A User? Please Click here to <Link style={{textDecoration:'none',color:'orangered'}} to={'/login'}>Login</Link></p>
                  </div>
                  :
                  <div className="mt-3">
                  <Link to='/landing' style={{textDecoration:'none',backgroundColor:'orangered',marginLeft:'120px',color:'white',width:'100px'}}  className="btn  mb-2">Login 
                  {/* { isLogined && <Spinner className='ms-2' animation="border" variant="light" /> } */}
                    </Link>
                  <p className=' text-light mt-3'>New User? Please Click here to <Link style={{textDecoration:'none',color:'orangered'}} to={'/register'}>Register</Link></p>
                </div>
                }
        </div>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default Auth