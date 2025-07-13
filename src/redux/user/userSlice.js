import {createSlice} from '@reduxjs/toolkit'
import {
    addUserProductByDay,
    deleteUserProductByDay,
    getCurrentUserInfo,
    getUserDailyRateById,
    getUserOneDayInfo
} from "./userOperations";
import authOperations from "../auth/authOperations";
import {getCurrentDate} from "../../helpers/getCurrentDay";


const initialState = {
    email: null,
    username: null,
    id: null,
    date: getCurrentDate(),
    userData: {
        weight: null,
        height: null,
        age: null,
        bloodType: null,
        desiredWeight: null,
        dailyRate: null,
        notAllowedProducts: [],
        id: null,
    },
    eatenProduct: {
        title: "",
        eight: null,
        kcal: null,
        id: ""
    },
    day: {
        id: "",
        eatenProducts: [],
        date: "",
        daySummary: {
            date: "",
            kcalLeft: null,
            kcalConsumed: null,
            dailyRate: null,
            percentsOfDailyRate: null,
            userId: "",
            id: ""
        }
    },
    isLoading: false,
    error: null,
}


const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getUserOneDayInfo.pending, (state, _) => {
                state.isLoading = true;
            })
            .addCase(getUserOneDayInfo.fulfilled, (state, action) => {
                state.date = action.meta.arg;
                state.day = action.payload.data;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(getUserOneDayInfo.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })


            .addCase(getCurrentUserInfo.pending, (state, _) => {
                state.isLoading = true;
            })
            .addCase(getCurrentUserInfo.fulfilled, (state, action) => {
                state.day = action.payload.data.days.find(day => state.date === day.date);
                state.username = action.payload.data.username;
                state.id = action.payload.data.id;
                state.userData = action.payload.data.userData;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(getCurrentUserInfo.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })


            .addCase(addUserProductByDay.pending, (state, _) => {
                state.isLoading = true;
            })
            .addCase(addUserProductByDay.fulfilled, (state, action) => {
                state.eatenProduct = action.payload.data.eatenProduct;
                state.day = action.payload.data.newDay ? action.payload.data.newDay : action.payload.data.day;
                state.day.daySummary = action.payload.data.newSummary ? action.payload.data.newSummary : action.payload.data.daySummary;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(addUserProductByDay.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })


            .addCase(getUserDailyRateById.pending, (state, _) => {
                state.isLoading = true;
            })
            .addCase(getUserDailyRateById.fulfilled, (state, action) => {
                state.userData = action.payload.data;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(getUserDailyRateById.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })


            .addCase(deleteUserProductByDay.pending, (state, _) => {
                state.isLoading = true;
            })
            .addCase(deleteUserProductByDay.fulfilled, (state, action) => {
                state.day.eatenProducts = state.day.eatenProducts.filter(product => {
                    return product.id !== action.meta.arg.eatenProductId;
                })
                state.day.daySummary = action.payload.data.newDaySummary ? action.payload.data.newDaySummary : action.payload.data.daySummary;
                state.error = null;
            })
            .addCase(deleteUserProductByDay.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })


            .addCase(authOperations.logOut.pending, (state, _) => {
                state.isLoading = true;
            })
            .addCase(authOperations.logOut.fulfilled, (state, _) => {
                state.isLoading = false;
                state.email = null;
                state.username = null;
                state.eatenProduct = null;
                state.day = null
                state.daySummary = null;
                state.userData = null;
                state.error = null;
            })
            .addCase(authOperations.logOut.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })


            .addCase(authOperations.login.pending, (state, _) => {
                state.isLoading = true;
            })
            .addCase(authOperations.login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.email = action.payload.data.user.email;
                state.username = action.payload.data.user.username;
                state.userData = action.payload.data.user.userData;
                state.daySummary = action.payload.data.todaySummary;
                state.error = null;
            })
            .addCase(authOperations.login.rejected, (state, action) => {
                state.error = action.payload;
            })
    }
})

export const userReducer = userSlice.reducer;
