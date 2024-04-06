import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STORAGE_KEYS } from "../constants/storageKeys";
import { removeFromStorage } from "../constants/storage";
import { User } from "../types/User";
import type { RootState } from "../app/store";

export interface AuthState {
  user: User | null;
  token: string | number | true | object | null | boolean;
  tempToken: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  tempToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuth: (state) => {
      removeFromStorage(STORAGE_KEYS.token);
      state.user = null;
      state.token = null;
    },
    setCredentials: (
      state,
      action: PayloadAction<Pick<AuthState, "user" | "token">>
    ) => {
      state.user = action.payload.user ? action.payload.user : null;
      state.token = action.payload.token ? action.payload.token : null;
    },
    temporaryToken: (
      state,
      action: PayloadAction<Pick<AuthState, "tempToken">>
    ) => {
      state.tempToken = action.payload.tempToken;
    },
  },
});

export const { resetAuth, setCredentials, temporaryToken } = authSlice.actions;
export const getCurrentUser = (state: RootState) => state.auth.user;
export const getToken = (state: RootState) => state.auth.token;
export const getTempToken = (state: RootState) => state.auth.tempToken;

export default authSlice.reducer;
