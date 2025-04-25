import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../features/crypto/cryptoSlice';
import { FaRegStar, FaStar } from 'react-icons/fa';
import './CryptoTable.css';

const CryptoTable = () => {
  const assets = useSelector((state) => state.crypto.assets);
  const favorites = useSelector((state) => state.crypto.favorites);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const filteredAssets = assets
    .filter(
      (asset) =>
        asset.name.toLowerCase().includes(search.toLowerCase()) ||
        asset.symbol.toLowerCase().includes(search.toLowerCase())
    )
    .filter((asset) => !showFavoritesOnly || favorites.includes(asset.id));

  return (
    <div className="table-container">
      <form
       onSubmit={(e) => {
       e.preventDefault(); // Prevents page reload
      }}
      style={{ marginBottom: '16px' }}
      >
      <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search by name or symbol..."
      style={{
      padding: '8px 12px',
      width: '100%',
      maxWidth: '400px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      }}
      />
      </form>


      <button
        onClick={() => setShowFavoritesOnly((prev) => !prev)}
        style={{
          marginBottom: '20px',
          padding: '8px 16px',
          backgroundColor: '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        {showFavoritesOnly ? 'Show All' : 'Show Favorites'}
      </button>

      <div className="table-wrapper">
        <table className="crypto-table">
          <thead>
            <tr>
              <th>⭐</th>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>1h %</th>
              <th>24h %</th>
              <th>7d %</th>
              <th>Market Cap</th>
              <th>Volume(24h)</th>
              <th>Circulating Supply</th>
              <th>7D Chart</th>
            </tr>
          </thead>
          <tbody>
            {filteredAssets.map((crypto, index) => (
              <tr key={crypto.id}>
                <td
                  className="text-center"
                  style={{ cursor: 'pointer', color: '#facc15' }}
                  onClick={() => dispatch(toggleFavorite(crypto.id))}
                >
                  {favorites.includes(crypto.id) ? <FaStar size={16} /> : <FaRegStar size={16} />}
                </td>
                <td>{index + 1}</td>
                <td className="name-cell">
                  <img src={crypto.logo} alt={crypto.name} className="logo" />
                  <div className="name-symbol">
                    <span className="crypto-name">{crypto.name}</span>
                    <span className="crypto-symbol">{crypto.symbol}</span>
                  </div>
                </td>
                <td>${crypto.price.toLocaleString()}</td>
                <td className={crypto.percent1h >= 0 ? 'green' : 'red'}>
                  {crypto.percent1h >= 0 ? '▲' : '▼'} {crypto.percent1h}%
                </td>
                <td className={crypto.percent24h >= 0 ? 'green' : 'red'}>
                  {crypto.percent24h >= 0 ? '▲' : '▼'} {crypto.percent24h}%
                </td>
                <td className={crypto.percent7d >= 0 ? 'green' : 'red'}>
                  {crypto.percent7d >= 0 ? '▲' : '▼'} {crypto.percent7d}%
                </td>
                <td>${crypto.marketCap.toLocaleString()}</td>
                <td>${crypto.volume24h.toLocaleString()}</td>
                <td>{crypto.circulatingSupply}</td>
                <td>
                  <img src={crypto.chart} alt="7d chart" className="chart-img" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoTable;
