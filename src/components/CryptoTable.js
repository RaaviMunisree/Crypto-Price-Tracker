import React from 'react';
import { useSelector } from 'react-redux';
import './CryptoTable.css'; // External CSS file for styling

const formatNumber = (number) => {
  return number.toLocaleString('en-US');
};

const formatPercent = (percent) => {
  const isPositive = percent >= 0;
  const arrow = isPositive ? '▲' : '▼';
  const color = isPositive ? 'green' : 'red';
  return <span className={color}>{arrow} {Math.abs(percent)}%</span>;
};

const CryptoTable = () => {
  const assets = useSelector((state) => state.crypto.assets);

  return (
    <div className="table-container">
      <h2>Crypto Price Tracker</h2>
      <table className="crypto-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>Volume(24h)</th>
            <th>Circulating Supply</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((crypto, index) => (
            <tr key={crypto.id}>
              <td>{index + 1}</td>
              <td className="name-cell">
                <img src={crypto.logo} alt={crypto.symbol} className="logo" />
                <div className="name-symbol">
                  <div className="crypto-name">{crypto.name}</div>
                  <div className="crypto-symbol">{crypto.symbol}</div>
                </div>
              </td>
              <td>${crypto.price.toLocaleString()}</td>
              <td>{formatPercent(crypto.percent1h)}</td>
              <td>{formatPercent(crypto.percent24h)}</td>
              <td>{formatPercent(crypto.percent7d)}</td>
              <td>${formatNumber(crypto.marketCap)}</td>
              <td>
                ${formatNumber(crypto.volume24h)}
                <div className="sub-info">{crypto.circulatingSupply.split(' ')[0]} {crypto.symbol}</div>
              </td>
              <td>{crypto.circulatingSupply}</td>
              <td>
                <img src={crypto.chart} alt="7d chart" className="chart-img" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
