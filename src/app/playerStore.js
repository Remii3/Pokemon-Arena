import { configureStore } from '@reduxjs/toolkit';
import playerDataSlice from '../features/playerDataSlice.js';

export const store = configureStore({
  reducer: {
    playerData: playerDataSlice,
  },
});
