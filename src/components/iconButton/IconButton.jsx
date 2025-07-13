import { IconButtonStyled } from "./IconButton.styled";

const IconButton = ({children, toggleModal, ...allyProps}) => {
	return (
		<IconButtonStyled type="button" onClick={toggleModal} {...allyProps}>
			{children}
		</IconButtonStyled>
		
	)
}
export default IconButton;