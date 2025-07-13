import React from "react";
import {HeaderContainer} from './Header.styled';
import UserInfo from "../userInfo";
import authOperations from "../../redux/auth/authOperations";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoggedIn} from "../../redux/auth/authSelectors";
import Navigate from "../navigate";
import Container from "../container";
import {useNavigate} from "react-router-dom";
import {useMediaPredicate} from "react-media-hook";


const Header = () => {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector(getIsLoggedIn);
	const navigate = useNavigate();
	const smallerThan768 = useMediaPredicate("(max-width: 768px)");
	
	
	const onLogOut = async () => {
		const response = await dispatch(authOperations.logOut());
		
		if (response.payload.status === 204) {
			navigate("/login", {replace: true});
		}
	}
	
	return (
		<>
			<HeaderContainer>
				<Container>
					<Navigate onLogOut={onLogOut}/>
				</Container>
			</HeaderContainer>
			{isLoggedIn && smallerThan768 && <UserInfo onLogOut={onLogOut}/>}
		</>
	)
}

export default Header;