import React, { useState } from 'react';
import SERVER_URL from '../services/serverUrl';
import { Link } from 'react-router-dom';

const Menu = ({ displayFoods }) => {
  const [filterCategory, setFilterCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 8;

  const categories = ['All', 'Fast Food', 'Biriyani', 'Desserts', 'Chinese Dishes'];

  // Filter foods based on the selected category
  const filteredFoods =
    filterCategory === 'All'
      ? displayFoods
      : displayFoods.filter(
          (food) =>
            food.category &&
            food.category.toLowerCase() === filterCategory.toLowerCase()
        );

  // Pagination Logic
  const totalPage = Math.ceil(filteredFoods.length / productPerPage);
  const currentPageLastProductIndex = currentPage * productPerPage;
  const currentPageFirstProductIndex = currentPageLastProductIndex - productPerPage;
  const visibleProductCards = filteredFoods.slice(currentPageFirstProductIndex, currentPageLastProductIndex);

  // Navigate to next and previous pages
  const navigateToNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const navigateToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle category selection
  const handleCategoryChange = (category) => {
    setFilterCategory(category);
    setCurrentPage(1); // Reset to first page on category change
  };

  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center text-dark">Our Specials</h1>
        <div className="menu-list mb-4">
          <ul className="nav justify-content-center">
            {categories.map((category, index) => (
              <li key={index} className="nav-item">
                <button
                  className={`nav-link ${filterCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="row g-4">
          {visibleProductCards.length > 0 ? (
            visibleProductCards.map((food, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="card text-center shadow-sm position-relative">
                  <div className="m-3 position-relative">
                    <div className="position-absolute top-0 end-0 m-2">
                      {/* <a href="#">
                        <i className="fas fa-heart text-light" style={{ fontSize: '24px' }}></i>
                      </a> */}
                    </div>
                    <img
                      className="img-fluid"
                      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                      src={
                        food?.foodImg
                          ? `${SERVER_URL}/uploads/${food.foodImg}`
                          : '/placeholder-image.jpg' // Fallback image
                      }
                      alt={food?.foodName || 'Food Item'}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{food?.foodName}</h5>
                    <Link
                      to={`/view/${food?._id}`}
                      className="btn text-white fw-semibold"
                      style={{ textDecoration: 'none', backgroundColor: 'orange' }}
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No foods found for this category.</p>
          )}
        </div>

        {/* Pagination */}
        {filteredFoods.length > 0 && (
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
        )}
      </div>
    </>
  );
};

export default Menu;
