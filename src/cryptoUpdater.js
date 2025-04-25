import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAsset } from './store/cryptoSlice';

const CryptoUpdater = () => {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.crypto.assets);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * assets.length);
      const asset = assets[randomIndex];

      // Simulate new values
      const priceChange = (Math.random() * 2 - 1); // -1% to +1%
      const newPrice = +(asset.price * (1 + priceChange / 100)).toFixed(2);
      const percent1h = +(Math.random() * 4 - 2).toFixed(2);
      const percent24h = +(Math.random() * 6 - 3).toFixed(2);
      const percent7d = +(Math.random() * 10 - 5).toFixed(2);
      const newVolume = Math.floor(asset.volume24h * (1 + Math.random() * 0.05));

      const updatedAsset = {
        ...asset,
        price: newPrice,
        percent1h,
        percent24h,
        percent7d,
        volume24h: newVolume,
      };

      dispatch(updateAsset(updatedAsset));
    }, 1500); // every 1.5 seconds

    return () => clearInterval(interval);
  }, [assets, dispatch]);

  return null; // It's just logic, no UI
};

export default CryptoUpdater;
