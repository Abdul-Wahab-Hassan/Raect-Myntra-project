import { configureStore } from "@reduxjs/toolkit";
import itemsslice from "./sliceitem";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";

const mytrastore = configureStore({
  reducer: {
    items: itemsslice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
  },
});
export default mytrastore;
