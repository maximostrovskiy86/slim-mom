import {LoginPageContainer} from "./LoginPage.styled";
import LoginForm from '../../components/loginForm';
import HeadTitle from "../../components/headTitle";

const LoginPage = () => {
	return (
		<>
			<LoginPageContainer className='loginPage'>
				<HeadTitle>Login</HeadTitle>
				<LoginForm/>
			</LoginPageContainer>
		</>
	)
}

export default LoginPage;