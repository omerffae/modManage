// store.js

import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './dataSlice'; // dataSlice'ı import ediyoruz
import modalSlice  from './modalSlice'; // modalReducer'ı default import ediyoruz

export const store = configureStore({
  reducer: {
    data: dataSlice, // dataSlice'ı burada kullanıyoruz
    modal: modalSlice, // modalReducer'ı burada kullanıyoruz
  },
});
