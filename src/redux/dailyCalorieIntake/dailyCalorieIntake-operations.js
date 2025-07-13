import axios from "axios";
import {
	fetchingDailyCalorieIntakeInProgress,
	fetchingDailyCalorieIntakeSuccess,
	fetchingDailyCalorieIntakeError
} from "./dailyCalorieIntakeSlice";

axios.defaults.baseURL = "https://slimmom-backend.goit.global";

export const fetchDailyCalorieIntake = (userData) => async dispatch => {
	try {
		// Индикатор загрузки
		dispatch(fetchingDailyCalorieIntakeInProgress());
		// HTTP-запрос
		const response = await axios.post("/daily-rate", userData);
		// Обработка данных
		dispatch(fetchingDailyCalorieIntakeSuccess(response.data));
	} catch (e) {
		// Обработка ошибки
		dispatch(fetchingDailyCalorieIntakeError(e.message));
	}
};