import { configureStore } from '@reduxjs/toolkit';
import playerDataSlice from '../features/moneyReducer/playerDataSlice.js';
import shopkeeperDataSlice from '../features/moneyReducer/shopkeeperDataSlice.js';

export const store = configureStore({
  reducer: {
    playerData: playerDataSlice,
    shopkeeperData: shopkeeperDataSlice,
  },
});
