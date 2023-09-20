import { createSlice } from "@reduxjs/toolkit";

const userGemsSlice = createSlice({
  name: 'userGems',
  initialState: {
    remainGems: null,
  },
  reducers: {
    reduceGems: (state, { payload }) => {
      fetch(`http://localhost:4000/reduceGems?email=${payload}`, {
        method: 'PATCH',
      })
        .then(res => res.json())
        .then(data => console.log(data))
    },
  }
});

export const { reduceGems } = userGemsSlice.actions;

export default userGemsSlice.reducer;
