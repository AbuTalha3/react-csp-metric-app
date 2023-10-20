import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles/details.css';
import './styles/home.css';
import { BsChevronLeft } from 'react-icons/bs';

const Detail = () => {
  const selectedStockId = useSelector((state) => state.stocks.selectedStock);
  const stock = useSelector((state) => state.stocks.stocks)
    .filter((elem) => elem.id === selectedStockId)[0];

  return (
    <>
      <nav className="nav-toggle">
        <NavLink to="/" className="nav-toggle-back">
          <div className="year-and-arrow">
            <BsChevronLeft className="arrow-react" />
            <h2 className="stock-year">2023</h2>
          </div>
          <h1 className="stock-list-heading">city stock views</h1>
          <div className="mic-setting">
            <i className="fa-solid fa-microphone fa-sm icon1" />
            <i className="fa-solid fa-gear fa-sm icon2" />
          </div>
        </NavLink>
      </nav>
      <div className="flex">
        {
                selectedStockId ? (
                  <div className="stock-details">
                    <div className="detHeader">
                      <h1>{stock.companyName}</h1>
                      <span className="price-detail-page">
                        Price: $
                        {stock.price}
                      </span>
                    </div>
                    <div className="stock-metric-details">
                      <p className="company-share-view">COMPANY BACKGROUND -2023</p>
                    </div>
                    <div className="stock-bar-container">
                      <div className="stock-infobar">
                        <span className="stock-info-name">Price  </span>
                        <span className="stock-metric-info">{stock.price}</span>
                      </div>
                      <div className="stock-infobar">
                        <span className="stock-info-name">Volume  </span>
                        <span className="stock-metric-info">{stock.volume}</span>
                      </div>
                      <div className="stock-infobar">
                        <span className="stock-info-name">Beta  </span>
                        <span className="stock-metric-info">{stock.beta}</span>
                      </div>
                      <div className="stock-infobar">
                        <span className="stock-info-name">Dividend  </span>
                        <span className="stock-metric-info">{stock.lastAnnualDividend}</span>
                      </div>
                      <div className="stock-infobar">
                        <span className="stock-info-name">Market Cap  </span>
                        <span className="stock-metric-info">{stock.marketCap}</span>
                      </div>
                    </div>
                  </div>
                ) : <div>Data not loaded </div>
            }

      </div>
    </>
  );
};

export default Detail;
