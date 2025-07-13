import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	dailyRate: null,
	notAllowedProducts: [],
	isLoading: false,
	error: null,
	isOpenModal: false,
}

const dailyCalorieIntakeSlice = createSlice({
	name: "dailyCalorieIntake",
	initialState,
	reducers: {
		fetchingDailyCalorieIntakeInProgress(state) {
			state.isLoading = true;
		},
		fetchingDailyCalorieIntakeSuccess(state, action) {
			state.dailyRate = action.payload.dailyRate;  // Immer сам преобразует обновление в Slice
			state.notAllowedProducts = action.payload.notAllowedProducts;  // Immer сам преобразует обновление в Slice
			state.isLoading = false;
			state.error = null;
		},
		fetchingDailyCalorieIntakeError(state, action) {
			state.isLoading = false;
			state.error = action.payload;
		},
		
		isOpenModal(state, action) {
			state.isOpenModal = action.payload;
		}
	},
});

export const {
	fetchingDailyCalorieIntakeInProgress,
	fetchingDailyCalorieIntakeSuccess,
	fetchingDailyCalorieIntakeError,
	isOpenModal
} = dailyCalorieIntakeSlice.actions;

export const dailyCalorieIntakeReducer = dailyCalorieIntakeSlice.reducer;

