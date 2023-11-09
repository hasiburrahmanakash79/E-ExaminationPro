import { createSlice } from "@reduxjs/toolkit";

const userGemsSlice = createSlice({
  name: 'userGems',
  initialState: {
    remainGems: null,
  },
  reducers: {
    reduceGems: (state, { payload }) => {
      fetch(`http://localhost:3500/reduceGems?email=${payload}`, {
        method: 'PATCH',
      })
        .then(res => res.json())
        .then(data => console.log(data))
    },
  }
});

export const { reduceGems } = userGemsSlice.actions;

export default userGemsSlice.reducer;
