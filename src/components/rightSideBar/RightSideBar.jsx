import React from "react";
import {RightSideBarContainer, SummaryItem} from "./RightSideBar.styled";
import {useSelector} from "react-redux";
import {getUserData} from "../../redux/user/userSelectors";
import {getUserDaySummary, getSelectedDate} from "../../redux/user/userSelectors";

const RightSideBar = () => {
	const userTodaySummary = useSelector(getUserDaySummary);
	const userIsLoginDailyRate = useSelector(getUserData);
	const currentDate = useSelector(getSelectedDate);
	console.log("userTodaySummary", userTodaySummary)
	console.log("getSelectedDate", currentDate)
	
	return (
		<RightSideBarContainer className='right-sidebar'>
			<h3>Summary for date {currentDate}</h3>
			<SummaryItem><span>Calories left to consume</span><span>{Math.round(userTodaySummary?.kcalLeft) || 0} kcal</span></SummaryItem>
			<SummaryItem><span>Calories consumed</span><span>{Math.round(userTodaySummary?.kcalConsumed) || 0} kcal</span></SummaryItem>
			<SummaryItem><span>Daily Rate</span><span>{userTodaySummary?.dailyRate || 0} kcal</span></SummaryItem>
			<SummaryItem><span>% Of Daily Rate</span><span>{Math.round(userTodaySummary?.percentsOfDailyRate) || 0} kcal</span></SummaryItem>
			<h3>Not recommended products</h3>
			<ul className="notAllowedProducts">
				{userIsLoginDailyRate && userIsLoginDailyRate.notAllowedProducts.slice(0, 5).map((product, index) => {
					return <li key={product}>{index + 1}. {product}</li>
				})}
			</ul>
		</RightSideBarContainer>
	)
}

export default RightSideBar;