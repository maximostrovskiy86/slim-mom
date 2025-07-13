import React, {useState,} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {BASE_URL} from "../../base/Api";
import {getUserDailyRateById} from "../../redux/user/userOperations";
import {
	CalculatorFormContainer,
	CalculateGroupContainer,
	FormRadioGroup,
	InputBox
} from "./CalculatorForm.styled";
import Button from "../button";
import {getIsLoggedIn} from "../../redux/auth/authSelectors";
import {isOpenModal} from "../../redux/dailyCalorieIntake/dailyCalorieIntakeSlice";
import {getIsOpenModal} from "../../redux/dailyCalorieIntake/dailyCalorieIntake-selectors";


const CalculatorForm = ({setDailyRate}) => {
	const [height, setHeight] = useState('');
	const [age, setAge] = useState('');
	const [weight, setWeight] = useState('');
	const [desiredWeight, setDesiredWeight] = useState('');
	const [bloodType, setBloodType] = useState('');
	const dispatch = useDispatch();
	const isLoggedIn = useSelector(getIsLoggedIn);
	const showModal = useSelector(getIsOpenModal);
	
	const toggleModal = () => {
		dispatch(isOpenModal(!showModal));
	}
	
	const onHandleChange = e => {
		const {value, name} = e.target;
		
		switch (name) {
			case 'height':
				setHeight(value);
				break;
			case 'age':
				setAge(value);
				break;
			case 'weight':
				setWeight(value);
				break;
			case 'desiredWeight':
				setDesiredWeight(value);
				break;
			case 'bloodType':
				setBloodType(value);
				break;
			default:
				return;
		}
	}
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		
		const userData = {
			weight: Number(weight),
			height: Number(height),
			age: Number(age),
			desiredWeight: Number(desiredWeight),
			bloodType: Number(bloodType),
		}
		
		if (isLoggedIn) {
			dispatch(getUserDailyRateById(userData));
		} else {
			const result = await axios.post(`${BASE_URL}/daily-rate`, userData);
			result.data && setDailyRate(result.data);
		}
		
		toggleModal();
	}
	
	return (
		<CalculatorFormContainer onSubmit={handleSubmit}>
			<CalculateGroupContainer role="group" aria-labelledby="contact-details-head">
				<div className="wrapper">
					<InputBox>
						<input
							id="heightId"
							type="number"
							name="height"
							pattern="^[ 0-9]+$"
							required
							minLength="2"
							maxLength="3"
							value={height}
							onChange={onHandleChange}
						/>
						<label htmlFor="heightId">Height </label>
					</InputBox>
					<InputBox>
						<input
							id="ageId"
							type="number"
							minLength="2"
							maxLength="3"
							name="age"
							required
							value={age}
							onChange={onHandleChange}
						/>
						<label htmlFor="ageId">Age</label>
					</InputBox>
					<InputBox>
						<input
							id="weight"
							type="number"
							name="weight"
							minLength="2"
							maxLength="3"
							required
							value={weight}
							onChange={onHandleChange}
						/>
						<label htmlFor="weight">Weight</label>
					</InputBox>
				</div>
				<div className="wrapper">
					<InputBox>
						<input
							id="desiredWeightId"
							type="number"
							name="desiredWeight"
							minLength="2"
							maxLength="3"
							required
							value={desiredWeight}
							onChange={onHandleChange}
						/>
						<label htmlFor="desiredWeightId">Desired weight</label>
					</InputBox>
					<FormRadioGroup>
						<legend className="form-radio-group-title">Blood group</legend>
						<div className="radio-form-field">
							<input
								type="radio"
								name="bloodType"
								value="1"
								id="first-blood-group"
								onChange={onHandleChange}
							/>
							<label className="form-label" htmlFor="first-blood-group">1</label>
						</div>
						<div className="radio-form-field">
							<input
								type="radio"
								name="bloodType"
								value="2"
								id="second-blood-group"
								onChange={onHandleChange}
							/>
							<label className="form-label" htmlFor="second-blood-group">2</label>
						</div>
						<div className="radio-form-field">
							<input
								type="radio"
								// checked={bloodType === 3}
								name="bloodType"
								value="3"
								id="third-blood-group"
								onChange={onHandleChange}
							/>
							<label className="form-label" htmlFor="third-blood-group">3</label>
						</div>
						<div className="radio-form-field">
							<input
								type="radio"
								name="bloodType"
								value="4"
								id="fourth-blood-group"
								onChange={onHandleChange}
							/>
							<label className="form-label" htmlFor="fourth-blood-group">4</label>
						</div>
					</FormRadioGroup>
				</div>
			</CalculateGroupContainer>
			<Button>Lose weight</Button>
		</CalculatorFormContainer>
	)
}

export default CalculatorForm;