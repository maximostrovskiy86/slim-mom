export const getUserData = state => state.user?.userData;
export const getSelectedDate = state => state.user?.date;
export const getUserName = state => state.user.username;
export const getUserDaySummary = state => {
   return  state.user.day?.daySummary ?? state.user.day;
}
export const getUserEatenProductsForDay = state => {
    return state.user.day?.eatenProducts;
}

export const getDayId = state => {
    return state.user.day?.id || state.user.day?._id;
}