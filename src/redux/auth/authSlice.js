import {createSlice} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import {persistReducer} from "redux-persist";
import authOperations from "./authOperations";
import {getCurrentUserInfo} from "../user/userOperations";


const authPersistConfig = {
	key: 'auth',
	storage,
	whitelist: ["refreshToken", "accessToken", "sid"],
}

const initialState = {
	accessToken: null,
	refreshToken: null,
	sid: null,
	isLoggedIn: false,
	isLoading: false,
	error: null,
}


const handlePending = state => {
	state.isLoading = true;
};

const handleRejected = (state, action) => {
	state.isLoading = false;
	state.error = action.payload;
};

const authSlice = createSlice({
	name: "auth",
	initialState,
		extraReducers: builder => {
		builder
			// register reducer
			.addCase(authOperations.register.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(authOperations.register.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isLoggedIn = false;
				state.isLoading = false;
				state.error = null;
			})
			.addCase(authOperations.register.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			
			// login reducer
			.addCase(authOperations.login.pending, handlePending)
			.addCase(authOperations.login.fulfilled, (state, action) => {
				state.accessToken = action.payload.data.accessToken;
				state.refreshToken = action.payload.data.refreshToken;
				state.sid = action.payload.data.sid;
				state.isLoggedIn = true;
				state.isLoading = false;
				state.error = null;
			})
			.addCase(authOperations.login.rejected, handleRejected)
			
			// logOut reducer
			.addCase(authOperations.logOut.pending, handlePending)
			.addCase(authOperations.logOut.fulfilled, (state, _) => {
				state.accessToken = null;
				state.refreshToken = null;
				state.sid = null;
				state.isLoggedIn = false;
				state.isLoading = false;
				state.error = null;
			})
			.addCase(authOperations.logOut.rejected, handleRejected)
			
			.addCase(getCurrentUserInfo.fulfilled, (state, _) => {
				state.isLoggedIn = true;
			})
		},
});

export const authReducer = persistReducer(
	authPersistConfig,
	authSlice.reducer
);