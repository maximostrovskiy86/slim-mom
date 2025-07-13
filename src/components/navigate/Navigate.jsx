import React from "react";
import {useSelector} from "react-redux";
import {getIsLoggedIn} from "../../redux/auth/authSelectors";
import {LogoContainer, NavigateMenuStyle, Link, Menu} from './Navigate.styled';
import Logo from '../logo';
import {ImMenu, ImCross} from "react-icons/im";
import {useMediaPredicate} from "react-media-hook";
import UserInfoAdaptiveLayout from "../userInfoAdaptiveLayout";


const Navigate = ({onLogOut}) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const isLoggedIn = useSelector(getIsLoggedIn);
	const biggerThan768 = useMediaPredicate("(min-width: 768px)");
	
	const toggleMenu = () => {
		setIsOpen(prev => !prev);
	}
	
	return (
		<>
			<LogoContainer>
				<Link to={isLoggedIn ? "/dairy" : "/"}>
					<Logo/>
				</Link>
			</LogoContainer>
			{isLoggedIn ?
				<>
					{biggerThan768 && <UserInfoAdaptiveLayout onLogOut={onLogOut}/>}
					<Menu>
						<button className="icon-box" onClick={toggleMenu}>
							{isOpen ? <ImCross size="1.75em" color="#212121"/> : <ImMenu size="1.75em"/>}
						</button>
						{isOpen &&
							<ul className="menu-mobile-box" onClick={toggleMenu}>
								<li><Link to="/dairy">Diary</Link></li>
								<li><Link to="/calculator">Calculator</Link></li>
							</ul>
						}
						<ul className="menu-list">
							<li><Link to="/dairy">Diary</Link></li>
							<li><Link to="/calculator">Calculator</Link></li>
						</ul>
					</Menu>
				</> :
				<NavigateMenuStyle>
					<ul>
						<li><Link to="/login">Login</Link></li>
						<li><Link to="/registration">Register</Link></li>
					</ul>
				</NavigateMenuStyle>
			}
		</>
	)
}

export default Navigate;