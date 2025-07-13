import React from "react";
import { ButtonContainer } from "./Button.styled";

const Button = ({type="submit", onClick, children}) => {
	return (
		<ButtonContainer  type={type} onClick={onClick}>
			{children}
		</ButtonContainer>
	);
};

export default Button;
