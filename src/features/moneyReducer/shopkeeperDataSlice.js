import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  money: 1000,
};

export const shopkeeperDataSlice = createSlice({
  name: 'shopkeeperData',
  initialState: initialState,
  reducers: {
    incrementShopkeeperMoney: (state, data) => {
      state.money += data.payload;
    },
    decrementShopkeeperMoney: (state, data) => {
      state.money -= data.payload;
    },
  },
});

export const { incrementShopkeeperMoney, decrementShopkeeperMoney } =
  shopkeeperDataSlice.actions;
export default shopkeeperDataSlice.reducer;
