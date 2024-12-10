import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
   <>
        <Header/>
        <div style={{paddingTop:'100px',height:'80vh'}} className='d-flex justify-content-center align-items-center flex-column'>
          <h1 style={{fontSize:'30px'}} className="fw-bolder  mb-2">404</h1>
          <img width={'400px'} height={'500px'} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b52cad60636009.5a5478f0990fa.gif" alt="" />
          <h1 style={{fontSize:'30px'}} className='fw-bolder  mb-2'>Looks like You're Lost.</h1>
          <p className="mb-2">The page you are looking for is not available!!!</p>
          <Link style={{textDecoration:'none'}} to={'/'} className=' bg-warning p-2 text-white rounded'>Home</Link>
        </div>
   </>
  )
}

export default Pnf