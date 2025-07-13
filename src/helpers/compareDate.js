export const compareDate = (currentDayDate, fromArrDate) => {
	const currentDay = currentDayDate.split('');
	const fromArr = fromArrDate.split('');
	
	let sumCurrentDay = 0;
	for (let i = 0; i < currentDay.length; i++) {
		if (isNaN(currentDay[i])) {
			continue;
		}
		
		sumCurrentDay += currentDay[i];
	}
	
	const total = fromArr.reduce((previousValue, number) => {
		if (isNaN(number)) {
			return previousValue;
		}
		
		return previousValue + number;
	}, 0);
	
	return total === sumCurrentDay;
}