
import { updateAsset } from './cryptoSlice';
import { sampleCryptoData } from './sampleData';

function getRandomFloat(min, max, decimals = 2) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
}

export function startMockSocket(dispatch) {
  setInterval(() => {
    const randomAsset = sampleCryptoData[Math.floor(Math.random() * sampleCryptoData.length)];
    const updated = {
      ...randomAsset,
      price: getRandomFloat(randomAsset.price * 0.95, randomAsset.price * 1.05),
      percent1h: getRandomFloat(-2, 2),
      percent24h: getRandomFloat(-5, 5),
      percent7d: getRandomFloat(-10, 15),
      volume24h: Math.floor(randomAsset.volume24h * getRandomFloat(0.9, 1.1)),
    };

    dispatch(updateAsset(updated));
  }, 1500); // every 1.5 seconds
}
