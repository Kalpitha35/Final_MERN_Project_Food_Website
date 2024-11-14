import React from 'react'

const About = () => {
  return (
    <>
        <div  className="row m-2">

           <div className='col-lg-6'>
              <div style={{marginLeft:'40px', marginTop:'50px'}} className='row'>
                <div className="col-6 text-start">
                <img className="img-grid img-fluid rounded w-100 wow zoomIn" style={{visibility:'visible',animationDelay:'0.1s',marginLeft:'10px'}} data-wow-delay="0.1s" src="https://themewagon.github.io/restoran/img/about-1.jpg" />
                </div>
                <div className="col-6 text-start mt-3">
                <img className="img-grid img-fluid rounded w-75 wow zoomIn " style={{visibility:'visible',animationDelay:'0.1s',marginTop:'25%'}} data-wow-delay="0.1s" src="https://themewagon.github.io/restoran/img/about-2.jpg" />
                </div>
                <div className="col-6 text-end">
                  <img src="https://themewagon.github.io/restoran/img/about-3.jpg" alt="" className="img-fluid rounded w-75 zoomIn" data-wow-delay="0.5s" style={{visibility:'visible',animationDelay:'0.5s'}}/>
                </div>
                <div className="col-6 text-end mt-3">
                  <img src="https://themewagon.github.io/restoran/img/about-4.jpg" alt="" className="img-fluid rounded w-100 zoomIn" data-wow-delay="0.5s" style={{visibility:'visible',animationDelay:'0.5s'}}/>
                </div>
              </div>
           </div>

            <div className="col-lg-6">
               <div style={{marginTop:'100px'}} className="d-flex justify-content-center flex-column">
                <p>About Us</p>
                <h1>Welcome to <i  className="fa-solid fa-utensils icons"></i> Everyday Eats</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus earum harum cum suscipit enim repellat soluta recusandae velit! Laudantium, quam dignissimos. Similique, ducimus eos! Voluptatum, adipisci. Repellendus neque adipisci quo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui facere accusamus non consectetur dolorem consequatur neque. Illo, dignissimos voluptatibus porro aliquid accusamus corporis, veritatis soluta consequatur veniam quod eveniet dolorum?</p>
               </div>
            </div>
        </div>
    </>
  )
}

export default About