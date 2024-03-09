import { createSlice } from "@reduxjs/toolkit";
import { SearchDataItemType } from "../../shared/types/moves.type";
type WishlistType = SearchDataItemType[];

const initialState: WishlistType = [];

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.push(action.payload);
    },
    deleteFromWishlist: (state, action) => {
      state.splice(
        state.findIndex((item) => item.imdbID === action.payload),
        1
      );
    },
  },
  selectors: {
    wishlist: (state) => state,
  },
});

export const { wishlist } = wishlistSlice.selectors;
export const { addToWishlist, deleteFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
