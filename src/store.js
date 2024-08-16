import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './components/cartSlice/cartSlice';
import searchReducer from './components/searchSlice/searchSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
  },
});

export default store;