import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from './pasteSlice/pasteSlice.jsx'

export const store = configureStore({
  reducer: {
    paste: pasteReducer
  },
})