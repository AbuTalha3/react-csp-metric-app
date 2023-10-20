import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles/details.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Detail = () => {
  const selectedStockId = useSelector((state) => state.stocks.selectedStock);
  const stock = useSelector((state) => state.stocks.stocks)
    .filter((elem) => elem.id === selectedStockId)[0];

  return (

    <div className="flex">
      <nav className="nav-toggle">
        <NavLink to="/" className="nav-toggle-back"><AiOutlineArrowLeft style={{ color: 'seashell' }} /></NavLink>
      </nav>
      {
                selectedStockId ? (
                  <div className="stock-details">
                    <div className="detHeader">
                      <h1>{stock.companyName}</h1>
                    </div>
                    <div className="stock-metric-details">
                      <p className="company-share-view">COMPANY/SHARE VIEW</p>
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
  );
};

export default Detail;
