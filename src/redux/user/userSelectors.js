import moment from "moment";

const initDaySummary = {
    date: moment(new Date()).format("YYYY-MM-DD"),
    kcalLeft: 0,
    kcalConsumed: 0,
    dailyRate: 0,
    percentsOfDailyRate: 0,
};

export const getUserData = state => state.user?.userData;
export const getSelectedDate = state => state.user?.date;
export const getUserName = state => state.user.username;
export const getUserDaySummary = state => state.user.day?.daySummary;
export const getUserEatenProductsForDay = state => {
    return state.user.day?.eatenProducts;
}

export const getUseCalculateDaySummary = state => {
    const selectedDate = getSelectedDate(state);
    const daySummary = getUserDaySummary(state);

    if (!daySummary) {
        return {...initDaySummary, date: selectedDate};
    }

    return daySummary;
}

export const getDayId = state => {
    return state.user.day?.id || state.user.day?._id;
}