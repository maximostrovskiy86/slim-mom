import React from 'react';
import {MainPageContainer} from "./MainPage.styled";
import HeadTitle from "../../components/headTitle";
import CalculatorForm from "../../components/calculatorForm";

const MainPage = ({setDailyRate}) => {
	return (
		<>
			<MainPageContainer className="main-page-container">
				<HeadTitle>Calculate your daily calorie intake right now</HeadTitle>
				<CalculatorForm setDailyRate={setDailyRate}/>
			</MainPageContainer>
		</>
	)
}

export default MainPage;