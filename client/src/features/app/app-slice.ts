import { RootState } from "./../../app/store";
import { createSlice } from "@reduxjs/toolkit";

export interface appStateType {
  mobileHeaderOpen: boolean;
}

const initialState: appStateType = {
  mobileHeaderOpen: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openMobileHeader: (state: any) => {
      state.mobileHeaderOpen = true;
    },
    closeMobileHeader: (state: any) => {
      state.mobileHeaderOpen = false;
    },
  },
});

export const appState = (state: RootState) => state.app;

export const { closeMobileHeader, openMobileHeader } = appSlice.actions;

export default appSlice.reducer;
