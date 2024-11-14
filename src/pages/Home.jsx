import React from 'react'
import Card from 'react-bootstrap/Card';
import About from '../components/About';
import Menu from '../components/Menu';
import Header from '../components/Header'
import MenuCategory from '../components/MenuCategory';


const Home = () => {
  return (
    <>
    <Header insideHomeCart={false} insideHome={true}/>
      <div className='container-img'>
       <img className='home-bg'  src="https://watermark.lovepik.com/photo/40015/5854.jpg_wh1200.jpg" alt="" />
      </div>
       <div className='container mt-5'>
       <img width={'400px'} height={'400px'}src="https://themewagon.github.io/restoran/img/hero.png" alt="" />
       <h1 className='fw-bolder home-head'>Enjoy Our Delicious Meal</h1>
       </div>
      <section id='menu'> <Menu/></section>
      <MenuCategory/>
       <div id='service' className='services d-flex justify-content-evenly align-items-center flex-row'>
       <Card className='cards' style={{ width: '18rem', color:'black' }}>
        <Card.Body>
        <Card.Title><i  className="fa-solid fa-user icons"></i></Card.Title>
        <Card.Title>Master Chefs</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit ams doloribus error laborum magni quo dolorem praesentium
        </Card.Text>
       
        </Card.Body>
      </Card>
      <Card className='cards' style={{ width: '18rem' , color:'black'}}>
        <Card.Body>
        
        <Card.Title><i  className="fa-solid fa-utensils icons"></i></Card.Title>
        <Card.Title>Quality Food</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit ams doloribus error laborum magni quo dolorem praesentium
        </Card.Text>
        
        </Card.Body>
      </Card>
      <Card className='cards' style={{ width: '18rem', color:'black' }}>
        <Card.Body>
        <Card.Title><i className="fa-solid fa-cart-plus icons"></i></Card.Title>
        <Card.Title>Online Order</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit ams doloribus error laborum magni quo dolorem praesentium
        </Card.Text>
     
        </Card.Body>
      </Card>
      <Card className='cards' style={{ width: '18rem' , color:'black'}}>
        <Card.Body>
        <Card.Title><i className="fa-solid fa-house-chimney icons"></i></Card.Title>
        <Card.Title>24/7 Service</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit ams doloribus error laborum magni quo dolorem praesentium
        </Card.Text>

        </Card.Body>
      </Card>
       </div>

      <section id='about'> <About/></section>
       
    </>
    
  )
}

export default Home