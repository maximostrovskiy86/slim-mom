import moment from "moment";


export const getCurrentDate = () => {
	return  moment( new Date()).format("YYYY-MM-DD");
}