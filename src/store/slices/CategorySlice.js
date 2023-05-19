import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../service/CategoryService";

export const categories = createAsyncThunk("categories-action", async (category) => {
    const otpResponse = UserService.generateOtp(category);
    return (await otpResponse).data;
});

const categorySlice = createSlice({
    name: "categories",
    initialState: {
        isCategoriesLoading: false,
        dataCategories: null,
        isErrorCategories: false
    },
    extraReducers: (builder) => {
        builder.addCase(categories.pending, (state, action) => {
            state.isCategoriesLoading = true;
        });

        builder.addCase(categories.fulfilled, (state, action) => {
            state.isCategoriesLoading = false;
            state.dataCategories = action.payload;
        });

        builder.addCase(categories.rejected, (state, action) => {
            state.isErrorCategories = true;
        });
    },
});

export default categorySlice.reducer;
