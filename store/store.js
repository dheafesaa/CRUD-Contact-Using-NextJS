import { configureStore } from '@reduxjs/toolkit'
import ContactReducer from "./data/index";

export default configureStore({
  reducer: {
    ContactReducer
  }
})