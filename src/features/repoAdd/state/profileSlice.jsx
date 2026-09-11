import { createSlice } from "@reduxjs/toolkit";
import { profileAddAction } from "./profileActions";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    user: null,
    isLoading: false,
  },
  reducers : {
    removeUser: (state)=> {
      state.user = null,
      state.isLoading = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(profileAddAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(profileAddAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(profileAddAction.rejected, (state) => {
        state.user = null;
        state.isLoading = false;
      });
  },
});


export default profileSlice.reducer;
export const { removeUser } = profileSlice.actions