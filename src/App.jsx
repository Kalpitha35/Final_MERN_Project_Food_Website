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



function App() {

  return (
    <>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/adminaddfood' element={<AdminAddFood/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>} />
        <Route path='/view' element={<View/>}/>
        <Route path='/menucategory' element={<MenuCategory/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/*' element={<Pnf/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/admindashboard' element={<AdminDashboard/>}/>
        <Route path='/register' element={<Auth insideRegister={true}/>}/>

      </Routes>
      <Footer/>
    
    </>
  )
}

export default App
