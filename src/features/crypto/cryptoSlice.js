// src/store/cryptoSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { sampleCryptoData } from './sampleData';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    assets: sampleCryptoData,
    favorites: [], // Track starred crypto IDs
  },
  reducers: {
    updateAsset(state, action) {
      const updated = action.payload;
      const index = state.assets.findIndex((a) => a.id === updated.id);
      if (index !== -1) {
        state.assets[index] = updated;
      }
    },
    toggleFavorite(state, action) {
      const id = action.payload;
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter((favId) => favId !== id);
      } else {
        state.favorites.push(id);
      }
    },
  },
});

export const { updateAsset, toggleFavorite } = cryptoSlice.actions;
export default cryptoSlice.reducer;
