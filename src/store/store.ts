import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { movieSearch } from "../shared/services/movieApi";
import wishListSlice from "./wishlistState/wishListSlice";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';


const rootReducer= combineReducers({
  [movieSearch.reducerPath]: movieSearch.reducer,
  wishlist: wishListSlice,
})
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieSearch.middleware),
});

export default store;

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
