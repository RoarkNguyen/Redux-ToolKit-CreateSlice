import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Counter/counterSlice";
// Root reducer include all reducer
const rootReducer = {
  count: counterReducer,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
