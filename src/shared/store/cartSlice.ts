import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TCartItem, TItem } from "../types/types";

type CartState = {
  items: TCartItem[];
  isShown: boolean;
};

const initialState: CartState = {
  items: [],
  isShown: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showCart: (state) => {
      state.isShown = true;
    },
    hideCart: (state) => {
      state.isShown = false;
    },
    addToCart: (state, action: PayloadAction<{ item: TItem }>) => {
      const { item } = action.payload;

      const cartItem: TCartItem = {
        item,
        count: 1,
      };

      state.items.push(cartItem);
    },
    increaseItemCount: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;

      const item = state.items.find((item) => item.item.id === id);

      if (!item) return;

      item.count++;
    },
    decreaseItemCount: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;

      const item = state.items.find((item) => item.item.id === id);

      if (!item) return;

      if (item.count === 1) return;

      item.count--;
    },
    deleteItem: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;

      state.items = state.items.filter((item) => item.item.id !== id);
    },
  },
});

export const { addToCart, showCart, hideCart, increaseItemCount, decreaseItemCount, deleteItem } = cartSlice.actions;
