import React from "react";
import logo from "../../images/logo/logo.svg";
import logoTablet from "../../images/logo/logo-tablet.svg";
import logoDesktop from "../../images/logo/logo-desktop.svg";
import { useSelector } from "react-redux";
import {getIsLoggedIn} from "../../redux/auth/authSelectors";

const Logo = () => {
	
	const isLoggedIn = useSelector(getIsLoggedIn);

	return (
		<>
			<picture>
				<source
					srcSet={logoDesktop}
					media="(min-width: 1200px)"
				/>
				<source
					srcSet={logoTablet}
					media="(min-width: 768px)"
				/>
				<source
					srcSet={isLoggedIn ? logoTablet : logo}
					media="(max-width: 767px)"
				/>
				<img
					className="team-list__images"
					src="../../images/logo/logo.png"
					alt="Логотип"
				/>
			</picture>
		</>
	);
};

export default Logo;
