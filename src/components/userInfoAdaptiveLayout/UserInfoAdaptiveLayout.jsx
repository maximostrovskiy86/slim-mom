import {useSelector} from "react-redux";
import {getUserName} from "../../redux/user/userSelectors";
import {UserInfoAdaptiveLayoutContainer} from "./UserInfoAdaptiveLayout.styled";

const UserInfoAdaptiveLayout = ({onLogOut}) => {
	const username = useSelector(getUserName);
	
	return (
		<UserInfoAdaptiveLayoutContainer>
			<span>{username && username}</span>
			<button type="button" onClick={onLogOut}>Log Out</button>
		</UserInfoAdaptiveLayoutContainer>
	)
}

export default UserInfoAdaptiveLayout;