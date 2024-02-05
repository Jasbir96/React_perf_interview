// to create a slice -> redux;

import { createSlice } from "@reduxjs/toolkit";
const UserSlice = createSlice({
  name: "userslice",
  // intinal state value
  initialState: {
    user: null,
    error: false,
    loading: true,
  },
  // functions to update your state 
  reducers: {
    // loading
    userLoading: (state) => {
      state.error = false;
      state.loading = true;
      state.user = null;
    },
    //error state
    userError: (state) => {
      state.error = true;
      state.loading = false;
      state.user = null;
    },
    // got the data
    useData: (state, action) => {
      state.loading = false;
      state.error = false;
      state.user = action.payload;
    }
  }
});

export default UserSlice;