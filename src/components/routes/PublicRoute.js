import React from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getIsLoggedIn} from "../../redux/auth/authSelectors";

export default function PublicRoute({component: Component, redirectTo = '/'}) {
	const isLoggedIn = useSelector(getIsLoggedIn);
	return (
		<>
			{isLoggedIn ? <Navigate to={redirectTo}/> : Component}
		</>
	)

}