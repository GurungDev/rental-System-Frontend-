import { createSlice } from "@reduxjs/toolkit";
import {
  getToken,
  isUserLogin,
  resetlogin,
  setLoginInfo,
  isAdmin,
  setAdmin,
} from "../../utils/storage.utils";

const initialState = {
  loginStatus: isUserLogin() || false,
  token: getToken() || "",
  isAdmin: isAdmin() || false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.loginStatus = true;
      state.token = action.payload?.token;
      setLoginInfo({ ...action.payload });
    },
    setAdminState: (state, action) => {
      setAdmin({ ...action.payload });
      state.isAdmin = true;
    },

    resetLogin: (state, action) => {
      state.loginStatus = false;
      state.token = "";
      state.isAdmin = false;

      resetlogin();
    },
  },
});

export const { setLogin, resetLogin, setAdminState } = userSlice.actions;
export default userSlice.reducer;
