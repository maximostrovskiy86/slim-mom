import React from "react";
import {DailyCalorieIntakeContainer, DailyCalorieIntakeList} from "./DailyCalorieIntake.styled";
import {useNavigate} from "react-router-dom";
import Button from "../button";
import {useSelector} from "react-redux";
import {getUserData} from "../../redux/user/userSelectors";
import {getIsLoggedIn} from "../../redux/auth/authSelectors";


const DailyCalorieIntake = ({userDailyRate, toggleModal}) => {
	const {dailyRate, notAllowedProducts} = userDailyRate;
	const userIsLoginDailyRate = useSelector(getUserData);
	const isLoggedIn = useSelector(getIsLoggedIn);
	const navigate = useNavigate();
	
	const redirectToLogin = () => {
		toggleModal();
		isLoggedIn ? navigate("/dairy", {replace: true}) : navigate("/login", {replace: true});
	}
	
	return (
		<DailyCalorieIntakeContainer>
			<div className="calories">{isLoggedIn ? userIsLoginDailyRate.dailyRate : dailyRate}<span>kcal</span></div>
			<div className="not-allowed-products-box">
				<h2>Foods that you should not eat</h2>
				<DailyCalorieIntakeList>
					{isLoggedIn ? userIsLoginDailyRate.notAllowedProducts.slice(0, 5).map((product, index) => {
						return <li key={product}>{index + 1}. {product}</li>
					}) : notAllowedProducts?.slice(0, 5).map((product, index) => {
						return <li key={product}>{index + 1}. {product}</li>
					})}
				
				</DailyCalorieIntakeList>
				<Button onClick={redirectToLogin}>Lose weight</Button>
			</div>
		</DailyCalorieIntakeContainer>
	)
}

export default DailyCalorieIntake;