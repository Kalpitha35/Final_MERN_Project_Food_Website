import React from 'react'
import { Link } from 'react-router-dom'

const MenuCategory = () => {
  return (
    <>
    <div className="conatiner-fluid mt-5">
        <h6 style={{color:'orangered'}} className="text-center fw-bolder">Choose Your Flavor</h6>
        <h1 className="text-center fw-bolder m-4">Food that brings people together!</h1>
        <p className="text-center fw-bolder w-50 mb-5" style={{marginLeft:'300px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, omnis quisquam natus veritatis repellendus fuga ab id accusantium </p>
        <a className='text-center view-all-menu rounded p-2' href='#menu'>VIEW ALL MENU</a>

        <div style={{marginTop:'-100px'}} className="d-flex justify-content-evenly align-items-center flex-row">
            <div  className="d-flex justify-content-center align-items-center flex-column">
                <img  width={'300px'} height={'300px'} className='rounded-circle category-img' src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-menu-pasta-img.png" alt="" />
                <h2>Pasta</h2>
            </div>
            <div style={{marginTop:'250px'}} className="d-flex justify-content-center align-items-center flex-column">
            <img width={'300px'} height={'300px'} className='rounded-circle category-img' src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-menu-pizza-img.png" alt="" />
            <h2>Pizza</h2>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column">
            <img width={'300px'} height={'300px'} className='rounded-circle category-img' src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-menu-dessert-img.png" alt="" />
            <h2>Dessert</h2>
            </div>
        </div>
    </div>
    </>
  )
}

export default MenuCategory