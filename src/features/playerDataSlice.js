import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  money: 100,
};

export const playerDataSlice = createSlice({
  name: 'playerData',
  initialState,
  reducers: {
    incrementMoney: state => {},
    decrementMoney: state => {},
  },
});

export const { incrementMoney, decrementMoney } = playerDataSlice.actions;
export default playerDataSlice.reducer;
