import RegistrationForm from '../../components/registrationForm/RegistrationForm';
import HeadTitle from "../../components/headTitle";
import {RegistrationPageContainer} from "./RegistrationPage.styled";

const RegistrationPage = () => {
	return (
		<>
			<RegistrationPageContainer>
				<HeadTitle>Registration</HeadTitle>
				<RegistrationForm/>
			</RegistrationPageContainer>
		</>
	
	)
}

export default RegistrationPage;