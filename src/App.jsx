import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import View from './pages/View'
import Pnf from './pages/Pnf'
import Footer from './components/Footer'
import Header from './components/Header'
import Auth from './pages/Auth'
import Landing from './pages/Landing'
import AdminDashboard from './admin/AdminDashboard'
import AdminAddFood from './admin/AdminAddFood'
import Checkout from './pages/Checkout'
import Menu from './components/Menu'
import About from './components/About'
import MenuCategory from './components/MenuCategory'
import EditFood from './admin/EditFood'
import Otherfoods from './components/Otherfoods'
import { UserProvider } from './contexts/UserContext'
import OrderConfirm from './pages/OrderConfirm'
import { tokenAuthContext } from './contexts/AuthContextApi'
import { useContext, useEffect } from 'react'
// import FoodSlider from './components/FoodSlider'
import { SearchProvider } from './contexts/SearchContext';



function App() {
  const {isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)
   useEffect(()=>{
      if(sessionStorage.getItem("token")){
          setIsAuthorised(true)
      }else{
        setIsAuthorised(false)
      }
   },[isAuthorised])
   console.log(isAuthorised);

  return (
    <>
     <UserProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/foodslider' element={<FoodSlider/>}/> */}
          <Route path='/adminaddfood' element={<AdminAddFood/>}/>
          {/* <Route path='/wishlist' element={<Wishlist/>}/> */}
          <Route path='/view/:id' element={<View/>}/>
          <Route path='/view/:id' element={<Otherfoods/>}/>

        {
          isAuthorised &&
         <>
            <Route path='/cart' element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/order-confirm" element={<OrderConfirm />} />
            <Route path='/landing' element={<Landing/>}/>
            <Route path='/admindashboard' element={<AdminDashboard/>}/>
            <Route path='/editfood' element={<EditFood/>}/>

         </>
}
          
          <Route path='/menucategory' element={<MenuCategory/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/*' element={<Pnf/>}/>
          <Route path='/login' element={<Auth/>}/>
          <Route path='/register' element={<Auth insideRegister={true}/>}/>
  
        </Routes>
     </UserProvider>
      <Footer/>
    
    </>
  )
}

export default App


