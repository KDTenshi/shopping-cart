import { combineReducers } from "@reduxjs/toolkit";
import { cartSlice } from "../../shared/store/cartSlice";

export const appReducer = combineReducers({
  [cartSlice.reducerPath]: cartSlice.reducer,
});
