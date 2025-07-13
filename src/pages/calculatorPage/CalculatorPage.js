import React from "react";
import {CalculatorPageContainer} from "./CalculatorPage.styled"
import CalculatorForm from "../../components/calculatorForm";

const CalculatorPage = ({setDailyRate}) => {
	return (
		<CalculatorPageContainer>
			<CalculatorForm setDailyRate={setDailyRate}/>
		</CalculatorPageContainer>
	);
}

export default CalculatorPage;
