import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  userId: "",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.userId = null;
      state.user = null;
      state.token = null;
    },
  },
});

export const { setMode, setLogin, setLogout, setUserId } = globalSlice.actions;

export default globalSlice.reducer;
