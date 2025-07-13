import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://slimmom-backend.goit.global";

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = "";
    },
};

export const getUserDailyRateById = createAsyncThunk('user/dailyRate',
    async (userData, thunkAPI) => {
        const state = thunkAPI.getState();
        const userId = state.user.id;

        try {
            return await axios.post(`/daily-rate/${userId}`, userData);
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    });

export const addUserProductByDay = createAsyncThunk('user/addProduct',
    async (dataProduct, thunkAPI) => {
        try {
            return await axios.post(`/day`, dataProduct);
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    })

export const searchUserProductByDay = createAsyncThunk('user/searchProduct',
    async (product, thunkAPI) => {
        try {
            const response = await axios.get(`/product?search=${product}`);
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    })

export const deleteUserProductByDay = createAsyncThunk('user/deleteProduct',
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.delete(`/day`, {data: {...credentials}});
            return response;
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    })

export const getCurrentUserInfo = createAsyncThunk('user/userRefreshInfo',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.accessToken;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue(undefined);
        }

        token.set(persistedToken);
        try {
            return await axios.get(`/user`);
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    })

export const getUserOneDayInfo = createAsyncThunk('user/userOneDayInfo',
    async (date, thunkAPI) => {

        try {
            return await axios.post(`/day/info`, {date});
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    });


