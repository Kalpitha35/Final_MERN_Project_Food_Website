import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { getAllFoodsFromDbAPI } from '../services/allAPI';
import SERVER_URL from '../services/serverUrl';
import { Link } from 'react-router-dom';

const Landing = () => {
  const [allFoods, setAllFoods] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const productPerPage = 8;

  const totalPage = Math.ceil(allFoods?.length / productPerPage);
  const currentPageLastProductIndex = currentPage * productPerPage;
  const currentPageFirstProductIndex = currentPageLastProductIndex - productPerPage;
  const visibleProductCards = allFoods?.slice(currentPageFirstProductIndex, currentPageLastProductIndex);

  const navigateToNextPage = () => {
    if (currentPage < totalPage) {
      setcurrentPage(currentPage + 1);
    }
  };

  const navigateToPreviousPage = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    getAllFoodsFromDb();
  }, []);

  const getAllFoodsFromDb = async () => {
    try {
      const result = await getAllFoodsFromDbAPI();
      if (result.status === 200) {
        setAllFoods(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  

  return (
    <>
      <section style={{ marginTop: '-50px' }}>
        <Header insideLanding={true} />
      </section>
      <div style={{ paddingTop: '120px' }} className="container-fluid my-5">
        <h1 className="text-center mb-4">Our Delicious Menu</h1>
        <div style={{ marginLeft: '1000px' }}>
          <Link style={{ color: 'orangered' }} to={'/cart'}>
            Go to Cart
          </Link>
        </div>
        <br />
        <br />
        <div className="row g-4 align-items-stretch">
          {visibleProductCards?.length > 0 ? (
            visibleProductCards.map((food) => (
              <div key={food?._id} className="col-lg-3 col-md-4 col-sm-6 align-items-stretch">
                <div className="card shadow-sm h-100">
                  <img
                    width="300px"
                    height="200px"
                    src={food?.foodImg ? `${SERVER_URL}/uploads/${food?.foodImg}` : '/placeholder-image.jpg'}
                    className="card-img-top p-4"
                    alt={food?.foodName || 'Food Item'}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title" style={{ minHeight: '2.5rem', wordBreak: 'break-word' }}>
                      {food?.foodName}
                    </h5>
                    <p className="card-text" style={{ minHeight: '1.5rem', wordBreak: 'break-word' }}>
                      ₹{food?.price}
                    </p>
                    <Link to={`/view/${food?._id}`} style={{ backgroundColor: 'orange' }} className="btn w-100">
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-danger fw-bolder">No Foods are available!!!</div>
          )}
        </div>
      </div>
      <div className="text-center my-5 font-bold text-xl mt-20">
        <span onClick={navigateToPreviousPage} className="cursor-pointer">
          <i className="fa-solid fa-backward me-5"></i>
        </span>
        <span className="me-5">
          {currentPage} of {totalPage}
        </span>
        <span onClick={navigateToNextPage} className="cursor-pointer">
          <i className="fa-solid fa-forward me-5"></i>
        </span>
      </div>
    </>
  );
};

export default Landing;
