import {UserInfoWrapper} from "./UserInfo.styled";
import { useSelector } from "react-redux";
import Container from "../container";
import {getUserName} from "../../redux/user/userSelectors";

const UserInfo = ({onLogOut}) => {
	const  username  = useSelector(getUserName);
	
	return (
		<UserInfoWrapper>
			<Container>
				<span>{username && username}</span>
				<button type="button" onClick={onLogOut}>Log Out</button>
			</Container>
		</UserInfoWrapper>
	)
}

export default UserInfo;