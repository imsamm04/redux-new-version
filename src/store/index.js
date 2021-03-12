import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './reducers/todosSlice'

//store
const store = configureStore({
  reducer: {
    todosReducer
  },
});

//export

export default store;
