import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle, BsChevronLeft } from 'react-icons/bs';
import './styles/home.css';
import { fetchStocks, select, search } from '../redux/homeSlice';

const Home = () => {
  const stocks = useSelector((state) => state.stocks.stocks);
  const loading = useSelector((state) => state.stocks.loading);
  const searchTerm = useSelector((state) => state.stocks.searchTerm);
  const dispatch = useDispatch();

  useEffect(() => {
    if (stocks.length === 0) {
      dispatch(fetchStocks());
    }
  }, [dispatch, stocks.length]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="stock-list-container">
      <nav className="stock-list-navbar">
        <div className="header-year-view">
          <div className="year-and-arrow">
            <BsChevronLeft className="arrow-react" />
            <h2 className="stock-year">2023</h2>
          </div>
          <h1 className="stock-list-heading">more views</h1>
          <div className="mic-setting">
            <i className="fa-solid fa-microphone fa-sm icon1" />
            <i className="fa-solid fa-gear fa-sm icon2" />
          </div>
        </div>
        <div className="stock-list-searchbar">
          <label htmlFor="search">
            Search
            <input
              id="search"
              className="stock-list-search"
              onChange={(event) => dispatch(search(event.target.value))}
              type="text"
            />
          </label>
        </div>
      </nav>
      <div className="stock-list-header">
        <p>STATS BY COMPANY</p>
      </div>
      <ul className="stock-list-company">
        {stocks
          .filter((stock) => stock.companyName.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((stock) => (
            <NavLink
              to={`/details/${stock.id}`}
              onClick={() => dispatch(select(stock.id))}
              key={stock.id}
              className="stock-company-item"
            >
              <div className="namePrice">
                <div className="bottom">
                  <span className="back-arrow">
                    {stock.price > 0 ? (
                      <BsArrowRightCircle className="back-arrow" />
                    ) : (
                      <BsArrowRightCircle className="back-arrow" />
                    )}
                  </span>
                  <h3 className="company-name">{stock.companyName}</h3>
                  <span className="price">
                    Price: $
                    {stock.price}
                  </span>
                </div>
              </div>
            </NavLink>
          ))}
      </ul>
    </div>
  );
};

export default Home;
