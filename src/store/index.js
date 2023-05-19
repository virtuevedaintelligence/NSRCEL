import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slices/CategorySlice";
import fileSlice from "./slices/FileSlice";

const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        files: fileSlice
    },
});
export default store;
