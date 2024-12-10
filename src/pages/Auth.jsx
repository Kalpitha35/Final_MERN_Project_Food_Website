import React, { useContext, useEffect, useState } from 'react'

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import {  loginAPI, registerAPI } from '../services/allAPI';
import { tokenAuthContext } from '../contexts/AuthContextApi';


const Auth = ({insideRegister}) => {

  const navigate = useNavigate()
  const {isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)

  const [isLogined,setIsLogined] = useState(false)
  const [inputData,setInputData] = useState({
    username:"",email:"",password:""
  })
  console.log(inputData);
  
  const [currentUser,setCurrentUser] = useState("")

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Inside handleRegister");
  
    if (inputData.username && inputData.email && inputData.password) {
      try {
        // Send registration data
        const result = await registerAPI(inputData);
  
        // Check the backend response
        if (result.status === 201) {
          alert(`Welcome ${result.data?.username}, Please login to explore our website!`);
          navigate('/login'); // Redirect to the login page
          setInputData({ username: "", email: "", password: "" }); // Reset form data
        } else {
          // Handle unexpected statuses
          alert("An unexpected error occurred. Please try again.");
        }
      } catch (error) {
        // Handle errors from the API call
        if (error.response && error.response.status === 406) {
          alert(error.response.data?.message || "Email already registered.");
        } else {
          alert("Something went wrong. Please try again later.");
        }
      }
    } else {
      alert("Please fill the form completely!");
    }
  };

  
const handleLogin = async (e) => {
  e.preventDefault();

  if (inputData.email && inputData.password) {
    try {
      const result = await loginAPI(inputData);

      if (result.status === 200) {
        const user = result.data.user;
        const token = result.data.token;

        // Save user and token to sessionStorage
        sessionStorage.setItem("user", JSON.stringify(user));
        sessionStorage.setItem("token", token);
        setIsAuthorised(true)
        // Update UserContext
        setCurrentUser(user);

        setIsLogined(true);
        console.log("User from sessionStorage:", sessionStorage.getItem('user'));
console.log("Current User in UserContext:", currentUser);


        // Navigate after sessionStorage is updated
        if (user.role === 'customer') {
          navigate('/landing');
        } else if (user.role === 'admin') {
          navigate('/admindashboard');
        }
      } else {
        alert('Invalid login credentials.');
      }
    } catch (err) {
      console.error("Login failed", err);
      alert("Login failed. Please try again.");
    }
  } else {
    alert("Please fill in all required fields!");
  }
};


  
  
  
  return (
    <>
   <section style={{marginTop:'80px'}}> <Header insideAuth={true}/></section>
    <div style={{backgroundColor:'rgb(255, 123, 0)',height:'600px',marginTop:'-80px',paddingLeft:'10px'}} className="container-fluid p-4">
      
      <div className="row">
        <div className="col-lg-5">
        <div className='d-flex flex-column' style={{marginTop:'170px',marginLeft:'100px'}}>
       {
        insideRegister &&
        <FloatingLabel style={{width:'400px'}} controlId="floatingInputName" label="Username"  className="mb-3">
          <Form.Control value={inputData.username} onChange={e=>setInputData({...inputData,username:e.target.value})}  style={{width:'400px'}} type="text" placeholder="Username" />
                </FloatingLabel>}
          <FloatingLabel style={{width:'400px'}} controlId="floatingInput" label="Email address" className="mb-3" >
          <Form.Control value={inputData.email} onChange={e=>setInputData({...inputData,email:e.target.value})}  style={{width:'400px'}}  type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel style={{width:'400px'}}  controlId="floatingPassword" label="Password">
          <Form.Control value={inputData.password} onChange={e=>setInputData({...inputData,password:e.target.value})}  style={{width:'400px'}}  type="password" placeholder="Password" />
        </FloatingLabel>
      

                {
                  insideRegister ?
                  <div className="mt-3">
                    <button onClick={handleRegister} style={{textDecoration:'none',backgroundColor:'orangered',color:'white',marginLeft:'120px',width:'100px'}}   className="btn  mb-2">Register</button>
                    <p className=' text-dark mt-3'>Already A User? Please Click here to <Link style={{textDecoration:'none',color:'black'}} to={'/login'}>Login</Link></p>
                  </div>
                  :
                  <div className="mt-3">
                  <Link  onClick={handleLogin} style={{textDecoration:'none',backgroundColor:'orangered',marginLeft:'120px',color:'white',width:'100px'}}  className="btn  mb-2">Login 
                  {/* { isLogined && <Spinner className='ms-2' animation="border" variant="light" /> } */}
                    </Link>
                  <p className=' text-dark mt-3'>New User? Please Click here to <Link style={{textDecoration:'none',color:'black'}} to={'/register'}>Register</Link></p>
                </div>
                }
        </div>

        </div>
        <div className="col-lg-7">
        <img width={'600px'} className='mt-5 ms-5' height={'500px'}   src="https://png.pngtree.com/thumb_back/fh260/background/20220204/pngtree-big-isolated-motorcycle-vector-colorful-icons-flat-illustrations-of-delivery-by-image_984802.jpg" alt="" />

        </div>
      </div>
    </div>
     
    </>
  )
}

export default Auth